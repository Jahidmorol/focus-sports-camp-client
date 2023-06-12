import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";

const CheckOutForm = ({ selected }) => {
  const { price, image, instructorName, sportName, _id, sportId } = selected;
  // console.log(price);
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxios();
  const [processing, setProcessing] = useState(false);
  const [transitionId, setTransitionId] = useState("");

  // console.log(transitionId);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrors(error.message);
    } else {
      setErrors("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent.id);
      setSuccess(`Your Payment Success your id ${paymentIntent.id}`);
      // Swal.fire("Good payment complite!", "You clicked the button!", "success");
      const history = {
        image,
        instructorName,
        sportName,
        _id,
        sportId,
        email: user?.email,
        payment: "paid",
        transitionId: paymentIntent.id,
        data: new Date()
      };

      console.log("is site id from out history classes", history);
      console.log("is site id from out selected classes", selected);
      axiosSecure.post("/payment", history).then((res) => {
        // console.log(res.data);
        setTransitionId(paymentIntent.id);
        if (res.data.insertedId) {
          axiosSecure.delete(`/myclases/${_id}`).then((res) => {
            // const deletedd = res.data;
            // console.log(deletedd);
            if (res.data.deletedCount > 0) {
              Swal.fire(
                "Good payment complite!",
                "You clicked the button!",
                "success"
              );
            }
          });
        }
      });
      // console.log(paymentIntent);
    }
  };
  return (
    <form className="w-2/4 mx-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-red-500 text-center ">{errors}</p>
      <p className="text-green-600 text-center ">{success}</p>
      <div className="text-center mt-4">
        <button
          className="btn btn-info"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;

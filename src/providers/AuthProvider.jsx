import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.confiq";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(null);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("logged in user inside auth state observer", currentUser);

      if (currentUser) {
        axios
          .post("https://summer-camp-server-psi.vercel.app/jwt", { email: currentUser.email })
          .then((res) => {
            localStorage.setItem("summer-camp-token", res.data.token);
            setUser(currentUser);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("summer-camp-token");
        setLoading(false);
        setUser(currentUser);
      }
    });

    return () => {
      unsubsCribe();
    };
  }, [reload]);

  const authInfo = {
    user,
    createUser,
    updateUser,
    logIn,
    logOut,
    loading,
    signInWithGoogle,
    setReload,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

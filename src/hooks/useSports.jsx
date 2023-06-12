import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSports = () => {
    const {user , loading} = useAuth();
  const {
    data: sports = [],
    isLoading: loader,
    refetch,
  } = useQuery({
    enabled: !loading,
    // enabled: !loading && !! user?.email,
    queryKey: ["sports"],
    queryFn: async () => {
      const res = await fetch("https://summer-camp-server-psi.vercel.app/sports");
      return res.json();
    },
  });

  return [sports, loader, refetch]
};

export default useSports;

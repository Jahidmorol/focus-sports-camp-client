import { useQuery } from "@tanstack/react-query";

const useSports = () => {
  const {
    data: sports = [],
    isLoading: loader,
    refetch,
  } = useQuery({
    queryKey: ["sports"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sports");
      return res.json();
    },
  });

  return [sports, loader, refetch]
};

export default useSports;

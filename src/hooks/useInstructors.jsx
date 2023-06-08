import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
  const {
    data: instructors = [],
    isLoading: loader,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/instructors");
      return res.json();
    },
  });
  return [instructors, loader, refetch]
};

export default useInstructors;

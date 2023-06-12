import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
  const {
    data: instructors = [],
    isLoading: loader,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("https://summer-camp-server-psi.vercel.app/instructors");
      return res.json();
    },
  });
  return [instructors, loader, refetch]
};

export default useInstructors;

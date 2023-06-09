import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useMyClass = () => {
   const {user, loading} = useAuth();
   const [axiosSecure] = useAxios();

   const { refetch, data: myclases  = [] } = useQuery({
    enabled: !loading && !! user?.email,
    queryKey: ["myclases", user?.email],
    queryFn: async() => {
        const res = await axiosSecure(`/myclases?email=${user?.email}`);
        // console.log("res from axios", res);
        return res.data;
      },
   })
   return [myclases, refetch];
};

export default useMyClass;
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useInstructor = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxios()
    const {data: isInstructor, isLoading: isInsLoading} = useQuery({
        queryKey: ["isInstructor", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructors/${user?.email}`)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInsLoading]
};

export default useInstructor;
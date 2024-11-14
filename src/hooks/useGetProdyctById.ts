import { useQuery } from "react-query"
import { getProductById } from "../server"


const useGetProductById = (id: number) => {

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById({ id })
  })

  return { data, isLoading, error }
}

export default useGetProductById

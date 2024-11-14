import { useInfiniteQuery } from "react-query"
import { getProducts } from "../server"



const useGetAllProducts = ({ category }: { category: string }) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["products", category],
    queryFn: ({ pageParam = 0 }) => getProducts({ category: category, limit: 10, skip: pageParam }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.products.length === 0) return undefined
      return lastPage.skip + 10
    },
  })

  return { data, isLoading, isError, fetchNextPage, hasNextPage }

}

export default useGetAllProducts

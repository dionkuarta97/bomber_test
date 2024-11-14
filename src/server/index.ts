


export const getProducts = async ({ category, limit = 10, skip = 0 }: { category: string, limit: number, skip: number }) => {

  const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`)
  const data = await response.json()
  return data
}

export const getProductById = async ({ id }: { id: number }) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await response.json()
  return data
}

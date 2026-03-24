export const GetProductsPage = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await axios.get('localhost:8080/products')
    setProducts(response.data)
  }

  return (
    <>
      {
        products.map((product) => {
          return(
            <div key={product._id}>
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
          )
        })
      }
    </>
  )
}
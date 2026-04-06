import { NavBar } from '../../components/NavBar/NavBar'
import { useEffect, useState } from "react"
import axios from 'axios';
import './style.css';

export const GetProductsPage = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/products')
    setProducts(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <div className="on-page">
        <NavBar />
        <table>

          <thead>

          </thead>
          {
            products.map((product) => {
              return (
                <tr>
                  <th><div key={product._id}>
                    <span>{product.name}</span>
                  </div></th>
                </tr>

              )
            })
          }
        </table>
      </div>
    </>
  )
}
import { NavBar } from '../../components/NavBar/NavBar'
import { useEffect, useState } from "react"
import axios from 'axios';
import '../../Styles/Site.css';
import './style.css';

export const GetProductsPage = () => {

  const [products, setProducts] = useState([])
  const [notFoundProducts, setNotFoundProducts] = useState(true)

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/products')
    console.log(response.data)
    if (response.data.products) {
      setProducts(response.data.products)
      setNotFoundProducts(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <NavBar />
      <div className="on-page">
        <div className="header">

        <h1>Produtos</h1>
        <button>Cadastrar produto</button>
        </div>

        <div className='produtos'>
          {notFoundProducts
            ? <h4>Não há produtos cadastrados</h4>
            : <table>

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
          }
        </div>

      </div>
    </>
  )
}
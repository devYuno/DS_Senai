import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<any>([])

  const fetchData = async () => {
    const data = await axios.get("http://localhost:8080/")
    console.log(data)
    setProducts(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      
    </>
  )
}

export default App

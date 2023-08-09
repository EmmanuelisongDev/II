import { useState,useEffect } from 'react'
import { commerce }from './lib/commerce';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  data.map((data) => {
    console.log(data.image.url)
  })
    return true

  }

  useEffect(() => {
    fetchProducts()
  },[])


  return (
  <div className='App'>
{
  products.map((products) => (
    <>
    <div key={products?.id}>
      <h1>{products?.name}</h1><br/>
      <img src={products.image.url} alt="" />
      </div>
    </>
  ))
}
  </div>
  )
}

export default App

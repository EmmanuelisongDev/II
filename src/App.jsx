import { useState,useEffect } from 'react'
import { commerce }from './lib/commerce';
import { Route,Routes } from 'react-router-dom';
import './App.css'
import { Cart, Home, Product } from './pages';
import { Footer, Navbar } from './components';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  // data.map((data) => {
  //   console.log(data)
  // })
    

  }
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  },[])
  
  const handleAddCart = async (productId,quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }
  console.log(cart)


  return (
  <div className='App'>
<Navbar totalItems={cart.total_items}/>
    <Routes>
      <Route path='/' element={<Home products={products} onAddToCart={handleAddCart}/>}/>
      <Route path='/product/:slug' element={<Product/>}/>
      <Route path='/cart' element={<Cart cart={cart}/>}/>

    </Routes>
    

{/* {
  products.map((products) => (
    <>
    <div key={products?.id}>
      <h1>{products?.name}</h1><br/>
      <img src={products.image.url} alt="" />
      </div>
    </>
  ))
} */}
<Footer/>
  </div>
  )
}

export default App

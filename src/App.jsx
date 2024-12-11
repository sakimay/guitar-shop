import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { useState } from "react"
import { db } from "./data/db"

function App() {
  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])
  const MAX_ITEMS = 5

  function addToCart(item) {
    const itemExists = cart.findIndex(guitar => guitar.id === item.id)
    if (itemExists >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity += 1
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart(prevCart => [...prevCart, item])
    }
  }

  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }
  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <Main
        data={data}
        addToCart={addToCart}
      />
      <Footer />
    </>
  )
}

export default App

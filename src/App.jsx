import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { useState } from "react"
import { db } from "./data/db"

function App() {
  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

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
  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
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

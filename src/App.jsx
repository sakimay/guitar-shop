import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { useCart } from "./hooks/useCart"

function App() {

  const { cart, data, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmtpy, cartTotal } = useCart()
  
  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmtpy={isEmtpy}
        cartTotal={cartTotal}
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

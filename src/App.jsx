import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { useState } from "react"
import { db } from "./data/db"

function App() {
  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])
  return (
    <>
      <Header 
        cart={cart}/>
      <Main 
        data={data}
        cart={cart}
        setCart={setCart}/>
      <Footer />
    </>
  )
}

export default App

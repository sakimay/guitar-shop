import Guitar from "./Guitar"
import { useState } from "react"
import { db } from "../data/db"
export default function Main() {
    const [data, setData] = useState(db)
    const [cart, setCart] = useState([])

    function addToCart(item){
        const itemExists = cart.findIndex( guitar => guitar.id === item.id)
        if(itemExists >= 0) {
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity += 1 
            setCart(updatedCart)
        }else{
            item.quantity = 1
            setCart(prevCart => [...prevCart, item])
        }
    }

    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map((guitar) => (
                    <Guitar 
                        key={guitar.id}
                        guitar={guitar}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </main>
    )
}
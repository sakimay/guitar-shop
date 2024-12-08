import Guitar from "./Guitar"
import { useState } from "react"
import { db } from "../data/db"
export default function Main() {
    const [data, setData] = useState(db)

    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map((guitar) => (
                    <Guitar 
                        key={guitar.id}
                        guitar={guitar}
                    />
                ))}
            </div>
        </main>
    )
}
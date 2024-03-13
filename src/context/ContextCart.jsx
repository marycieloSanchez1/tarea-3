import { createContext, useState } from "react";

export const ContextCart = createContext()

export const ProviderContext = ({ children }) => {

    const [cartShopping, setCartShopping] = useState([])

    const addProduct = (product) => {

        const existProduct = cartShopping.find((item) => item.id === product.id)
        if (existProduct) {
            const newProduct = {
                ...product,
                quantity: existProduct.quantity + 1
            }
            const updateCarrito = cartShopping.map((item)=>(
                item.id===existProduct.id? newProduct:item
            ))
            setCartShopping(updateCarrito)
        } else {
            const newProduct = {
                ...product,
                quantity: 1
            }
            setCartShopping([...cartShopping, newProduct])
        }
    }

    return (
        <ContextCart.Provider value={{addProduct,cartShopping}}>
            {children}
        </ContextCart.Provider>
    )
}

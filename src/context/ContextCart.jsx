import { createContext, useState } from "react";

export const ContextCart = createContext()

export const ProviderContext = ({ children }) => {

    const [cartShopping, setCartShopping] = useState([])

    const addProduct = (product) => {
        const existProduct = cartShopping.find((item) => item.id === product.id);
        if (existProduct) {
            const updatedCart = cartShopping.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartShopping(updatedCart);
        } else {
            const newProduct = { ...product, quantity: 1 };
            setCartShopping([...cartShopping, newProduct]);
        }
    };

    const deleteProduct = (productId) => {
        const updatedCart = cartShopping.filter((item) => item.id !== productId);
        setCartShopping(updatedCart);
    };

    return (
        <ContextCart.Provider value={{ addProduct, deleteProduct, cartShopping }}>
            {children}
        </ContextCart.Provider>
    )
}

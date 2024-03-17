import { useContext } from "react";
import { ContextCart } from "../context/ContextCart";

export const Modal = ({ onClose, cartShopping }) => {
    const { deleteProduct } = useContext(ContextCart); 

    const totalPrice = cartShopping.reduce((total, item) => total + (item.price * item.quantity), 0);

    const closeModal = () => {
        onClose(); 
    };

    const handleRemoveFromCart = (productId) => {
        deleteProduct(productId); 
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={closeModal}></div>
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md z-50 overflow-y-auto max-h-96">
                    <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
                    {cartShopping.length === 0 ? (
                        <p>No hay elementos en el carrito</p>
                    ) : (
                        <>
                            {cartShopping.map((item) => (
                                <div key={item.id} className="flex items-center mb-4">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 mr-4" />
                                    <div>
                                        <p className="text-lg font-bold">{item.title}</p>
                                        <p className="text-gray-500">Precio: S/. {item.price}</p>
                                        <p className="text-gray-500">Cantidad: {item.quantity}</p>
                                        <button onClick={() => handleRemoveFromCart(item.id)} className="bg-red-500 text-white rounded-md px-3 py-1 mt-2">Eliminar</button>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-4">
                                <p className="font-bold">Total: S/. {totalPrice}</p>
                            </div>
                        </>
                    )}
                    <button className="bg-green-500 text-white mx-auto rounded-md px-4 py-2 block hover:bg-green-700 transition" onClick={closeModal}>Cerrar</button>
                </div>
            </div>
        </>
    );
};



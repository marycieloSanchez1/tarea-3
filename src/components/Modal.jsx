import { useContext } from "react";
import { ContextCart } from "../context/ContextCart";

export const Modal = ({ onClose, deleteProduct }) => {
  const { cartShopping } = useContext(ContextCart);

  const calculateTotal = () => {
    return cartShopping.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md z-50">
        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
        <ul>
          {cartShopping.map((item, index) => (
            <li key={index} className="flex items-center mb-4">
              <div className="mr-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">Price: ${item.price}</p>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
                
                <button onClick={() => deleteProduct(item.id)} className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg mt-2">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-right">
          <p className="text-gray-600 font-semibold">Total: ${calculateTotal().toFixed(2)}</p>
          <button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};




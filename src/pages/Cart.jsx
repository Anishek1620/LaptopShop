import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <h2 className="p-10 text-xl font-semibold">
        Cart is empty
      </h2>
    );
  }

  const totalItems = cartItems.reduce(
    (t, item) => t + item.qty,
    0
  );

  const totalPrice = cartItems.reduce(
    (t, item) => t + item.price * item.qty,
    0
  );

  // ✅ CHECKOUT HANDLER
  const handleCheckout = () => {
    clearCart();          // clear cart + localStorage
    navigate("/success"); // redirect
  };

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* CART ITEMS */}
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-6">
          Your Cart
        </h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-6 items-center border p-4 mb-4 rounded shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-24 object-cover rounded"
            />

            <div className="flex-1">
              <h2 className="font-semibold text-lg">
                {item.name}
              </h2>

              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 border rounded"
                >
                  −
                </button>

                <span className="font-semibold">
                  {item.qty}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 border rounded"
                >
                  +
                </button>
              </div>

              <p className="font-semibold text-blue-600 mt-2">
                ₹{item.price * item.qty}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 font-medium"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* CHECKOUT */}
      <div className="border p-6 rounded shadow-md h-fit">
        <h2 className="text-xl font-bold mb-4">
          Price Details
        </h2>

        <div className="flex justify-between mb-2">
          <span>Total Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="flex justify-between mb-4">
          <span>Delivery</span>
          <span className="text-green-600">
            FREE
          </span>
        </div>

        <hr className="mb-4" />

        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total Amount</span>
          <span>₹{totalPrice}</span>
        </div>

        {/* ✅ FINAL CHECKOUT */}
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      
      {/* SUCCESS ICON */}
      <div className="text-green-600 text-6xl mb-4">
        ✓
      </div>

      {/* MESSAGE */}
      <h1 className="text-3xl font-bold mb-2">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-600 mb-6">
        Thank you for shopping with LaptopShop.  
        Your order will be delivered soon.
      </p>

      {/* ACTION BUTTON */}
      <Link
        to="/laptops"
        className="bg-black text-white px-6 py-3 rounded-lg 
                   hover:bg-gray-800 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Success;

import { useParams } from "react-router-dom";
import { useContext } from "react";
import laptops from "../data/laptops";
import { CartContext } from "../context/CartContext";

const LaptopDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const laptop = laptops.find(
    (item) => item.id === Number(id)
  );

  if (!laptop) return <h2 className="p-10">Laptop not found</h2>;

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img src={laptop.image} className="w-full rounded-lg" />

      <div>
        <h1 className="text-3xl font-bold">{laptop.name}</h1>
        <p className="text-gray-600 my-3">{laptop.specs}</p>
        <p className="text-2xl font-semibold text-blue-600 mb-6">
          ₹{laptop.price}
        </p>

        <button
          onClick={() => addToCart(laptop)}
          className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-green-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default LaptopDetails;

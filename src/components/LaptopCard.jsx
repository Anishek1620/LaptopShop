import { Link } from "react-router-dom";

const LaptopCard = ({ laptop }) => {
  return (
    <div className="relative border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      
      {/* 🔖 BADGES */}
      {laptop.isNew && (
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
          NEW
        </span>
      )}

      {laptop.isBestSeller && (
        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
          BEST SELLER
        </span>
      )}

      {/* 🖼️ IMAGE */}
      <img
        src={laptop.image}
        alt={laptop.name}
        className="h-40 w-full object-cover rounded"
      />

      {/* 📄 DETAILS */}
      <h2 className="mt-3 font-bold text-lg">
        {laptop.name}
      </h2>

      <p className="text-sm text-gray-600">
        {laptop.specs}
      </p>

      <p className="font-semibold text-blue-600 mt-2">
        ₹{laptop.price}
      </p>

      {/* 🔍 VIEW BUTTON */}
      <Link
        to={`/laptop/${laptop.id}`}
        className="block mt-3 text-center bg-black text-white py-2 rounded hover:bg-gray-800 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default LaptopCard;

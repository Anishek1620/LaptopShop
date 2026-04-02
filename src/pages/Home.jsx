import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-10 text-center ">
      <h1 className="text-4xl font-bold mb-4">
        Buy Your Next Laptop with Confidence
      </h1>
      <p className="text-gray-600 mb-6">
        Best laptops from HP, Dell, Lenovo, Apple & more
      </p>
      <Link
        to="/laptops"
        className="bg-black text-white px-6 py-3 rounded"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Home;

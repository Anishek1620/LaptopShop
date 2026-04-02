import { useState } from "react";
import laptops from "../data/laptops";
import LaptopCard from "../components/LaptopCard";

const Laptops = () => {
  const [brand, setBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState(150000);
  const [search, setSearch] = useState("");

  // 🔍 FILTER + SEARCH LOGIC
  const filteredLaptops = laptops.filter((laptop) => {
    const brandMatch =
      brand === "All" || laptop.brand === brand;

    const priceMatch = laptop.price <= maxPrice;

    const searchMatch =
      laptop.name.toLowerCase().includes(search.toLowerCase()) ||
      laptop.brand.toLowerCase().includes(search.toLowerCase());

    return brandMatch && priceMatch && searchMatch;
  });

  return (
    <div className="p-6 bg-blue-400">
      {/* FILTER & SEARCH SECTION */}
      <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">
        
        {/* 🔎 FORMAL SEARCH BAR */}
        <div className="relative w-full md:w-1/3">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search for laptops, brands, models"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg 
                       shadow-sm focus:outline-none focus:ring-2 
                       focus:ring-black focus:border-black"
          />
        </div>

        {/* 🏷️ BRAND FILTER */}
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-full md:w-1/4 
                     focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="All">All Brands</option>
          <option value="HP">HP</option>
          <option value="Dell">Dell</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Apple">Apple</option>
          <option value="Asus">Asus</option>
          <option value="Acer">Acer</option>
          <option value="MSI">MSI</option>
        </select>

        {/* 💰 PRICE FILTER */}
        <div className="flex flex-col w-full md:w-1/3">
          <label className="mb-1 font-medium text-gray-700">
            Max Price: ₹{maxPrice}
          </label>
          <input
            type="range"
            min="30000"
            max="150000"
            step="5000"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Number(e.target.value))
            }
            className="accent-black"
          />
        </div>
      </div>

      {/* 🖥️ LAPTOP LIST */}
      {filteredLaptops.length === 0 ? (
        <p className="text-center text-gray-500">
          No laptops found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredLaptops.map((laptop) => (
            <LaptopCard
              key={laptop.id}
              laptop={laptop}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Laptops;

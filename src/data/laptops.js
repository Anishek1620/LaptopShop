const laptops = [
  {
    id: 1,
    name: "HP Pavilion 15",
    brand: "HP",
    price: 65000,
    isNew: true,
    isBestSeller: false,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    specs: "Intel i5 | 16GB RAM | 512GB SSD",
  },
  {
    id: 2,
    name: "Dell Inspiron 14",
    brand: "Dell",
    price: 72000,
    isNew: false,
    isBestSeller: true,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    specs: "Intel i7 | 16GB RAM | 1TB SSD",
  },
  {
    id: 3,
    name: "Lenovo IdeaPad Slim 3",
    brand: "Lenovo",
    price: 54000,
    isNew: true,
    isBestSeller: true,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
    specs: "Ryzen 5 | 8GB RAM | 512GB SSD",
  },
  {
    id: 4,
    name: "Apple MacBook Air M1",
    brand: "Apple",
    price: 89000,
    isNew: false,
    isBestSeller: true,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    specs: "Apple M1 | 8GB RAM | 256GB SSD",
  },
  {
    id: 5,
    name: "Asus VivoBook 15",
    brand: "Asus",
    price: 58000,
    isNew: true,
    isBestSeller: false,
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    specs: "Intel i5 | 8GB RAM | 512GB SSD",
  },
  {
    id: 6,
    name: "Acer Aspire 7",
    brand: "Acer",
    price: 62000,
    isNew: false,
    isBestSeller: true,
    image:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
    specs: "Ryzen 5 | 16GB RAM | 512GB SSD",
  },
  {
    id: 7,
    name: "MSI GF63 Gaming",
    brand: "MSI",
    price: 78000,
    isNew: true,
    isBestSeller: false,
    image:
      "https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&w=800&q=80",
    specs: "Intel i7 | 16GB RAM | RTX 3050",
  },
  {
    id: 8,
    name: "HP Victus Gaming",
    brand: "HP",
    price: 85000,
    isNew: false,
    isBestSeller: true,
    image:
      "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=800&q=80",
    specs: "Ryzen 7 | 16GB RAM | RTX 3060",
  },
  {
    id: 9,
    name: "Dell XPS 13",
    brand: "Dell",
    price: 115000,
    isNew: true,
    isBestSeller: true,
    image:
      "https://www.cnet.com/a/img/resize/8f84098737a1c294165b42dbd65cbd0b1b8d8a1a/hub/2015/01/13/b80d694b-5c6a-4321-999f-697679dbf76f/dell-xps-13-2015-product-photos-01.jpg?auto=webp&width=768",
    specs: "Intel i7 | 16GB RAM | 1TB SSD",
  },
  {
    id: 10,
    name: "Lenovo Legion 5",
    brand: "Lenovo",
    price: 98000,
    isNew: false,
    isBestSeller: true,
    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=800&q=80",
    specs: "Ryzen 7 | 16GB RAM | RTX 3060",
  },
  {
    id: 11,
    name: "Asus ROG Zephyrus",
    brand: "Asus",
    price: 125000,
    isNew: true,
    isBestSeller: false,
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    specs: "Ryzen 9 | 32GB RAM | RTX 3070",
  },
  {
    id: 12,
    name: "Acer Nitro 5",
    brand: "Acer",
    price: 74000,
    isNew: false,
    isBestSeller: true,
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
    specs: "Intel i5 | 16GB RAM | GTX 1650",
  },
  {
    id: 13,
    name: "HP Envy x360",
    brand: "HP",
    price: 82000,
    isNew: true,
    isBestSeller: false,
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=800&q=80",
    specs: "Ryzen 7 | 16GB RAM | 512GB SSD",
  },
  {
    id: 14,
    name: "Dell Latitude 5420",
    brand: "Dell",
    price: 67000,
    isNew: false,
    isBestSeller: true,
    image:
      "https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&w=800&q=80",
    specs: "Intel i5 | 8GB RAM | 512GB SSD",
  },
  {
    id: 15,
    name: "Lenovo ThinkPad E14",
    brand: "Lenovo",
    price: 69000,
    isNew: true,
    isBestSeller: false,
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    specs: "Intel i5 | 16GB RAM | 512GB SSD",
  },
  {
    id: 16,
    name: "Apple MacBook Pro M2",
    brand: "Apple",
    price: 145000,
    isNew: true,
    isBestSeller: true,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    specs: "Apple M2 | 16GB RAM | 512GB SSD",
  },
  {
    id: 17,
    name: "Asus TUF Gaming F15",
    brand: "Asus",
    price: 88000,
    isNew: false,
    isBestSeller: true,
    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=800&q=80",
    specs: "Intel i7 | 16GB RAM | RTX 3050",
  },
  {
    id: 18,
    name: "MSI Modern 14",
    brand: "MSI",
    price: 52000,
    isNew: true,
    isBestSeller: false,
    image:
      "https://i.gadgets360cdn.com/large/MSI_modern_14_b11M0_front_gadgets_360_1631536925234.jpg",
    specs: "Intel i5 | 8GB RAM | 512GB SSD",
  },
  {
    id: 19,
    name: "Acer Swift 3",
    brand: "Acer",
    price: 60000,
    isNew: false,
    isBestSeller: true,
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    specs: "Ryzen 5 | 8GB RAM | 512GB SSD",
  },
  {
    id: 20,
    name: "HP Chromebook 14",
    brand: "HP",
    price: 38000,
    isNew: true,
    isBestSeller: false,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
    specs: "Intel Celeron | 8GB RAM | 128GB SSD",
  },
];

export default laptops;

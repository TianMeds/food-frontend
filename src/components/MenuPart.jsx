import React from 'react';

const MenuPart = () => {
  const products = [
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235538456.png",
      productName: "G & R Sisig ",
      productDescription: "Sizzling Sisig with Java Rice and also egg included",
      productPrice: "₱90.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235514099.png",
      productName: "G & R Chicken",
      productDescription: "Sizzling Chicken with Java Rice and also egg included",
      productPrice: "₱90.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235632341.png",
      productName: "G & R Porkchop",
      productDescription: "Sizzling Porkchop with Java Rice and also egg included",
      productPrice: "₱85.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235514099.png",
      productName: "G & R Chicken & Hungarian",
      productDescription: "Sizzling Chicken with Hungarian Sausage, Java Rice and Egg",
      productPrice: "₱150.00",
      new: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000857650.png",
      productName: "G & R Chops & Hungarian",
      productDescription: "Sizzling Porkchop with Hungarian Sausage, Java Rice and Egg",
      productPrice: "₱150.00",
      new: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235632341.png",
      productName: "G & R PorkChop & Chicken",
      productDescription: "Sizzling Porkchop with Chicken, Java Rice and also egg included",
      productPrice: "₱165.00",
      new: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000857650.png",
      productName: "G & R Hungarian",
      productDescription: "Sizzling Hungarian with Java Rice and also egg included",
      productPrice: "₱90.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000017393.png",
      productName: "G & R Burger Steak",
      productDescription: "Sizzling Burger Steak with Java Rice and also egg included",
      productPrice: "₱85.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000208537.png",
      productName: "G & R Hotdog",
      productDescription: "Sizzling Porkchop with Java Rice and Egg",
      productPrice: "₱80.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000259005.png",
      productName: "G & R Longganisa",
      productDescription: "Sizzling Longanissa with Java Rice ",
      productPrice: "₱80.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000358772.png",
      productName: "G & R Tocino",
      productDescription: "Sizzling Tocino with Java Rice",
      productPrice: "₱80.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000530055.png",
      productName: "G & R Bangus",
      productDescription: "Sizzling Bangus with Java Rice",
      productPrice: "₱80.00",
      original: true,
    },
  ];
  
  const sortedProducts = products.sort((a, b) => {
    if (a.bestSeller && !b.bestSeller) {
      return -1;
    }
    if (!a.bestSeller && b.bestSeller) {
      return 1;
    }
    if (a.new && !b.new) {
      return -1;
    }
    if (!a.new && b.new) {
      return 1;
    }
    return 0;
  });

  const nonSizzlingProducts = [
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001500003.png",
      productName: "Pork Caldereta",
      productDescription: "This consists only of Pork Caldereta. No rice is included.",
      productPrice: "₱70.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001547030.png",
      productName: "Buffalo Wings",
      productDescription: "This consists only of Buffalo Wings. No rice is included.",
      productPrice: "₱65.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001640490.png",
      productName: "Chicken Afritada",
      productDescription: "This consists only of Chicken Afritada. No rice is included.",
      productPrice: "₱70.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001739841.png",
      productName: "Buttered Shrimp",
      productDescription: "This consists only of Buttered Shrimp. No rice is included.",
      productPrice: "₱90.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001818113.png",
      productName: "Mix Veg.",
      productDescription: "This consists only of Mix Veg. No rice is included.",
      productPrice: "₱65.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001845155.png",
      productName: "Pork Menudo",
      productDescription: "This consists only of Pork Menudo. No rice is included.",
      productPrice: "₱65.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001912010.png",
      productName: "Giniling w/Hard-Boiled Egg",
      productDescription: "This consists only of Giniling with Hard-Boiled Egg. No rice is included.",
      productPrice: "₱70.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002037222.png",
      productName: "Pork Sinigang",
      productDescription: "This consists only of Pork Sinigang. No rice is included.",
      productPrice: "₱70.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002111494.png",
      productName: "Batchoy",
      productDescription: "This consists only of Batchoy. No rice is included.",
      productPrice: "₱65.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002246571.png",
      productName: "Pork Hamonado",
      productDescription: "This consists only of Pork Hamonado. No rice is included.",
      productPrice: "₱75.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002312915.png",
      productName: "Chicken Adobo",
      productDescription: "This consists only of Chicken Adobo. No rice is included.",
      productPrice: "₱65.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002355076.png",
      productName: "Beef Caldereta",
      productDescription: "This consists only of Beef Caldereta. No rice is included.",
      productPrice: "₱80.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002441108.png",
      productName: "Ampalaya con Carne",
      productDescription: "This consists only of Ampalaya con Carne. No rice is included.",
      productPrice: "₱75.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002511896.png",
      productName: "Beef with Broccoli",
      productDescription: "This consists only of Beef with Broccoli. No rice is included.",
      productPrice: "₱100.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002609010.png",
      productName: "Beef with Oyster Sauce",
      productDescription: "This consists only of Beef with Oyster Sauce. No rice is included.",
      productPrice: "₱75.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002644998.png",
      productName: "Beef with Mushrooms",
      productDescription: "This consists only of Beef with Mushrooms. No rice is included.",
      productPrice: "₱80.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002713313.png",
      productName: "Beef Nilaga",
      productDescription: "This consists only of Beef Nilaga. No rice is included.",
      productPrice: "₱90.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002728701.png",
      productName: "Sinigang na Hipon",
      productDescription: "This consists only of Sinigang na Hipon. No rice is included.",
      productPrice: "₱100.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002820463.png",
      productName: "Tempura",
      productDescription: "This consists only of Tempura. No rice is included.",
      productPrice: "₱90.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_003101081.png",
      productName: "Mix Seafood",
      productDescription: "This consists only of Mix Seafood. No rice is included.",
      productPrice: "₱120.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_003041765.png",
      productName: "Chopsuey",
      productDescription: "This consists only of Chopsuey. No rice is included.",
      productPrice: "₱70.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_003023460.png",
      productName: "Ampalaya",
      productDescription: "This consists only of Ampalaya. No rice is included.",
      productPrice: "₱35.00",
      original: true,
    },
  ];
  
  const nonSizzlingProductsFirstBestSellers = nonSizzlingProducts.sort((a, b) => {
    if (a.bestSeller && !b.bestSeller) {
      return -1;
    }
    if (!a.bestSeller && b.bestSeller) {
      return 1;
    }
    return 0;
  });


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Our Menu</h1>
  
      <div className="flex items-center gap-8 mb-8">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
  
      <h2 className="text-2xl font-semibold mb-4">Sizzling Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {sortedProducts.map((product, index) => (
          <div key={index} className="bg-white border border-gray-800 rounded-lg shadow flex flex-col">
            <div className="flex-grow">
              <a href="#">
                <img className="w-full max-h-40 object-cover rounded-t-lg" src={product.productImage} alt={product.productName} />
              </a>
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.productDescription}</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  {product.bestSeller && (
                    <span className="bg-yellow-400 text-xs font-semibold text-gray-800 py-1 px-2 rounded-full">
                      Best Seller
                    </span>
                  )}
                  {product.new && (
                    <span className="bg-green-400 text-xs font-semibold text-gray-800 py-1 px-2 rounded-full ml-2">
                      New
                    </span>
                  )}
                  {product.original && (
                    <span className="bg-gray-400 text-xs font-semibold text-gray-800 py-1 px-2 rounded-full ml-2">
                      Originals
                    </span>
                  )}
                </div>
                <div className="text-xl font-bold text-right">{product.productPrice}</div>
              </div>
            </div>
          </div>
        ))}
      </div>



      <h2 className="text-2xl font-semibold mb-4">Non-Sizzling Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {nonSizzlingProductsFirstBestSellers.map((product, index) => (
          <div key={index} className="bg-white border border-gray-800 rounded-lg shadow flex flex-col">
            <div className="flex-grow">
              <a href="#">
                <img className="w-full max-h-40 object-cover rounded-t-lg" src={product.productImage} alt={product.productName} />
              </a>
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.productDescription}</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  {product.bestSeller && (
                    <span className="bg-yellow-400 text-xs font-semibold text-gray-800 py-1 px-2 rounded-full">
                      Best Seller
                    </span>
                  )}
                  {product.new && (
                    <span className="bg-green-400 text-xs font-semibold text-gray-800 py-1 px-2 rounded-full ml-2">
                      New
                    </span>
                  )}
                  {product.original && (
                    <span className="bg-gray-400 text-xs font-semibold text-gray-800 py-1 px-2 rounded-full ml-2">
                      Originals
                    </span>
                  )}
                </div>
                <div className="text-lg font-bold text-right">{product.productPrice}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
  
};

export default MenuPart;

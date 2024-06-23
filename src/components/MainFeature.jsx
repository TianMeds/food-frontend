'use client'

const MainFeature = () => {

    const featureSection  = [
        {
            productImage: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235538456.png',
            productName: 'G & R Sisig',
            productPrice: '₱90.00',
        },
        {
            productImage: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235514099.png',
            productName: 'G & R Chicken',
            productPrice: '₱90.00',
        },
        {
            productImage: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001547030.png',
            productName: 'Buffalo Wings',
            productPrice: '₱65.00',
        },
        {
            productImage: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001739841.png',
            productName: 'Buttered Shrimp',
            productPrice: '₱90.00',
        },

    ]
  return (
<>
    <div className="container mx-auto px-4 py-8">

        <div className="container mx-auto px-4 py-8">
            
            <div className="flex items-center justify-between gap-8 mb-8">
                <h1 className="text-3xl font-semibold mb-6">Best Seller</h1>
                <a href="#" className="text-blue-700 hover:underline dark:text-blue-400">View all</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {featureSection.map((product, index) => (
                <div key={index} className="bg-white border border-gray-800 rounded-lg shadow flex flex-col">
                    <div className="flex-grow">
                    <a href="#">
                        <img className="w-full max-h-40 object-cover rounded-t-lg" src={product.productImage} alt={product.productName} />
                    </a>
                    </div>
                    <div className="p-4 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold text-right">{product.productPrice}</div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
</>




  )
}

export default MainFeature

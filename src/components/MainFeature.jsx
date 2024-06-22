'use client'

const MainFeature = () => {

    const featureSection  = [
        {
            productImage: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/G%20%26%20R%20Logo.png',
            productName: 'G & R Sisig',
            productPrice: '₱90.00',
        },
        {
            productImage: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/G%20%26%20R%20Logo.png',
            productName: 'G & R Chicken',
            productPrice: '₱90.00',
        },

    ]
  return (
<>
    <div className="container mx-auto px-4 py-8">

        <div className="flex items-center justify-between gap-8 mb-8">
            <h1 className="text-3xl font-semibold mb-6">Best Seller</h1>
            <a href="#" className="text-blue-700 hover:underline dark:text-blue-400">View all</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureSection.map((section, index) => (
                <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src={section.productImage} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{section.productName}</h5>
                        </a>
                        <div className="flex items-center justify-between mt-4 mb-2">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{section.productPrice}</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</>




  )
}

export default MainFeature

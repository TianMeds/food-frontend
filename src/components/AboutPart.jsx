'use client'

const AboutPage = () => {

  const AboutSection = [
    {
      "image": "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/G%20%26%20R%20Logo.png",
      "title": "Our Story",
      "description": "Seven years ago in Makati, Philippines, a taste sensation was born. What began with one small idea turned into a beloved local favorite.\n\nIt all started when Grace Medallada put up a simple sign outside her house, offering home-cooked meals to her neighbors. With dedication and passion for delicious food, Grace’s offerings quickly gained popularity. The demand grew, and soon she expanded to a food cart, making her delectable dishes more accessible to the community.\n\nToday, G & R Eatery is on the brink of another exciting transformation as we prepare to open our first local food store in Makati City. Specializing in sizzling dishes and beloved Pinoy local foods, we aim to bring the flavors of home to every plate we serve.\n\nAs we continue to grow, our commitment to quality, flavor, and customer satisfaction remains unwavering. Join us at G & R Eatery and experience the taste of home that has been cherished by many."
    },
    
    {
      image: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/G%20%26%20R%20Logo.png",
      title: "Our Story",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
  ]
  return (
    <>
    {/*  */}
    {AboutSection.map((section, index) => (
      <div key={index} className={`flex justify-center space-between py-8 px-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
        <div className="max-w-md mx-auto">
          <img src={section.image} alt="Left Image" className="w-full rounded-lg shadow-md"/>
        </div>
        <div className="max-w-md mx-auto">
          <div className="md:ml-6">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <p className="text-gray-700">{section.description}</p>
          </div>
        </div>
      </div>
    ))}
  </>
  )
}

export default AboutPage
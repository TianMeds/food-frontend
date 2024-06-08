'use client'

const AboutPage = () => {

  const AboutSection = [
    {
      image: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/G%20%26%20R%20Logo.png",
      title: "Our Story",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
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
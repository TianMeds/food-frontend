'use client'
import { useState } from 'react';
import Image from 'next/image';

const ScrollingImage = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
<div className="relative overflow-hidden w-full max-w-screen-lg mx-auto">
    <div className="flex justify-center items-center h-72 md:h-96 relative">
        {images.map((image, index) => (
            <div
                key={index}
                className={`absolute w-full h-full transform transition-transform duration-500 ${
                    index !== 0 ? 'opacity-0 scale-100' : '' // Apply animation to images other than the first one
                } ${
                    index === currentImageIndex ? 'opacity-100 scale-100' : ''
                }`}
                style={{
                    transform: `translateX(-${(currentImageIndex - index) * 100}%)`, // Adjusted translation
                }}
            >
                <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
            </div>
        ))}
    </div>
    <div className="absolute inset-y-0 left-0 flex items-center">
        <button onClick={prevImage} className="text-white focus:outline-none bg-gray-800 rounded-full p-2">
            &lt;
        </button>
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center">
        <button onClick={nextImage} className="text-white focus:outline-none bg-gray-800 rounded-full p-2">
            &gt;
        </button>
    </div>
    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
            <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                } focus:outline-none`}
            ></button>
        ))}
    </div>
</div>

    );
};


export default ScrollingImage;

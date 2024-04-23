import { useState, useEffect } from 'react';
import Image from '../poster.jpg';
import About from './About';
import { Link } from 'react-router-dom';

function Home() {
  const [displayText, setDisplayText] = useState('E-Waste Recycling Solution');

  useEffect(() => {
    const solutions = ['E-Waste Recycling Solution', 'E-Waste Facility Locator','E-Waste Disposable Solution'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % solutions.length;
      setDisplayText(solutions[currentIndex]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  return (
    <>
        <div className="flex">
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center p-8">
        <div className="text-4xl font-bold mb-4 text-blue-800">
          Welcome to E-Waste EcoFinder
        </div>
        <div className="text-xl mb-6 text-gray-700">
          Your technology partner for Innovative and Impactful solutions.
        </div>

        {/* Dynamic Display Text */}
        <div className="text-2xl text-blue-700 p-4">
          {displayText}
        </div>
        <div className="text-lg mb-8 text-gray-800">
          E-Waste EcoFinder: Transforming E-Waste Management. Find E-waste facilities effortlessly with our platform. Your key to responsible recycling and sustainability.
        </div>
        <div className="flex justify-center flex-wrap m-4 space-x-4">
          <Link to='/recycle' className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg">
            Start Recycling
          </Link>
          <Link to='/facilities' className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg">
            Locate Facility
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="flex">
        <img className="w-[600px] h-[600px] bg-cover bg-center flex items-end p-20" src={Image} alt="Image" />
      </div>


    </div>

    <About/>
    </>

    
  );
}

export default Home;

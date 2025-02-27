import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Posters() {
  // Poster data array - Add or modify posters here
  const posters = [
    {
      id: 1,
      title: "Breaking the Cycle of Poverty",
      // Using a 42x59.4cm (A2) aspect ratio image
      imageUrl: "/src/Images/1.5 million.jpg?auto=format&fit=crop&q=80&w=420&h=594",
      description: "Help the homeless and change their lives."
    },
    {
      id: 2,
      title: "Empowering Through Culinary Arts",
      imageUrl: "/src/Images/1.5 million-koki.jpg?auto=format&fit=crop&q=80&w=420&h=594",
      description: "Learn, grow, and transform your life through cooking."
    },
    {
      id: 3,
      title: "Join Our Mission",
      imageUrl: "/src/Images/25,000.jpg?auto=format&fit=crop&q=80&w=420&h=594",
      description: "Stop this from happening.Donate today."
    },
    {
      id: 4,
      title: "Feed the Future",
      imageUrl: "/src/Images/Donate now and Change someones life..jpg?auto=format&fit=crop&q=80&w=420&h=594",
      description: "Nourishing bodies and minds for a brighter tomorrow"
    },
    {
      id: 5,
      title: "Help the homeless",
      imageUrl: "/src/Images/This is Ramesh. He has not had food for 3 days..jpg?auto=format&fit=crop&q=80&w=420&h=594",
      description: "We can prevent this from happening. All it takes is one donation"
    },
    {
      id: 6,
      title: "Join the cause",
      imageUrl: "/src/Images/We need donors and culinary instructors to help our cause..jpg?auto=format&fit=crop&q=80&w=420&h=594",
      description: "Join us and change lives."
    }
  ];

  // State for current poster index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State for transition animation
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change poster every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  // Navigation functions
  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === 0 ? posters.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === posters.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-white mb-6">Awareness Campaign</h1>
            <p className="text-xl text-white">Spreading our message through powerful visuals</p>
          </div>
        </div>
      </div>

      {/* Poster Carousel Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Poster Display */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 mb-12">
            <div className="relative aspect-[42/59.4] max-w-2xl mx-auto overflow-hidden rounded-lg">
              {/* Current Poster */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              >
                <img 
                  src={posters[currentIndex].imageUrl} 
                  alt={posters[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                {/* Poster Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">{posters[currentIndex].title}</h2>
                    <p className="text-lg">{posters[currentIndex].description}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button 
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Poster Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {posters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Poster Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {posters.map((poster, index) => (
              <div 
                key={poster.id}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer aspect-[42/59.4] rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex ? 'border-orange-500 scale-105' : 'border-transparent hover:border-orange-300'
                }`}
              >
                <img 
                  src={poster.imageUrl} 
                  alt={poster.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Download Instructions */}
          <div className="bg-orange-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Using Our Posters</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                <p>All posters are designed in A2 format (42 x 59.4 cm)</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                <p>High-resolution versions available for printing</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                <p>Feel free to share on social media with proper attribution</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posters;
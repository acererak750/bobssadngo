import React, { useState, useEffect, useRef } from 'react';
import { ChefHat, Heart, Clock, Phone, Mail, MapPin, Users, Moon as Monkey } from 'lucide-react';
import FoodBank from './FoodBank';
import Fundraising from './Fundraising';
import Plan from './Plan';
import Employees from './Employees';
import Vision from './Vision';
import Posters from './Posters';
import FAQ from './FAQ';

function App() {
  const [showMonkeys, setShowMonkeys] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showFundraisingSubMenu, setShowFundraisingSubMenu] = useState(false);
  
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const trainingRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Apply parallax effects
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
      
      // Add class for fade-in animations when sections are in view
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          section.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'a', 'b'];
    
    const handleKeyDown = (event: KeyboardEvent) => {
      const newKeys = [...keys, event.key];
      if (newKeys.length > konamiCode.length) {
        newKeys.shift();
      }
      setKeys(newKeys);

      if (JSON.stringify(newKeys) === JSON.stringify(konamiCode)) {
        setShowMonkeys(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keys]);

  const renderNavigation = () => (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Monkey className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-bold">CookMonkey</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`transition-colors ${currentPage === 'home' ? 'text-orange-500 font-medium' : 'text-gray-700 hover:text-orange-500'}`}
            >
              Home
            </button>
            <div 
              className="relative group"
              onMouseEnter={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
            >
              <button 
                className={`transition-colors ${['plan', 'employees'].includes(currentPage) ? 'text-orange-500 font-medium' : 'text-gray-700 hover:text-orange-500'}`}
              >
                About Us
              </button>
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-2 transition-all duration-300 ${showSubMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[160px]">
                  <button 
                    onClick={() => setCurrentPage('plan')}
                    className={`block w-full px-4 py-2 text-left hover:bg-orange-50 transition-colors ${currentPage === 'plan' ? 'text-orange-500' : 'text-gray-700'}`}
                  >
                    Our Plan
                  </button>
                  <button 
                    onClick={() => setCurrentPage('employees')}
                    className={`block w-full px-4 py-2 text-left hover:bg-orange-50 transition-colors ${currentPage === 'employees' ? 'text-orange-500' : 'text-gray-700'}`}
                  >
                    Our Team
                  </button>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setCurrentPage('vision')} 
              className={`transition-colors ${currentPage === 'vision' ? 'text-orange-500 font-medium' : 'text-gray-700 hover:text-orange-500'}`}
            >
              Vision
            </button>
            <button 
              onClick={() => setCurrentPage('foodbank')} 
              className={`transition-colors ${currentPage === 'foodbank' ? 'text-orange-500 font-medium' : 'text-gray-700 hover:text-orange-500'}`}
            >
              Food Bank
            </button>
            <div 
              className="relative group"
              onMouseEnter={() => setShowFundraisingSubMenu(true)}
              onMouseLeave={() => setShowFundraisingSubMenu(false)}
            >
              <button 
                className={`transition-colors ${['fundraising', 'posters'].includes(currentPage) ? 'text-orange-500 font-medium' : 'text-gray-700 hover:text-orange-500'}`}
              >
                Fundraising
              </button>
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-2 transition-all duration-300 ${showFundraisingSubMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[160px]">
                  <button 
                    onClick={() => setCurrentPage('fundraising')}
                    className={`block w-full px-4 py-2 text-left hover:bg-orange-50 transition-colors ${currentPage === 'fundraising' ? 'text-orange-500' : 'text-gray-700'}`}
                  >
                    Donate
                  </button>
                  <button 
                    onClick={() => setCurrentPage('posters')}
                    className={`block w-full px-4 py-2 text-left hover:bg-orange-50 transition-colors ${currentPage === 'posters' ? 'text-orange-500' : 'text-gray-700'}`}
                  >
                    Posters
                  </button>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setCurrentPage('faq')} 
              className={`transition-colors ${currentPage === 'faq' ? 'text-orange-500 font-medium' : 'text-gray-700 hover:text-orange-500'}`}
            >
              FAQ
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  if (currentPage === 'foodbank') {
    return (
      <>
        {renderNavigation()}
        <FoodBank />
      </>
    );
  }

  if (currentPage === 'fundraising') {
    return (
      <>
        {renderNavigation()}
        <Fundraising />
      </>
    );
  }

  if (currentPage === 'plan') {
    return (
      <>
        {renderNavigation()}
        <Plan />
      </>
    );
  }

  if (currentPage === 'employees') {
    return (
      <>
        {renderNavigation()}
        <Employees />
      </>
    );
  }

  if (currentPage === 'vision') {
    return (
      <>
        {renderNavigation()}
        <Vision />
      </>
    );
  }

  if (currentPage === 'posters') {
    return (
      <>
        {renderNavigation()}
        <Posters />
      </>
    );
  }

  if (currentPage === 'faq') {
    return (
      <>
        {renderNavigation()}
        <FAQ />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {renderNavigation()}

      {/* Hero Section */}
      <header className="relative h-[100vh] overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl transform translate-y-[-50%] opacity-0 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">CookMonkey</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Empowering Lives Through Culinary Education</p>
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-4 rounded-xl">
              <p className="text-white text-lg">
                Breaking the cycle of poverty through world-class culinary education while serving our community.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-24">About Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="transform transition-all duration-1000 translate-x-[-100px] opacity-0 animate-slide-in">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80" 
                alt="Chef teaching"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-8 transform transition-all duration-1000 translate-x-[100px] opacity-0 animate-slide-in-delayed">
              <div className="flex items-start gap-6">
                <ChefHat className="w-10 h-10 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-xl">We provide professional culinary training to those who cannot afford traditional culinary school, offering real-world experience in our food bank soup kitchen.</p>
              </div>
              <div className="flex items-start gap-6">
                <Heart className="w-10 h-10 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-xl">Our program not only trains future chefs but also helps feed the homeless community through our food bank initiative.</p>
              </div>
              <div className="flex items-start gap-6">
                <Users className="w-10 h-10 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-xl">Professional chefs mentor our candidates, ensuring high-quality training and valuable industry connections.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section id="training" ref={trainingRef} className="py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-24">Our Training Program</h2>
          
          {/* Phase 1 */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-semibold mb-6">Phase 1: Foundation</h3>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">A comprehensive 2.5-year journey into culinary mastery, combining hands-on experience with professional guidance.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white rounded-3xl shadow-xl p-10 transform hover:-translate-y-2 transition-all duration-300">
                <h4 className="text-2xl font-semibold mb-6">Culinary Fundamentals</h4>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Kitchen safety and hygiene
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Knife skills and techniques
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Ingredient knowledge
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Basic cooking methods
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-10 transform hover:-translate-y-2 transition-all duration-300">
                <h4 className="text-2xl font-semibold mb-6">Food Bank Operations</h4>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Large-scale food preparation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Inventory management
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Food safety regulations
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Kitchen workflow optimization
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-10 transform hover:-translate-y-2 transition-all duration-300">
                <h4 className="text-2xl font-semibold mb-6">Professional Development</h4>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Team collaboration
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Time management
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Communication skills
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Leadership training
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-semibold mb-6">Phase 2: Professional Experience</h3>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">A transformative year of hands-on experience in our food bank, preparing you for a successful culinary career.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-10 transform hover:-translate-y-2 transition-all duration-300">
                <h4 className="text-2xl font-semibold mb-6">Practical Application</h4>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    Menu planning and execution
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    Quality control management
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    Customer service excellence
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    Advanced cooking techniques
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-10 transform hover:-translate-y-2 transition-all duration-300">
                <h4 className="text-2xl font-semibold mb-6">Career Preparation</h4>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    Industry networking
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    Resume building
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    Interview preparation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    Job placement assistance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-24">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center transform hover:-translate-y-2 transition-all duration-300">
              <Phone className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-xl">+91 80 2345 6789</p>
            </div>
            <div className="flex flex-col items-center transform hover:-translate-y-2 transition-all duration-300">
              <Mail className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-xl">help@cookmonkey.org</p>
            </div>
            <div className="flex flex-col items-center transform hover:-translate-y-2 transition-all duration-300">
              <MapPin className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-xl">Bangalore, Karnataka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg">© 2024 CookMonkey. Empowering lives through culinary education.</p>
        
        </div>
      </footer>
    </div>
  );
}

export default App;

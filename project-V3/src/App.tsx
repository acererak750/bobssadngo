import React, { useState, useEffect, useRef } from 'react';
import {  as ChefHat,  as Heart,  as Clock,  as Phone,  as Mail,  as MapPin,  as Users,  as Monkey } from 'lucide-react';
import FoodBank from './FoodBank';
import Fundraising from './Fundraising';

function App() {
  const [showMonkeys, setShowMonkeys] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const trainingRef = useRef<HTMLDivElement>(null);

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

  const monkeySpecies = [
    {
      name: "Capuchin Monkey",
      description: "Known for their intelligence and dexterity, these small but mighty primates represent our students' ability to master complex culinary skills with precision and care.",
      image: "https://images.unsplash.com/photo-1579168765467-3b235f938439?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Orangutan",
      description: "Masters of problem-solving and tool use, orangutans embody our innovative approach to culinary education and adaptability in the kitchen.",
      image: "https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Mandrill",
      description: "With their vibrant appearance and strong social bonds, mandrills represent the colorful diversity and community spirit of our culinary program.",
      image: "https://images.unsplash.com/photo-1544991936-9464fa9ad4b7?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Japanese Macaque",
      description: "These innovative monkeys are known for their ability to learn and pass on cultural behaviors, just like our culinary traditions.",
      image: "https://images.unsplash.com/photo-1554457945-ba5df6648602?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Proboscis Monkey",
      description: "Unique and distinctive, these monkeys remind us that success in culinary arts comes in many forms and flavors.",
      image: "https://images.unsplash.com/photo-1580766770960-02c981f19d33?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Spider Monkey",
      description: "Agile and precise, spider monkeys represent the dexterity and attention to detail required in professional cooking.",
      image: "https://images.unsplash.com/photo-1579168765467-3b235f938439?auto=format&fit=crop&q=80&w=800"
    }
  ];

  if (currentPage === 'foodbank') {
    return (
      <>
        {/* Navigation Bar */}
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
                <Monkey className="w-8 h-8 text-orange-500" />
                <span className="text-xl font-bold">MonkeyMan</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-orange-500 transition-colors">Home</button>
                <button onClick={() => setCurrentPage('foodbank')} className="text-orange-500 font-medium">Food Bank</button>
                <button onClick={() => setCurrentPage('fundraising')} className="text-gray-700 hover:text-orange-500 transition-colors">Fundraising</button>
              </div>
            </div>
          </div>
        </nav>
        <FoodBank />
      </>
    );
  }

  if (currentPage === 'fundraising') {
    return (
      <>
        {/* Navigation Bar */}
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
                <Monkey className="w-8 h-8 text-orange-500" />
                <span className="text-xl font-bold">MonkeyMan</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-orange-500 transition-colors">Home</button>
                <button onClick={() => setCurrentPage('foodbank')} className="text-gray-700 hover:text-orange-500 transition-colors">Food Bank</button>
                <button onClick={() => setCurrentPage('fundraising')} className="text-orange-500 font-medium">Fundraising</button>
              </div>
            </div>
          </div>
        </nav>
        <Fundraising />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Monkey className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold">MonkeyMan</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
              <a href="#training" className="text-gray-700 hover:text-orange-500 transition-colors">Training</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
              <button onClick={() => setCurrentPage('foodbank')} className="text-gray-700 hover:text-orange-500 transition-colors">Food Bank</button>
              <button onClick={() => setCurrentPage('fundraising')} className="text-gray-700 hover:text-orange-500 transition-colors">Fundraising</button>
            </div>
          </div>
        </div>
      </nav>

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
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">MonkeyMan</h1>
            <p className="text-xl md:text-2xl text-white">Empowering Lives Through Culinary Education</p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-32 px-4 bg-gray-50 transform transition-all duration-1000">
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
      <section id="training" ref={trainingRef} className="py-32 px-4">
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
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Menu planning and execution
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Quality control management
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Customer service excellence
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Advanced cooking techniques
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-10 transform hover:-translate-y-2 transition-all duration-300">
                <h4 className="text-2xl font-semibold mb-6">Career Preparation</h4>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Industry networking
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Resume building
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Interview preparation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
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
              <p className="text-xl">help@monkeymanchefs.org</p>
            </div>
            <div className="flex flex-col items-center transform hover:-translate-y-2 transition-all duration-300">
              <MapPin className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-xl">Bangalore, Karnataka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Monkey Species Section */}
      {showMonkeys && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-5xl font-bold text-white">Secret Monkey Species</h2>
              <button 
                onClick={() => setShowMonkeys(false)}
                className="text-white hover:text-orange-500 transition-colors text-xl"
              >
                Close
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {monkeySpecies.map((monkey, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300"
                >
                  <img 
                    src={monkey.image} 
                    alt={monkey.name}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-2xl font-semibold mb-4 text-white">{monkey.name}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{monkey.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg">© 2024 MonkeyMan. Empowering lives through culinary education.</p>
          <p className="text-gray-400 text-base mt-4">Try the Konami code: ↑↑↓↓←→←→AB</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import { GraduationCap, Heart, DollarSign, Users, ChefHat, Star } from 'lucide-react';

function Fundraising() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-white mb-6">Help Us Feed Dreams</h1>
            <p className="text-xl text-white mb-8">Every donation helps someone break free from poverty through culinary education</p>
            <a 
              href="https://www.fueladream.com/home/campaign/84396" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              <Heart className="w-6 h-6" />
              Donate Now
            </a>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Stories of Hope</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/src/Images/Arjun.jpg" 
                alt="Young boy looking hopeful" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Before CookMonkey, we didn't know where our next meal would come from but thanks to CookMonkey I can reliably be fed. I dont ever have to worry about food again"
                </p>
                <p className="text-orange-500 font-semibold">- Arjun, 14 years old</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/src/Images/ravi.jpg" 
                alt="Young aspiring chef" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "I used to beg near restaurants. Today, I'm training to work in one. CookMonkey gave me more than food - they gave me dignity."
                </p>
                <p className="text-orange-500 font-semibold">- Ravi, Student Chef</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/src/Images/lakshmi.jpg" 
                alt="Mother with hopeful expression" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "As a single mother, I couldn't afford to feed my children. The training program helped me become independent and provide for my family."
                </p>
                <p className="text-orange-500 font-semibold">- Lakshmi, Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Gallery */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">The Face of Change</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <img 
                src="/src/Images/poor children.jpg" 
                alt="Children with hope for the future" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <p className="text-white text-xl">Every child deserves a chance to dream beyond the streets</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-8">
              <div className="relative h-44 rounded-2xl overflow-hidden group">
                <img 
                  src="/src/Images/Homeless to cullnary chef.jpg" 
                  alt="Transformation journey" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <p className="text-white">From homeless to hopeful through culinary training</p>
                </div>
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80" 
                  alt="People getting food" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <p className="text-white">Your donation feeds both bodies and dreams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <GraduationCap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">150+</h3>
              <p className="text-gray-600">Lives Transformed</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <ChefHat className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">90%</h3>
              <p className="text-gray-600">Now Employed</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p className="text-gray-600">Partner Restaurants</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Impact */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Your Donation Makes a Difference</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <DollarSign className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">₹5,000</h3>
              <p className="text-gray-600">
                Provides essential kitchen tools and uniforms for one student
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <ChefHat className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">₹10,000</h3>
              <p className="text-gray-600">
                Sponsors one month of hands-on culinary training
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Users className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">₹50,000</h3>
              <p className="text-gray-600">
                Funds a full semester of professional culinary education
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Be Part of Their Journey</h2>
          <p className="text-xl mb-12">
            Your contribution can change someone's life forever. Help us create more success stories 
            and give hope to those who need it most.
          </p>
          <a 
            href="https://www.fueladream.com/home/campaign/84396" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            <Heart className="w-6 h-6" />
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fundraising;
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-white mb-6">Transform Lives Through Culinary Education</h1>
            <p className="text-xl text-white mb-8">Your donation helps underprivileged individuals build a career in the culinary arts</p>
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

      {/* Impact Stats */}
      <div className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <GraduationCap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">150+</h3>
              <p className="text-gray-600">Students Graduated</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <ChefHat className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">90%</h3>
              <p className="text-gray-600">Employment Rate</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p className="text-gray-600">Partner Restaurants</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80" 
                alt="Student cooking" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Rahul's Journey</h3>
                <p className="text-gray-600 mb-4">
                  "Coming from a humble background, I never thought I could become a professional chef. 
                  MonkeyMan's program not only taught me culinary skills but also gave me confidence. 
                  Today, I'm working as a sous chef at a leading restaurant."
                </p>
                <p className="text-orange-500 font-semibold">- Rahul, Class of 2023</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80" 
                alt="Student learning" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Priya's Story</h3>
                <p className="text-gray-600 mb-4">
                  "The program changed my life. As a single mother, I struggled to make ends meet. 
                  Through the training and support from MonkeyMan, I now run my own catering business 
                  and can provide a better future for my children."
                </p>
                <p className="text-orange-500 font-semibold">- Priya, Class of 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Impact */}
      <div className="py-20 bg-gray-50">
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
          <h2 className="text-4xl font-bold mb-8">Help Us Create More Success Stories</h2>
          <p className="text-xl mb-12">
            Your contribution helps underprivileged individuals transform their lives through 
            culinary education. Together, we can make a difference.
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
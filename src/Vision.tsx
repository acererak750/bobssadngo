import React from 'react';
import { Target, ChefHat, Heart, Building, Users } from 'lucide-react';

function Vision() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-white mb-6">Our Vision</h1>
            <p className="text-xl text-white">Creating a world where culinary education transforms lives</p>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <section className="py-32 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80" 
                alt="Vision"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Vision Statement</h2>
                <p className="text-2xl font-light leading-relaxed text-gray-700">
                  "To create a world where culinary education becomes a powerful catalyst for social change, transforming lives and communities through the art of cooking."
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  We envision a future where every individual, regardless of their background, has the opportunity to pursue their culinary dreams and achieve financial independence through professional cooking skills.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">2030 Goals</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <p>Train 1000+ underprivileged individuals in professional culinary arts</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <p>Establish 5 food banks across major cities in India</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChefHat className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <p>Create a self-sustaining ecosystem of culinary education</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <p>Achieve 100% employment rate for our graduates</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Heart className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-center">Compassion</h3>
              <p className="text-gray-600">Leading with empathy and understanding in everything we do.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Target className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-center">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in education and service.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-center">Community</h3>
              <p className="text-gray-600">Building strong relationships and support networks.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Building className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-center">Sustainability</h3>
              <p className="text-gray-600">Creating lasting impact through sustainable practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Impact */}
      <section className="py-32 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Future Impact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Community Transformation</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p className="text-gray-600">Reduce unemployment in underprivileged communities</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p className="text-gray-600">Create sustainable income opportunities</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p className="text-gray-600">Break the cycle of poverty through education</p>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Industry Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p className="text-gray-600">Raise standards in culinary education</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p className="text-gray-600">Create new pathways for culinary careers</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p className="text-gray-600">Establish industry partnerships for job placement</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vision;
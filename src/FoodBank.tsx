import React, { useState } from 'react';
import { Utensils, Clock, Heart, Users, ChefHat, Building } from 'lucide-react';
import Nutrition from './Nutrition';

function FoodBank() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-white mb-6">Our Food Bank</h1>
            <p className="text-xl text-white">Serving our community with dignity and respect</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-8">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`whitespace-nowrap px-1 py-2 font-medium text-lg border-b-2 transition-colors ${activeTab === 'overview' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-600 hover:text-orange-500'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('nutrition')}
              className={`whitespace-nowrap px-1 py-2 font-medium text-lg border-b-2 transition-colors ${activeTab === 'nutrition' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-600 hover:text-orange-500'}`}
            >
              Nutrition Program
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Impact Stats */}
          <div className="py-20 bg-orange-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                  <Utensils className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">10,000+</h3>
                  <p className="text-gray-600">Daily Meals Served</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                  <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">20%</h3>
                  <p className="text-gray-600">Of ShivajiNagar Fed Daily</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                  <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">100+</h3>
                  <p className="text-gray-600">Dedicated Staff</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="flex gap-6">
                  <Utensils className="w-12 h-12 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Daily Meal Service</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We serve nutritious meals including dal, rice, and beans daily from 1:30 PM to 4:30 PM. 
                      Our food is prepared by trained staff who were once part of the homeless community, 
                      using ingredients donated by our generous supporters.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Building className="w-12 h-12 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Food Storage Facility</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our food bank operates from a large barn in ShivajiNagar, where we store and prepare 
                      food for thousands of people daily. This facility has been generously provided by 
                      our supporters, allowing us to focus our resources on serving the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Distribution Schedule</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Daily Meal Service Hours</h3>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-medium">Every Day</span>
                    <span className="text-orange-600 font-semibold">1:30 PM - 4:30 PM</span>
                  </div>
                  <p className="mt-4 text-gray-600">
                    We serve dal, rice, and beans daily. Our staff members also share the same meals, 
                    fostering a sense of community and equality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Employees Section */}
          <div className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <ChefHat className="w-12 h-12 text-orange-500 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Culinary Training Program</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our food bank is uniquely staffed by formerly homeless individuals who have received 
                    professional culinary training. This gives them practical experience to hone their 
                    skills while serving the community.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Daily meal preparation for 10,000+ people
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Hands-on experience in large-scale cooking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Real-world kitchen management skills
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <Clock className="w-12 h-12 text-orange-500 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Special Training Initiatives</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Every two weeks, our employees participate in special cooking challenges using unique 
                    ingredients. This helps develop their creativity and improvisation skills in the kitchen.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Bi-weekly special dish creation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Creative use of donated ingredients
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Skill development through challenges
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'nutrition' && <Nutrition />}
    </div>
  );
}

export default FoodBank;
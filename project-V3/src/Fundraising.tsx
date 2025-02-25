import React from 'react';
import {  as GraduationCap,  as Heart,  as DollarSign,  as Users,  as ChefHat,  as Utensils } from 'lucide-react';

function Fundraising() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-white mb-6">Support Our Mission</h1>
            <p className="text-xl text-white mb-8">Help us empower underprivileged individuals through culinary education</p>
            <a 
              href="https://www.fueladream.com/home/campaign/84396" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <GraduationCap className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <p className="text-gray-600">
                Your donation helps provide professional culinary training to underprivileged 
                individuals, giving them the skills needed for a successful career in the 
                food industry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <ChefHat className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Equipment</h3>
              <p className="text-gray-600">
                Funds help us maintain and upgrade our kitchen equipment, ensuring our 
                students learn with professional-grade tools used in the industry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Heart className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                Your support helps us maintain our food bank operations, serving thousands 
                of meals to those in need while providing hands-on experience to our students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80" 
                alt="Student cooking"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Rahul's Journey</h3>
                <p className="text-gray-600 mb-4">
                  "From living on the streets to becoming a sous chef at a leading restaurant, 
                  MonkeyMan's program changed my life. The skills I learned here opened doors 
                  I never thought possible."
                </p>
                <p className="text-gray-500">- Rahul, Program Graduate 2023</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1577219491647-bc941f1ea4f9?auto=format&fit=crop&q=80" 
                alt="Student learning"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Priya's Story</h3>
                <p className="text-gray-600 mb-4">
                  "As a single mother, I struggled to make ends meet. The culinary program 
                  not only taught me valuable skills but also gave me the confidence to 
                  start my own catering business."
                </p>
                <p className="text-gray-500">- Priya, Program Graduate 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Tiers */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How Your Donation Helps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <DollarSign className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">₹5,000</h3>
              <ul className="space-y-4 text-gray-600">
                <li>• Provides basic kitchen tools for one student</li>
                <li>• Supports one week of training materials</li>
                <li>• Helps serve 50 meals at our food bank</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Users className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">₹10,000</h3>
              <ul className="space-y-4 text-gray-600">
                <li>• Sponsors one month of training for a student</li>
                <li>• Provides professional knife set</li>
                <li>• Helps serve 100 meals at our food bank</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Utensils className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">₹25,000</h3>
              <ul className="space-y-4 text-gray-600">
                <li>• Funds complete culinary starter kit</li>
                <li>• Supports three months of training</li>
                <li>• Helps serve 250 meals at our food bank</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://www.fueladream.com/home/campaign/84396" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg- orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              Make a Difference Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundraising;
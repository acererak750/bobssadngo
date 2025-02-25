import React from 'react';
import { Utensils, Clock, Heart, Users, ShoppingCart, Truck } from 'lucide-react';

function FoodBank() {
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

      {/* Impact Stats */}
      <div className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Utensils className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">50,000+</h3>
              <p className="text-gray-600">Meals Served Monthly</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">2,000+</h3>
              <p className="text-gray-600">Families Supported</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-gray-600">Volunteer Chefs</p>
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
              <ShoppingCart className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Food Distribution</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide nutritious food packages to families in need, including fresh produce, 
                  proteins, and pantry staples. Our distribution system ensures dignity and choice 
                  for all recipients.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Utensils className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hot Meal Program</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our culinary students prepare fresh, hot meals daily. These meals are served 
                  restaurant-style in our dining area, providing a dignified dining experience 
                  for our community.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Truck className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Mobile Pantry</h3>
                <p className="text-gray-600 leading-relaxed">
                  For those unable to visit our location, our mobile pantry brings food directly 
                  to neighborhoods in need, ensuring no one goes hungry due to transportation barriers.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Clock className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Emergency Assistance</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide emergency food assistance 24/7 for crisis situations, ensuring 
                  immediate access to food for those facing urgent needs.
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
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Food Pantry Hours</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Hot Meal Service</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Breakfast</span>
                    <span>7:00 AM - 9:00 AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Lunch</span>
                    <span>11:30 AM - 1:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Dinner</span>
                    <span>5:00 PM - 7:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodBank;
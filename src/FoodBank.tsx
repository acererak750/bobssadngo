import React from 'react';
import { Utensils, Clock, Heart, Users, ChefHat, Building, Apple, DollarSign } from 'lucide-react';

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

      {/* Our Menu Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Nutritious Menu</h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
            We serve balanced, nutritious meals that provide essential nutrients to support health and well-being. 
            Our menu is designed by nutrition experts to ensure optimal nourishment for our community.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dal */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">Dal (Lentil Curry)</h3>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">₹15/serving</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Our hearty lentil curry is rich in protein, fiber, and essential minerals. Prepared with minimal oil and aromatic spices.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-700">Nutritional Value (per serving)</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>Protein</span>
                      <span className="font-medium">9g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fiber</span>
                      <span className="font-medium">7g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Iron</span>
                      <span className="font-medium">3.5mg</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Calories</span>
                      <span className="font-medium">220 kcal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Rice */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-300"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">Steamed Rice</h3>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">₹10/serving</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfectly cooked rice provides essential carbohydrates for energy. We use locally sourced rice to support regional farmers.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-700">Nutritional Value (per serving)</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>Carbohydrates</span>
                      <span className="font-medium">45g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Protein</span>
                      <span className="font-medium">4g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>B Vitamins</span>
                      <span className="font-medium">15% DV</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Calories</span>
                      <span className="font-medium">180 kcal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Sabzi */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">Mixed Vegetable Sabzi</h3>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">₹20/serving</span>
                </div>
                <p className="text-gray-600 mb-6">
                  A nutritious mix of seasonal vegetables cooked with minimal oil and traditional spices, providing essential vitamins and minerals.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-700">Nutritional Value (per serving)</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>Vitamin A</span>
                      <span className="font-medium">70% DV</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vitamin C</span>
                      <span className="font-medium">45% DV</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fiber</span>
                      <span className="font-medium">6g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Calories</span>
                      <span className="font-medium">120 kcal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Complete Meal */}
          <div className="mt-12 bg-orange-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Complete Balanced Meal</h3>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-lg font-medium">₹40/meal</span>
            </div>
            <p className="text-gray-700 mb-6">
              Our complete meal includes dal, rice, sabzi, and a small serving of yogurt. This balanced combination provides approximately 520 calories and meets 35% of daily nutritional requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-800">Nutritional Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Apple className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p>Complete protein profile from the combination of dal and rice</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Apple className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p>Essential vitamins and minerals from fresh vegetables</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Apple className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p>Balanced macronutrients for sustained energy</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-800">Health Impact</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p>35% reduction in malnutrition among regular recipients</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p>42% improvement in energy levels reported by beneficiaries</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p>28% fewer sick days among children receiving regular meals</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Impact Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Transforming Lives Through Nutrition</h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16">
            Our nutritional program has made a significant impact on the health and well-being of our community members.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <DollarSign className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Affordable Nutrition</h3>
              <p className="text-gray-600 text-center">
                Our meals cost 70% less than market prices, making nutrition accessible to those who need it most.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Community Health</h3>
              <p className="text-gray-600 text-center">
                Regular recipients show a 45% improvement in overall health markers within 6 months.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <ChefHat className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Culinary Education</h3>
              <p className="text-gray-600 text-center">
                We teach nutrition basics alongside our meals, empowering families to make healthier choices.
              </p>
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
                  We serve nutritious meals including dal, rice, and sabzi daily from 1:30 PM to 4:30 PM. 
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
                We serve dal, rice, and sabzi daily. Our staff members also share the same meals, 
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
    </div>
  );
}

export default FoodBank;
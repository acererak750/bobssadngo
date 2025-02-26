import React from 'react';
import { ChefHat, Heart, Users, GraduationCap, Building, Star, Coffee } from 'lucide-react';

function Employees() {
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
            <h1 className="text-6xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-xl text-white">Meet the passionate individuals behind CookMonkey</p>
          </div>
        </div>
      </div>

      {/* About Us - Key Team Members */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-24">About Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-orange-500 rounded-full opacity-10"></div>
                <Coffee className="w-16 h-16 text-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">Koki</h3>
              <p className="text-orange-500 text-center mb-4">Head Chef & Instructor</p>
              <p className="text-gray-600 text-center">
                Koki leads our culinary 
                education program and mentors aspiring chefs with passion and dedication.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-orange-500 rounded-full opacity-10"></div>
                <Star className="w-16 h-16 text-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">Pronnoy</h3>
              <p className="text-orange-500 text-center mb-4">Founder & CEO</p>
              <p className="text-gray-600 text-center">
                 Pronnoy's passion for culinary education and social impact drove him to 
                establish CookMonkey.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-orange-500 rounded-full opacity-10"></div>
                <Heart className="w-16 h-16 text-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">Soham</h3>
              <p className="text-orange-500 text-center mb-4">Head of Operations</p>
              <p className="text-gray-600 text-center">
               	Soham oversees 
                day-to-day operations and ensures our programs run smoothly and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-32 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Current Openings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <ChefHat className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Culinary Instructors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>5+ years professional experience</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Passion for teaching and mentoring</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Strong communication skills</p>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Building className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Operations Staff</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Kitchen management experience</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Inventory control expertise</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Team coordination skills</p>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Heart className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Community Outreach</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Experience in social work</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Strong networking abilities</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Program coordination skills</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-24">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Heart className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Compassion</h3>
              <p className="text-gray-600">We lead with empathy and understanding in everything we do.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <GraduationCap className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in education and service.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">We build strong relationships and support networks.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <Building className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">We create lasting impact through sustainable practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-24">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-orange-500 rounded-full opacity-10"></div>
                <Star className="w-16 h-16 text-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">Pronnoy Roy</h3>
              <p className="text-orange-500 text-center mb-4">Founder & CEO</p>
              <p className="text-gray-600 text-center">
                A visionary leader with 15 years of experience in the hospitality industry. 
                Pronnoy's passion for culinary education and social impact drove him to 
                establish CookMonkey.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-orange-500 rounded-full opacity-10"></div>
                <Heart className="w-16 h-16 text-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">Soham Chatterjee</h3>
              <p className="text-orange-500 text-center mb-4">Head of Operations</p>
              <p className="text-gray-600 text-center">
                With extensive experience in non-profit management, Soham oversees 
                day-to-day operations and ensures our programs run smoothly and effectively.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-orange-500 rounded-full opacity-10"></div>
                <Coffee className="w-16 h-16 text-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">Koki Patel</h3>
              <p className="text-orange-500 text-center mb-4">Head Chef & Instructor</p>
              <p className="text-gray-600 text-center">
                A renowned chef with over 20 years of experience, Koki leads our culinary 
                education program and mentors aspiring chefs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Employees;
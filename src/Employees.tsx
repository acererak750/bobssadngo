import React, { useRef, useEffect } from 'react';
import { ChefHat, Heart, Users, GraduationCap, Building } from 'lucide-react';

function Employees() {
  const sections = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-16');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        ref={(el) => (sections.current[0] = el)}
        className="relative h-[60vh] overflow-hidden transform transition-all duration-1000 opacity-0 translate-y-16"
      >
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
            <p className="text-xl text-white">Passionate individuals dedicated to transforming lives through culinary education</p>
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <section 
        ref={(el) => (sections.current[1] = el)}
        className="py-32 px-4 transform transition-all duration-1000 opacity-0 translate-y-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-12">
            We're always looking for passionate individuals who want to make a difference in the lives of others through culinary education.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-2xl p-8">
              <ChefHat className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Culinary Positions</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Kitchen Instructors</li>
                <li>Sous Chefs</li>
                <li>Pastry Specialists</li>
                <li>Food Safety Coordinators</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Support Roles</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Program Coordinators</li>
                <li>Administrative Staff</li>
                <li>Volunteer Managers</li>
                <li>Community Outreach</li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <a 
              href="mailto:careers@cookmonkey.org" 
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              <Heart className="w-6 h-6" />
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section 
        ref={(el) => (sections.current[2] = el)}
        className="py-32 px-4 bg-gray-50 transform transition-all duration-1000 opacity-0 translate-y-16"
      >
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
    </div>
  );
}

export default Employees;
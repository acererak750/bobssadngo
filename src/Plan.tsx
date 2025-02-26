import React, { useEffect, useRef } from 'react';
import { ChefHat, Truck, Users, GraduationCap, Building, Heart, Clock, Target, ArrowRight } from 'lucide-react';

function Plan() {
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
            <h1 className="text-6xl font-bold text-white mb-6">Our Journey</h1>
            <p className="text-xl text-white">A comprehensive 3-year plan to transform lives through culinary education</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-24">
            {/* Stage 1 */}
            <div 
              ref={(el) => (sections.current[1] = el)}
              className="relative transform transition-all duration-1000 opacity-0 translate-y-16"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-100 rounded-full"></div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-12 bg-orange-500 rounded-full"></div>
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <Heart className="w-10 h-10 text-orange-500" />
                    <h2 className="text-3xl font-bold">Stage 1: Fundraising</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Initial Steps</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Building className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Anonymous benefactor provides barn facility and ingredient collection team</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <Heart className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Launch crowdfunding campaigns led by Sohm and team</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Distribute flyers throughout ShivajiNagar for candidate recruitment</p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">3-Month Trial Program</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Initial 3-month training program to assess effectiveness</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Evaluation period to determine program continuation and improvements</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div 
              ref={(el) => (sections.current[2] = el)}
              className="relative transform transition-all duration-1000 opacity-0 translate-y-16"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-100 rounded-full"></div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-12 bg-orange-500 rounded-full"></div>
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <ChefHat className="w-10 h-10 text-orange-500" />
                    <h2 className="text-3xl font-bold">Stage 2: Extended Program</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600">
                      Following successful completion of Stage 1, the program extends to a comprehensive 2-year curriculum
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-orange-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-4">Program Structure</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                            <p>2-year intensive culinary training</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                            <p>New batch intake every 6 months</p>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-4">Key Components</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <ChefHat className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                            <p>Professional culinary instruction</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <Target className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                            <p>Regular progress assessments</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div 
              ref={(el) => (sections.current[3] = el)}
              className="relative transform transition-all duration-1000 opacity-0 translate-y-16"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-100 rounded-full"></div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-12 bg-orange-500 rounded-full"></div>
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <Building className="w-10 h-10 text-orange-500" />
                    <h2 className="text-3xl font-bold">Stage 3: Food Bank Integration</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Food Bank Operations</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>2-month intensive food bank operation training</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Hands-on experience in large-scale food preparation</p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Evaluation Period</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Assessment of program effectiveness</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Implementation of necessary improvements</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div 
              ref={(el) => (sections.current[4] = el)}
              className="relative transform transition-all duration-1000 opacity-0 translate-y-16"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-orange-100 rounded-full"></div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-12 bg-orange-500 rounded-full"></div>
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <GraduationCap className="w-10 h-10 text-orange-500" />
                    <h2 className="text-3xl font-bold">Stage 4: Completion & Expansion</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Program Completion</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <GraduationCap className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Graduates enter the culinary industry</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Job placement assistance and support</p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Future Growth</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Building className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Program expansion to new areas</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <Heart className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                          <p>Alumni involvement in future fundraising</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Requirements */}
      <div 
        ref={(el) => (sections.current[5] = el)}
        className="py-20 bg-orange-50 transform transition-all duration-1000 opacity-0 translate-y-16"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team Requirements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
              <Truck className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Logistics Driver</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Supplied by anonymous benefactor</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Responsible for ingredient collection</p>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
              <Heart className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Fundraising Expert</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Manages crowdfunding campaigns</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Coordinates with donors and supporters</p>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
              <ChefHat className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Cooking Instructors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Hired by Pronnoy</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <p>Professional culinary training expertise</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
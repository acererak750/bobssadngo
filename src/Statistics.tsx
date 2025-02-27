import React from 'react';
import { TrendingUp, Users, AlertTriangle, Utensils, BarChart, Target, ArrowRight, CheckCircle } from 'lucide-react';

function Statistics() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-white mb-6">The Challenge We Face</h1>
            <p className="text-xl text-white">Understanding poverty and unemployment in India</p>
          </div>
        </div>
      </div>

      {/* Key Statistics Overview */}
      <section className="py-20 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">India's Poverty & Unemployment Crisis</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-center">270 Million</h3>
              <p className="text-xl text-gray-600 text-center">People living below the poverty line</p>
              <p className="text-sm text-gray-500 text-center mt-4">Source: World Bank, 2022</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-center">8.1%</h3>
              <p className="text-xl text-gray-600 text-center">Unemployment rate in urban areas</p>
              <p className="text-sm text-gray-500 text-center mt-4">Source: CMIE, 2023</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-center">189 Million</h3>
              <p className="text-xl text-gray-600 text-center">People facing food insecurity</p>
              <p className="text-sm text-gray-500 text-center mt-4">Source: FAO, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Statistics */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">The Reality Behind the Numbers</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-orange-500 p-6">
                <h3 className="text-2xl font-bold text-white">Poverty Statistics</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">21.9% of the population lives below the poverty line</p>
                      <p className="text-gray-600 mt-1">That's approximately 270 million people struggling to meet basic needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">42% of children under five are malnourished</p>
                      <p className="text-gray-600 mt-1">Leading to stunted growth and developmental issues</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">Rural poverty rate is 25.7%</p>
                      <p className="text-gray-600 mt-1">Compared to 14.2% in urban areas, showing a significant rural-urban divide</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">Over 80% of India's poor live in rural areas</p>
                      <p className="text-gray-600 mt-1">With limited access to education, healthcare, and employment opportunities</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-orange-500 p-6">
                <h3 className="text-2xl font-bold text-white">Unemployment Statistics</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">Overall unemployment rate: 7.2%</p>
                      <p className="text-gray-600 mt-1">With significant variations across states and demographics</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">Youth unemployment (15-29 years): 22.5%</p>
                      <p className="text-gray-600 mt-1">More than three times the overall unemployment rate</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">Urban unemployment: 8.1%</p>
                      <p className="text-gray-600 mt-1">Higher than rural unemployment at 6.8%, reflecting urban migration challenges</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">Educated unemployment: 19.3%</p>
                      <p className="text-gray-600 mt-1">Graduates and post-graduates face higher unemployment rates</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-orange-500 p-6">
              <h3 className="text-2xl font-bold text-white">Food Insecurity Crisis</h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">189 million people are undernourished</p>
                      <p className="text-gray-600 mt-1">Representing 14% of India's population</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">35.5% of children under 5 are stunted</p>
                      <p className="text-gray-600 mt-1">Due to chronic malnutrition and inadequate food intake</p>
                    </div>
                  </li>
                </ul>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">50% of women aged 15-49 are anemic</p>
                      <p className="text-gray-600 mt-1">Indicating widespread nutritional deficiencies</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">40% of food produced is wasted</p>
                      <p className="text-gray-600 mt-1">Despite millions going hungry, highlighting distribution issues</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - NEW */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Proven Success: Culinary Training Programs That Work</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-green-500 p-6">
                <h3 className="text-2xl font-bold text-white">Second Harvest Food Bank (Orlando, FL)</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">16-week culinary training program</p>
                      <p className="text-gray-600 mt-1">Provides at-risk and economically disadvantaged adults with culinary and life skills training</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">81% employment rate</p>
                      <p className="text-gray-600 mt-1">Graduates find employment in the food service industry within one month of graduation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">400+ graduates since 2013</p>
                      <p className="text-gray-600 mt-1">Many have gone on to work at top hotels and restaurants in the region</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-green-500 p-6">
                <h3 className="text-2xl font-bold text-white">DC Central Kitchen (Washington, DC)</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">14-week intensive culinary job training</p>
                      <p className="text-gray-600 mt-1">Empowers adults facing high barriers to employment, including returning citizens, individuals with histories of substance abuse, and homelessness</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">90% job placement rate</p>
                      <p className="text-gray-600 mt-1">With starting wages averaging $15 per hour, well above minimum wage</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">2,000+ graduates since inception</p>
                      <p className="text-gray-600 mt-1">Program has been running successfully for over 25 years</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-green-500 p-6">
              <h3 className="text-2xl font-bold text-white">Hot Bread Kitchen (New York, NY)</h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">9-month intensive training program</p>
                      <p className="text-gray-600 mt-1">Focuses on immigrant women and women of color facing economic insecurity</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">80% of graduates find employment</p>
                      <p className="text-gray-600 mt-1">With an average wage increase of 30% compared to previous employment</p>
                    </div>
                  </li>
                </ul>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">$42 million economic impact</p>
                      <p className="text-gray-600 mt-1">Generated through increased wages and reduced public benefits</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium">95% retention rate after one year</p>
                      <p className="text-gray-600 mt-1">Demonstrating the long-term sustainability of the program's impact</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Key Success Factors</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="text-lg font-medium mb-3">Comprehensive Training</h4>
                <p className="text-gray-600">Programs that combine technical culinary skills with life skills, financial literacy, and job readiness have the highest success rates.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="text-lg font-medium mb-3">Industry Partnerships</h4>
                <p className="text-gray-600">Strong relationships with local restaurants, hotels, and food service companies ensure graduates have employment opportunities.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="text-lg font-medium mb-3">Holistic Support</h4>
                <p className="text-gray-600">Successful programs address barriers like housing, transportation, and childcare to ensure participants can complete training.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Disparities */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Regional Disparities</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <BarChart className="w-6 h-6 text-orange-500" />
                States with Highest Poverty Rates
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b pb-3">
                  <span className="text-lg">Bihar</span>
                  <span className="text-orange-500 font-bold">33.7%</span>
                </li>
                <li className="flex justify-between items-center border-b pb-3">
                  <span className="text-lg">Jharkhand</span>
                  <span className="text-orange-500 font-bold">29.5%</span>
                </li>
                <li className="flex justify-between items-center border-b pb-3">
                  <span className="text-lg">Uttar Pradesh</span>
                  <span className="text-orange-500 font-bold">29.4%</span>
                </li>
                <li className="flex justify-between items-center border-b pb-3">
                  <span className="text-lg">Madhya Pradesh</span>
                  <span className="text-orange-500 font-bold">28.3%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-lg">Odisha</span>
                  <span className="text-orange-500 font-bold">25.9%</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <BarChart className="w-6 h-6 text-orange-500" />
                States with Highest Unemployment Rates
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b pb-3">
                  <span className="text-lg">Haryana</span>
                  <span className="text-orange-500 font-bold">26.4%</span>
                </li>
                <li className="flex justify-between items-center border-b pb-3">
                  <span className="text-lg">Rajasthan</span>
                  <span className="text-orange-500 font-bold">24.5%</span>
                </li>
                <li className="flex justify-between items-center border-b pb-3">
                  <span className="text-lg">Jammu & Kashmir</span>
                  <span className="text-orange-500 font-bold">22.9%</span>
                </li>
                <li className="flex justify-between items-center border-b pb-3">
                  <span className="text-lg">Jharkhand</span>
                  <span className="text-orange-500 font-bold">18.2%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-lg">Delhi</span>
                  <span className="text-orange-500 font-bold">16.8%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Root Causes */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Root Causes</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Lack of Quality Education</h3>
              <p className="text-gray-600 mb-4">
                Only 26% of India's workforce has received any form of skill training, with just 4.7% receiving formal training.
              </p>
              <p className="text-gray-600">
                This skills gap leads to unemployment and underemployment, particularly among youth.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Uneven Economic Growth</h3>
              <p className="text-gray-600 mb-4">
                Despite being one of the fastest-growing economies, the benefits of growth have not been equally distributed.
              </p>
              <p className="text-gray-600">
                The top 10% of India's population holds 77% of the total national wealth.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Limited Job Creation</h3>
              <p className="text-gray-600 mb-4">
                India needs to create 8-10 million jobs annually to absorb new entrants into the workforce.
              </p>
              <p className="text-gray-600">
                However, job creation has averaged only 2-3 million per year in recent times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Our Solution</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
            CookMonkey addresses these challenges through a comprehensive approach that tackles both food insecurity and unemployment.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-orange-500" />
                Immediate Impact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Serving 10,000+ nutritious meals daily to those in need</p>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Providing immediate relief to food insecurity in ShivajiNagar</p>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Creating immediate employment opportunities in our food bank</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-orange-500" />
                Long-term Solutions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Professional culinary training for sustainable career paths</p>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Breaking the cycle of poverty through skills development</p>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Creating a self-sustaining model that can be replicated across India</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Creating Change</h2>
          <p className="text-xl mb-8">
            Together, we can address the root causes of poverty and hunger in India through education and opportunity.
          </p>
          <a 
            href="https://www.fueladream.com/home/campaign/84396" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Support Our Mission
          </a>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
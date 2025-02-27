import React, { useState } from 'react';
import { Apple, Leaf, Droplet, Heart, DollarSign, BookOpen, ExternalLink, FileText } from 'lucide-react';

function Nutrition() {
  const [activeSubTab, setActiveSubTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      {/* Subtab Navigation */}
      <div className="bg-orange-50 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto py-2 space-x-6">
            <button 
              onClick={() => setActiveSubTab('overview')}
              className={`whitespace-nowrap px-1 py-2 font-medium text-base border-b-2 transition-colors ${activeSubTab === 'overview' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-600 hover:text-orange-500'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveSubTab('pricing')}
              className={`whitespace-nowrap px-1 py-2 font-medium text-base border-b-2 transition-colors ${activeSubTab === 'pricing' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-600 hover:text-orange-500'}`}
            >
              Pricing & Costs
            </button>
            <button 
              onClick={() => setActiveSubTab('sources')}
              className={`whitespace-nowrap px-1 py-2 font-medium text-base border-b-2 transition-colors ${activeSubTab === 'sources' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-600 hover:text-orange-500'}`}
            >
              Data Sources
            </button>
          </div>
        </div>
      </div>

      {activeSubTab === 'overview' && (
        <>
          {/* Nutrition Hero */}
          <div className="py-20 bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Nutrition Program</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Our nutrition program ensures that every meal we serve is not just filling, but also nutritionally balanced to support health and wellbeing.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Apple className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-gray-700">Balanced meals with essential nutrients</p>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-gray-700">Fresh vegetables and fruits when available</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Droplet className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-gray-700">Clean drinking water with every meal</p>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80" 
                    alt="Nutritious food" 
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                    <p className="text-orange-500 font-bold text-xl">2000+ kcal</p>
                    <p className="text-gray-600">Daily nutrition target</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Philosophy */}
          <div className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Our Nutrition Philosophy</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                    <Apple className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center">Balanced Diet</h3>
                  <p className="text-gray-600 text-center">
                    We ensure every meal contains a balance of carbohydrates, proteins, and essential nutrients to support overall health.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center">Health-Focused</h3>
                  <p className="text-gray-600 text-center">
                    Our meals are designed to address common nutritional deficiencies found in underserved communities.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                    <Leaf className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center">Sustainable Sourcing</h3>
                  <p className="text-gray-600 text-center">
                    We work with local farmers and suppliers to source fresh, seasonal ingredients whenever possible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Menu */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Sample Weekly Menu</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h3 className="text-xl font-semibold mb-2">Monday</h3>
                      <p className="text-gray-600">Dal, rice, mixed vegetables, and seasonal fruit</p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="text-xl font-semibold mb-2">Tuesday</h3>
                      <p className="text-gray-600">Chickpea curry, rice, leafy greens, and yogurt</p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="text-xl font-semibold mb-2">Wednesday</h3>
                      <p className="text-gray-600">Lentil soup, whole grain bread, and mixed vegetables</p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="text-xl font-semibold mb-2">Thursday</h3>
                      <p className="text-gray-600">Bean curry, rice, roasted vegetables, and fruit</p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="text-xl font-semibold mb-2">Friday</h3>
                      <p className="text-gray-600">Mixed vegetable curry, rice, dal, and seasonal fruit</p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="text-xl font-semibold mb-2">Saturday</h3>
                      <p className="text-gray-600">Potato and pea curry, rice, yogurt, and vegetables</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Sunday</h3>
                      <p className="text-gray-600">Special meal: Vegetable biryani, raita, and sweet treat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Education */}
          <div className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Nutrition Education</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-semibold mb-6">Community Workshops</h3>
                  <p className="text-gray-600 mb-6">
                    We conduct regular nutrition workshops for community members, teaching them about:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Basic nutrition principles and balanced diets</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Budget-friendly healthy cooking</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Making nutritious choices with limited resources</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-semibold mb-6">Culinary Student Training</h3>
                  <p className="text-gray-600 mb-6">
                    Our culinary students receive specialized training in nutrition-focused cooking:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Understanding nutritional needs of different populations</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Creating balanced meals with limited ingredients</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Maximizing nutritional value while minimizing waste</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeSubTab === 'pricing' && (
        <>
          {/* Pricing Hero */}
          <div className="py-20 bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold mb-6">Nutrition Program Costs</h2>
                <p className="text-xl text-gray-600">
                  Transparency is important to us. Here's a breakdown of our costs and how we maximize the impact of every donation.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-semibold">Cost Per Meal</h3>
                    <div className="bg-orange-100 px-4 py-2 rounded-lg">
                      <span className="text-orange-600 font-bold text-xl">₹25</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8">
                    Through careful planning, bulk purchasing, and strategic partnerships, we're able to provide nutritionally complete meals at a fraction of commercial costs.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <DollarSign className="w-8 h-8 text-orange-500 mb-4" />
                      <h4 className="text-lg font-semibold mb-2">₹15</h4>
                      <p className="text-gray-600">Food Ingredients</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <DollarSign className="w-8 h-8 text-orange-500 mb-4" />
                      <h4 className="text-lg font-semibold mb-2">₹5</h4>
                      <p className="text-gray-600">Preparation & Cooking</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <DollarSign className="w-8 h-8 text-orange-500 mb-4" />
                      <h4 className="text-lg font-semibold mb-2">₹5</h4>
                      <p className="text-gray-600">Distribution & Packaging</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-8">
                    <h3 className="text-xl font-semibold mb-4">How Your Donation Helps</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                        <p className="text-gray-600">₹500 provides 20 nutritious meals</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                        <p className="text-gray-600">₹2,500 feeds a family of four for a month</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                        <p className="text-gray-600">₹10,000 supports our nutrition education program for a week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Efficiency */}
          <div className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Cost Efficiency Measures</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-semibold mb-6">Bulk Purchasing</h3>
                  <p className="text-gray-600 mb-6">
                    We partner with wholesale suppliers to purchase ingredients in bulk, reducing costs by up to 40% compared to retail prices.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Direct relationships with farmers and producers</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Seasonal purchasing to take advantage of lower prices</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Storage facilities that allow for larger purchases</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-semibold mb-6">Volunteer Support</h3>
                  <p className="text-gray-600 mb-6">
                    Our dedicated volunteers contribute over 1,000 hours monthly, significantly reducing operational costs.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Professional chefs volunteer their expertise</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Community members assist with meal distribution</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                      <p>Corporate volunteer programs provide additional support</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Annual Budget */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Annual Nutrition Program Budget</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Food Ingredients</h3>
                        <p className="text-orange-600 font-bold">₹54,75,000</p>
                      </div>
                      <p className="text-gray-600 mt-2">Based on serving 10,000 meals daily at ₹15 per meal</p>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Kitchen Operations</h3>
                        <p className="text-orange-600 font-bold">₹18,25,000</p>
                      </div>
                      <p className="text-gray-600 mt-2">Includes utilities, equipment maintenance, and cooking supplies</p>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Distribution</h3>
                        <p className="text-orange-600 font-bold">₹18,25,000</p>
                      </div>
                      <p className="text-gray-600 mt-2">Packaging, transport, and serving materials</p>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Nutrition Education</h3>
                        <p className="text-orange-600 font-bold">₹5,00,000</p>
                      </div>
                      <p className="text-gray-600 mt-2">Materials, workshops, and community outreach</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Total Annual Budget</h3>
                        <p className="text-orange-600 font-bold text-xl">₹96,25,000</p>
                      </div>
                      <p className="text-gray-600 mt-2">Serving approximately 3.65 million meals annually</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-6">
                Financial data based on our 2023-2024 fiscal year projections
              </p>
            </div>
          </div>
        </>
      )}

      {activeSubTab === 'sources' && (
        <>
          {/* Sources Hero */}
          <div className="py-20 bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold mb-6">Our Data Sources</h2>
                <p className="text-xl text-gray-600">
                  We believe in transparency and evidence-based approaches. Here are the sources that inform our nutrition program.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                  <BookOpen className="w-12 h-12 text-orange-500 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Research</h3>
                  <p className="text-gray-600 mb-4">
                    Our nutrition guidelines are based on peer-reviewed research and established nutritional science.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                  <FileText className="w-12 h-12 text-orange-500 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Government Guidelines</h3>
                  <p className="text-gray-600 mb-4">
                    We follow the Indian Council of Medical Research's dietary recommendations and guidelines.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                  <ExternalLink className="w-12 h-12 text-orange-500 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Expert Consultation</h3>
                  <p className="text-gray-600 mb-4">
                    Our program is developed in consultation with nutritionists and public health experts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Sources */}
          <div className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Detailed References</h2>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Nutritional Guidelines</h3>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h4 className="text-lg font-medium mb-2">Indian Council of Medical Research (ICMR)</h4>
                      <p className="text-gray-600 mb-2">
                        Our daily caloric and nutrient targets are based on ICMR's "Dietary Guidelines for Indians" (2020).
                      </p>
                      <a 
                        href="https://www.icmr.gov.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:underline inline-flex items-center gap-1"
                      >
                        View source <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="text-lg font-medium mb-2">World Health Organization (WHO)</h4>
                      <p className="text-gray-600 mb-2">
                        Our balanced diet approach follows WHO's "Healthy Diet" recommendations for developing countries.
                      </p>
                      <a 
                        href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:underline inline-flex items-center gap-1"
                      >
                        View source <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">National Institute of Nutrition (NIN)</h4>
                      <p className="text-gray-600 mb-2">
                        Our meal planning is informed by NIN's "Dietary Guidelines for Indians - A Manual" (2022).
                      </p>
                      <a 
                        href="https://www.nin.res.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:underline inline-flex items-center gap-1"
                      >
                        View source <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Cost Data</h3>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h4 className="text-lg font-medium mb-2">Internal Financial Records</h4>
                      <p className="text-gray-600 mb-2">
                        Our cost-per-meal calculations are based on our audited financial statements from 2022-2023.
                      </p>
                      <p className="text-gray-500 text-sm">
                        Available upon request for transparency and accountability
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Food Corporation of India (FCI)</h4>
                      <p className="text-gray-600 mb-2">
                        Our bulk purchasing strategies are informed by FCI's wholesale pricing guidelines.
                      </p>
                      <a 
                        href="https://fci.gov.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:underline inline-flex items-center gap-1"
                      >
                        View source <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Expert Consultants</h3>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h4 className="text-lg font-medium mb-2">Dr. Anjali Sharma, PhD</h4>
                      <p className="text-gray-600">
                        Nutrition Scientist, All India Institute of Medical Sciences (AIIMS)
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="text-lg font-medium mb-2">Dr. Rajesh Kumar, MD</h4>
                      <p className="text-gray-600">
                        Public Health Specialist, National Institute of Public Health
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Chef Vikram Patel</h4>
                      <p className="text-gray-600">
                        Culinary Director, Institute of Hotel Management, Bangalore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Research Methodology */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Our Research Methodology</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <p className="text-gray-600 mb-8">
                    Our nutrition program is continuously evaluated and improved through a rigorous research methodology:
                  </p>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h3 className="text-xl font-semibold mb-2">1. Needs Assessment</h3>
                      <p className="text-gray-600">
                        Regular surveys of community nutritional needs and deficiencies conducted quarterly
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="text-xl font-semibold mb-2">2. Menu Development</h3>
                      <p className="text-gray-600">
                        Collaborative process involving nutritionists, chefs, and community representatives
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="text-xl font-semibold mb-2">3. Nutritional Analysis</h3>
                      <p className="text-gray-600">
                        Each meal plan is analyzed for macro and micronutrient content using standardized tools
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="text-xl font-semibold mb-2">4. Pilot Testing</h3>
                      <p className="text-gray-600">
                        New meal plans are tested with small groups before full implementation
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">5. Continuous Evaluation</h3>
                      <p className="text-gray-600">
                        Regular feedback collection and nutritional impact assessment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Nutrition;
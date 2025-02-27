import React from 'react';
import { HelpCircle, AlertTriangle, CheckCircle } from 'lucide-react';

function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-white mb-6">Challenges & Solutions</h1>
            <p className="text-xl text-white">Addressing potential obstacles in our mission</p>
          </div>
        </div>
      </div>

      {/* Q&A Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <HelpCircle className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              We've identified potential challenges in our mission and developed proactive solutions to address them.
            </p>
          </div>

          <div className="space-y-8">
            {/* Challenge 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Anonymous benefactor backs out</h3>
                    <p className="text-gray-600">
                      What happens if our primary benefactor withdraws support for the facility and ingredient collection?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-2">Our Solution</h4>
                    <p className="text-gray-600">
                      Establish clear communication channels and formal agreements with our benefactor to ensure commitment. 
                      We'll maintain regular contact to address any concerns promptly and demonstrate the impact of their contribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Crowdfunding fails</h3>
                    <p className="text-gray-600">
                      What if we don't reach our fundraising goals to support the program?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-2">Our Solution</h4>
                    <p className="text-gray-600">
                      Design emotionally compelling campaigns that appeal to people's sympathy and desire to make a difference. 
                      We'll leverage our networks to expand our reach and implement a tiered approach with smaller, achievable 
                      funding milestones. Additionally, we'll develop alternative funding sources through grants and corporate partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Chefs do not cooperate in food bank</h3>
                    <p className="text-gray-600">
                      What if professional chefs are unwilling to participate in our training program?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-2">Our Solution</h4>
                    <p className="text-gray-600">
                      We'll implement a rigorous screening process to ensure we select chefs who are aligned with our mission. 
                      Those who don't meet our standards or fail to cooperate will be removed from the program. We'll maintain 
                      a pipeline of potential instructors and offer incentives like professional recognition and networking opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Initial batch does not do well</h3>
                    <p className="text-gray-600">
                      What if our first cohort of students struggles to complete the program successfully?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-2">Our Solution</h4>
                    <p className="text-gray-600">
                      If necessary, we'll temporarily suspend the program to evaluate and address issues. This may include 
                      revising the curriculum, improving selection criteria, enhancing support systems, or replacing instructors. 
                      We'll implement regular progress assessments to identify and address problems early.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">No one hires the workers</h3>
                    <p className="text-gray-600">
                      What if graduates struggle to find employment in the culinary industry?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-2">Our Solution</h4>
                    <p className="text-gray-600">
                      We'll leverage our anonymous benefactor's industry connections to establish relationships with hiring agencies 
                      and restaurants. We'll develop formal job placement partnerships and track employment outcomes to continuously 
                      improve our training to meet industry needs. Additionally, we'll provide ongoing career support and networking 
                      opportunities for graduates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 6 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Food is not donated</h3>
                    <p className="text-gray-600">
                      What if we face shortages in food donations for our food bank operations?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-2">Our Solution</h4>
                    <p className="text-gray-600">
                      We'll allocate a portion of our crowdfunding proceeds as a contingency fund for purchasing essential 
                      ingredients when donations are insufficient. We'll also develop relationships with multiple food suppliers, 
                      grocery stores, and restaurants to diversify our donation sources and implement food recovery programs to 
                      reduce waste and secure additional supplies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 7 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Limited access to education and training</h3>
                    <p className="text-gray-600">
                      How do we ensure our program reaches those who need it most?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-2">Our Solution</h4>
                    <p className="text-gray-600">
                      We'll expand access to free and affordable education by implementing outreach programs in underserved communities. 
                      Our selection process will prioritize candidates with the greatest need and potential for success. We'll also 
                      develop flexible learning options, including evening and weekend classes, to accommodate various schedules and 
                      circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Overcoming These Challenges</h2>
          <p className="text-xl text-gray-600 mb-8">
            With your support, we can address these obstacles and create lasting change in our community.
          </p>
          <a 
            href="https://www.fueladream.com/home/campaign/84396" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            Support Our Mission
          </a>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
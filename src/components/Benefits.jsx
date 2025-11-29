import React from 'react';

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Team's Productivity
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of growing businesses that have streamlined their workflows 
              and boosted team efficiency with our AI-powered platform.
            </p>

            <div className="space-y-6">

              {/* Benefit 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">40% Faster Project Delivery</h3>
                  <p className="text-gray-600">
                    Automated workflows and intelligent task management help teams complete
                    projects ahead of schedule.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce Administrative Overhead</h3>
                  <p className="text-gray-600">
                    Spend less time on status updates and more time on meaningful work.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Improve Team Satisfaction</h3>
                  <p className="text-gray-600">
                    Clear priorities, balanced workloads, and better communication lead to happier teams.
                  </p>
                </div>
              </div>

            </div>
          </div>

         
          <div className="relative">
            <img
              src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/1aa7b00f-0906-43f9-8417-e3917264b126/1aa7b00f-0906-43f9-8417-e3917264b126/benefits/benefits-productivity-619b9906f146464fb6afda32e0ee81fc.png"
              alt="Productive team"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

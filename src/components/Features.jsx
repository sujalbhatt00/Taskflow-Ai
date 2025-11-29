import React from 'react';

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features Built for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline your projects, boost productivity, and keep your team aligned.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
            <div className="mb-6">
              <img
                src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/1aa7b00f-0906-43f9-8417-e3917264b126/1aa7b00f-0906-43f9-8417-e3917264b126/features/features-automation-15320971d3c64faeac4963e7501b99e7.png"
                alt="Automated task assignment"
                className="w-16 h-16 mx-auto rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Task Assignment</h3>
            <p className="text-gray-600">
              AI automatically assigns tasks based on team member skills, workload, and availability. 
              No more manual scheduling headaches.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-8 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-200">
            <div className="mb-6">
              <img
                src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/1aa7b00f-0906-43f9-8417-e3917264b126/1aa7b00f-0906-43f9-8417-e3917264b126/features/features-collaboration-8c68d76aa0314abd8fe36d4d53046f6b.png"
                alt="Real-time collaboration"
                className="w-16 h-16 mx-auto rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Collaboration</h3>
            <p className="text-gray-600">
              Keep everyone in sync with live updates, instant messaging, and shared workspaces. 
              Collaborate seamlessly from anywhere.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-8 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-200">
            <div className="mb-6">
              <img
                src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/1aa7b00f-0906-43f9-8417-e3917264b126/1aa7b00f-0906-43f9-8417-e3917264b126/features/features-integration-8d7ce36080d54fdab5fdf805722f82b8.png"
                alt="Seamless integrations"
                className="w-16 h-16 mx-auto rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Seamless Integrations</h3>
            <p className="text-gray-600">
              Connect with 100+ tools your team already uses — Slack, Google Workspace, Trello, and more.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

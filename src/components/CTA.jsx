import React from 'react'
export default function CTA(){
return (
<section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Team's Productivity?</h2>
<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of teams already saving 40% of their project management time with AI-powered automation, seamless collaboration, and smart integrations.</p>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
<div className="text-center"><div className="text-2xl font-bold text-blue-200">✓</div><div className="text-sm">Automated Task Assignment</div></div>
<div className="text-center"><div className="text-2xl font-bold text-blue-200">✓</div><div className="text-sm">Real-time Collaboration</div></div>
<div className="text-center"><div className="text-2xl font-bold text-blue-200">✓</div><div className="text-sm">Seamless Integrations</div></div>
</div>
</div>
<a href="#" className="inline-block bg-white text-blue-600 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg">Start Your 14-Day Free Trial</a>
<p className="text-blue-100 text-sm mt-4">No credit card required • Cancel anytime • Full access to all features</p>
</div>
</section>
)
}
import React from 'react'
export default function Hero(){
return (
<section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="text-center lg:text-left">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">AI-Powered Project Management for <span className="text-blue-600">Growing Teams</span></h1>
<p className="text-xl text-gray-600 mb-8 max-w-2xl">Transform your team's productivity with intelligent task assignment, seamless collaboration, and automated workflows. Built specifically for small to medium-sized businesses.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg">Start 14-Day Free Trial</button>
<button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200">Watch Demo</button>
</div>
<div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
<div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>No credit card required</span></div>
<div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>Setup in 5 minutes</span></div>
</div>
</div>
<div className="relative">
<img data-ai="generate" data-slot="hero-main" data-prompt="Modern project management dashboard interface showing AI-powered task assignment, team collaboration features, and clean UI design with charts and task boards" data-ar="16:9" src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/1aa7b00f-0906-43f9-8417-e3917264b126/1aa7b00f-0906-43f9-8417-e3917264b126/hero/hero-main-25ba04b4e3374b1a8b2692efb6ba3baa.png" alt="AI-powered project management dashboard" width="1200" height="675" className="w-full rounded-2xl object-cover shadow-2xl" loading="lazy" decoding="async" fetchpriority="auto" />
</div>
</div>
</div>
</section>
)
}
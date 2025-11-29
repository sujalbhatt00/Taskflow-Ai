import React from 'react'
export default function Navbar(){
return (
<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<div className="flex-shrink-0">
<span className="text-2xl font-bold text-blue-600">TaskFlow AI</span>
</div>
</div>
<nav className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Features</a>
<a href="#pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Pricing</a>
<a href="#testimonials" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Reviews</a>
<a href="#resources" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Resources</a>
<a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
</div>
</nav>
<div className="flex items-center space-x-4">
<a href="#login" className="text-gray-600 hover:text-blue-600 text-sm font-medium">Sign In</a>
<a href="#trial" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Start Free Trial</a>
</div>
<div className="md:hidden">
<button type="button" className="text-gray-600 hover:text-blue-600" aria-label="menu">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</div>
</div>
</div>
</header>
)
}
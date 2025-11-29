import React from 'react'
export default function Footer(){
return (
<footer className="bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1">
<div className="flex items-center mb-4">
<span className="text-2xl font-bold text-blue-400">TaskFlow AI</span>
</div>
<p className="text-gray-400 text-sm mb-4">AI-powered project management for modern teams. Streamline workflows and boost productivity.</p>
<div className="flex space-x-4">
<a href="#" className="text-gray-400 hover:text-white"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.92c-.66.29-1.37.49-2.11.58.76-.46 1.35-1.18 1.63-2.05-.71.42-1.5.73-2.34.9C18.5 4.4 17.3 4 16 4c-2.3 0-4.16 1.86-4.16 4.16 0 .33.04.65.11.96C7.69 9 4.07 7.13 1.64 4.15c-.36.62-.57 1.34-.57 2.11 0 1.46.74 2.75 1.86 3.51-.61-.02-1.18-.19-1.68-.47v.05c0 2.03 1.44 3.73 3.35 4.12-.35.1-.72.15-1.11.15-.27 0-.53-.03-.78-.08.53 1.66 2.06 2.87 3.87 2.91-1.42 1.12-3.2 1.79-5.13 1.79-.33 0-.66-.02-.98-.06 1.82 1.17 3.98 1.85 6.3 1.85 7.55 0 11.68-6.26 11.68-11.68v-.53c.8-.58 1.49-1.3 2.04-2.12-.73.32-1.5.54-2.29.64z"/></svg></a>
<a href="#" className="text-gray-400 hover:text-white"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v16h-4zM8.5 8h3.7v2.2h.1c.5-.9 1.8-1.8 3.8-1.8 4.1 0 4.9 2.6 4.9 6v9.6h-4v-8.5c0-2-.04-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.4v8.6h-4z"/></svg></a>
<a href="#" className="text-gray-400 hover:text-white"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.85 5.38.85 11.65c0 4.78 3.1 8.83 7.4 10.26.54.1.73-.24.73-.53 0-.26-.01-.95-.01-1.86-3.01.65-3.64-1.45-3.64-1.45-.49-1.25-1.2-1.58-1.2-1.58-.98-.67.07-.66.07-.66 1.08.08 1.65 1.12 1.65 1.12.96 1.64 2.52 1.17 3.13.9.1-.7.38-1.17.69-1.44-2.4-.27-4.93-1.2-4.93-5.35 0-1.18.42-2.14 1.11-2.9-.11-.27-.48-1.35.11-2.8 0 0 .96-.31 3.15 1.1.91-.25 1.88-.37 2.85-.37.97 0 1.94.12 2.85.37 2.18-1.42 3.14-1.1 3.14-1.1.59 1.45.22 2.53.11 2.8.69.76 1.11 1.72 1.11 2.9 0 4.16-2.54 5.08-4.96 5.34.39.34.74 1.02.74 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.19.64.74.53 4.3-1.44 7.4-5.48 7.4-10.26C23.15 5.38 18.27.5 12 .5z"/></svg></a>
</div>
</div>


<div>
<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
<ul className="space-y-2">
<li><a href="#" className="text-gray-400 hover:text-white text-sm">Features</a></li>
<li><a href="#" className="text-gray-400 hover:text-white text-sm">Integrations</a></li>
<li><a href="#" className="text-gray-400 hover:text-white text-sm">Pricing</a></li>
<li><a href="#" className="text-gray-400 hover:text-white text-sm">API</a></li>
</ul>
</div>


<div>
<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
<ul className="space-y-2">
<li><a href="#" className="text-gray-400 hover:text-white text-sm">About</a></li>
<li><a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
<li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
<li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
</ul>
</div>


<div>
<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h3>
<ul className="space-y-2">
<li><a href="#" className="text-gray-400 hover:text-white text-sm">Help Center</a></li>
<li><a href="#" className="text-gray-400 hover:text-white text-sm">Documentation</a></li>
<li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
<li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
</ul>
</div>
</div>


<div className="border-t border-gray-800 mt-8 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm">© 2024 TaskFlow AI. All rights reserved.</p>
<div className="flex items-center mt-4 md:mt-0">
<span className="text-gray-400 text-sm mr-2">Contact:</span>
<a href="mailto:hello@taskflowai.com" className="text-blue-400 hover:text-blue-300 text-sm">hello@taskflowai.com</a>
</div>
</div>
</div>
</div>
</footer>
)
}
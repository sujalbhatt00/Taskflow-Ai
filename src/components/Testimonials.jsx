import React from 'react'
export default function Testimonials(){
const data = [
{initials:'SM', name:'Sarah Martinez', title:'Marketing Director, TechFlow Solutions', quote:'The AI task assignment feature has been a game-changer for our marketing team. We\'ve reduced project planning time by 60% and our team collaboration has never been better.', color:'bg-blue-500'},
{initials:'MJ', name:'Michael Johnson', title:'Operations Manager, GrowthLab Agency', quote:'Integration with our existing tools was seamless. The real-time collaboration features have transformed how our remote team works together on complex projects.', color:'bg-green-500'},
{initials:'EC', name:'Emily Chen', title:'Founder, Creative Studio Pro', quote:'As a small business owner, I needed something powerful but simple. This platform delivered exactly that. Our project delivery time improved by 40% in just two months.', color:'bg-purple-500'},
]
return (
<section id="testimonials" className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Growing Teams Worldwide</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">See how small and medium-sized businesses are transforming their project management with AI automation.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
{data.map(d => (
<div key={d.name} className="bg-gray-50 rounded-2xl p-8">
<div className="flex items-center mb-4"><div className="flex text-yellow-400">{Array.from({length:5}).map((_,i)=>(<svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>))}</div></div>
<blockquote className="text-gray-700 mb-6">"{d.quote}"</blockquote>
<div className="flex items-center">
<div className={`${d.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4`}>{d.initials}</div>
<div>
<div className="font-semibold text-gray-900">{d.name}</div>
<div className="text-gray-600 text-sm">{d.title}</div>
</div>
</div>
</div>
))}
</div>
</div>
</section>
)
}
import React from 'react'
export default function Pricing(){
const plans = [
{name:'Starter', price:'$9', desc:'Perfect for small teams getting started', bullets:['Up to 5 team members','AI task assignment','Real-time collaboration','Basic integrations','Email support']},
{name:'Professional', price:'$19', desc:'Ideal for growing teams', bullets:['Up to 25 team members','Advanced AI automation','Premium integrations','Priority support','Custom workflows'], featured:true},
{name:'Enterprise', price:'$39', desc:'For large teams and organizations', bullets:['Unlimited team members','Enterprise AI features','All integrations','24/7 dedicated support','Advanced security']}
]
return (
<section className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Start your 14-day free trial today. No credit card required. Cancel anytime.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
{plans.map(p => (
<div key={p.name} className={`bg-white rounded-2xl shadow-lg p-8 border ${p.featured? 'border-2 border-blue-500 relative shadow-xl':''}`}>
{p.featured && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span></div>}
<div className="text-center mb-6">
<h3 className="text-xl font-semibold text-gray-900 mb-2">{p.name}</h3>
<div className="text-4xl font-bold text-gray-900 mb-1">{p.price}<span className="text-lg font-normal text-gray-600">/user/month</span></div>
<p className="text-gray-600">{p.desc}</p>
</div>
<ul className="space-y-3 mb-8">
{p.bullets.map(b => (
<li key={b} className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>{b}</li>
))}
</ul>
<button className={`w-full ${p.name==='Professional' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-white'} py-3 px-6 rounded-lg font-semibold hover:opacity-95 transition`}>{p.name==='Enterprise' ? 'Contact Sales' : 'Start 14-Day Free Trial'}</button>
</div>
))}
</div>
</div>
</section>
)
}
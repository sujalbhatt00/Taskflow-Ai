import React, { useState } from 'react'
export default function FAQ(){
const [open, setOpen] = useState(null)
const faqs = [
{q:'How does the 14-day free trial work?', a:'Your free trial gives you full access to all features for 14 days. No credit card required to start. You can invite your team, set up projects, and explore all AI automation features.'},
{q:'What integrations are available?', a:'We integrate with 50+ popular tools including Slack, Microsoft Teams, Google Workspace, Zoom, Salesforce, HubSpot, GitHub, and more.'},
{q:'How does AI task assignment work?', a:'Our AI analyzes team member skills, workload, availability, and past performance to automatically suggest optimal task assignments.'},
{q:'Is my data secure?', a:'All data is encrypted in transit and at rest using industry-standard AES-256 encryption. We are SOC 2 Type II and GDPR compliant.'},
{q:'Can I migrate from my current project management tool?', a:'Absolutely! We provide migration assistance for popular tools like Asana, Trello, Monday.com, Jira, and others.'},
{q:'What kind of support do you offer?', a:'Starter plans include email support with 24-hour response time. Professional plans get priority support with live chat. Enterprise customers receive 24/7 dedicated support.'}
]
return (
<section className="py-16 bg-gray-50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
<p className="text-xl text-gray-600">Everything you need to know about getting started with our AI project management platform.</p>
</div>
<div className="space-y-6">
{faqs.map((f, i) => (
<div key={f.q} className="bg-white rounded-2xl shadow-sm border border-gray-200">
<button onClick={() => setOpen(open===i? null : i)} className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
<h3 className="text-lg font-semibold text-gray-900">{f.q}</h3>
<svg className={`w-5 h-5 text-gray-500 transform transition-transform ${open===i? 'rotate-180':''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
</button>
<div className={`px-8 pb-6 text-gray-600 ${open===i? 'block':'hidden'}`}>
<p>{f.a}</p>
</div>
</div>
))}
</div>
<div className="text-center mt-12">
<p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
<button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4">Contact Support</button>
<button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Start 14-Day Free Trial</button>
</div>
</div>
</section>
)
}
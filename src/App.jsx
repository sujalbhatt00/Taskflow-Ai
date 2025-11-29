import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'


export default function App(){
return (
<div className="bg-white">
<Navbar />
<main>
<Hero />
<Features />
<Benefits />
<Pricing />
<Testimonials />
<FAQ />
<CTA />
</main>
<Footer />
</div>
)
}
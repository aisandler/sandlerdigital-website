import React, { useState } from 'react';
import { ArrowRight, Bot, Brain, BarChart, Mail, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">SandlerDigital.ai</div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center">
                Contact
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2">
              <a href="#services" className="block py-2 text-gray-600">Services</a>
              <a href="#benefits" className="block py-2 text-gray-600">Benefits</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Marketing with
            <span className="text-blue-600"> AI-Powered</span> Strategy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Combining expert digital marketing consulting with custom AI solutions to optimize and automate your marketing operations.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-medium text-lg">
              Schedule a Strategy Session
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="services" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Strategic Expertise</h3>
            <p className="text-gray-600">
              Expert digital marketing strategy development and transformation roadmaps backed by AI insights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Bot className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom AI Solutions</h3>
            <p className="text-gray-600">
              Purpose-built AI agents that automate and optimize your marketing operations 24/7.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Optimization</h3>
            <p className="text-gray-600">
              Real-time monitoring and improvement of your marketing performance through AI.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Beyond Traditional Consulting</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Move from recommendations to results with AI-powered execution that scales your marketing operations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">For Marketing Leaders</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span>Enhance capabilities with AI-powered insights and automation</span>
              </li>
              <li className="flex items-center text-gray-600">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span>Reduce operational costs while improving performance</span>
              </li>
              <li className="flex items-center text-gray-600">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span>Optimize campaign performance in real-time</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">For Digital Teams</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span>Eliminate manual reporting and routine tasks</span>
              </li>
              <li className="flex items-center text-gray-600">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span>Focus on strategy while AI handles execution</span>
              </li>
              <li className="flex items-center text-gray-600">
                <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span>Scale operations efficiently with intelligent automation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a strategy session to learn how AI-powered solutions can optimize your marketing operations.
            </p>
          </div>
          
 <form action="https://formspree.io/f/xjkkkowq" method="POST" className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
  <div className="mb-4">
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
    <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"/>
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"/>
  </div>
  <div className="mb-4">
    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
    <input type="text" id="company" name="company" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"/>
  </div>
  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg flex items-center justify-center">
    Schedule Strategy Session
    <Mail className="ml-2 h-5 w-5" />
  </button>
</form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            © {new Date().getFullYear()} SandlerDigital.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

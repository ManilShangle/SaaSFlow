
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Play, Star, Users } from 'lucide-react';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Here you would typically send the email to your backend
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">Trusted by 10,000+ businesses</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Scale Your Business
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> 10x Faster</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Stop wasting time on manual processes. Our AI-powered platform automates your workflow, 
                increases productivity by 300%, and helps you focus on what matters most - growing your business.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Setup in 5 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">24/7 support included</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Cancel anytime</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
                <Button 
                  type="submit" 
                  className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
              
              {/* Secondary CTA */}
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="h-12 px-6 border-gray-300 hover:border-gray-400">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>Join 10,000+ users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-xs text-gray-500">saasflow.com/dashboard</div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Dashboard Overview</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600">Live</span>
                    </div>
                  </div>
                  
                  {/* Mock Dashboard Elements */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">$24.5k</div>
                      <div className="text-xs text-gray-500">Revenue</div>
                      <div className="text-xs text-green-600">↗ +12.5%</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-purple-600">1,249</div>
                      <div className="text-xs text-gray-500">Users</div>
                      <div className="text-xs text-green-600">↗ +8.2%</div>
                    </div>
                  </div>
                  
                  {/* Mock Chart */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-end space-x-1 h-20">
                      {[40, 60, 45, 80, 65, 90, 75, 95].map((height, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-blue-600 to-purple-600 rounded-sm flex-1 animate-pulse"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white font-bold">AI</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-xs font-bold">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

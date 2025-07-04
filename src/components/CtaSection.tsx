
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';

const CtaSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CTA Email submitted:', email);
    // Handle email submission
  };

  const urgencyFeatures = [
    { icon: Zap, text: "Setup in 5 minutes" },
    { icon: Shield, text: "Bank-level security" },
    { icon: Users, text: "24/7 support included" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency Badge */}
        <Badge className="bg-yellow-400 text-yellow-900 px-4 py-2 text-sm font-semibold mb-6 animate-pulse">
          🔥 Limited Time: 50% Off First 3 Months
        </Badge>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to 10x your productivity?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join 10,000+ businesses already using SaaSFlow to automate workflows, 
          gain insights, and accelerate growth. Start your free trial today.
        </p>

        {/* Social Proof */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-white font-semibold">4.9/5</span>
          <span className="text-blue-200">from 2,340+ reviews</span>
        </div>

        {/* Email Capture Form */}
        <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 text-lg bg-white border-0 focus:ring-2 focus:ring-yellow-400"
              required
            />
            <Button 
              type="submit"
              className="h-14 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </form>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {urgencyFeatures.map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-2 text-white">
              <feature.icon className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Risk-Free Messaging */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <p className="text-white text-lg font-semibold mb-2">
            🛡️ 14-Day Free Trial • No Credit Card Required • Cancel Anytime
          </p>
          <p className="text-blue-200 text-sm">
            Join thousands of satisfied customers with our risk-free trial
          </p>
        </div>

        {/* Secondary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
          >
            Watch 2-Min Demo
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
          >
            Talk to Sales
          </Button>
        </div>

        {/* Final Trust Message */}
        <p className="text-blue-200 text-sm mt-8">
          Trusted by startups to Fortune 500 companies worldwide
        </p>
      </div>
    </section>
  );
};

export default CtaSection;

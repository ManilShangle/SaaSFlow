
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Clock, 
  Smartphone,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const FeatureShowcase = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast Automation",
      description: "Automate repetitive tasks and workflows in minutes, not hours. Our AI-powered engine learns your patterns and optimizes processes automatically.",
      benefits: ["300% faster task completion", "Zero learning curve", "Smart pattern recognition"],
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and SOC 2 compliance ensure your data is always protected. Multi-layer security with 24/7 monitoring.",
      benefits: ["SOC 2 Type II certified", "End-to-end encryption", "24/7 security monitoring"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Insights",
      description: "Get real-time insights into your business performance with customizable dashboards and predictive analytics powered by machine learning.",
      benefits: ["Real-time reporting", "Predictive analytics", "Custom dashboards"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const additionalFeatures = [
    { icon: Globe, title: "Global CDN", description: "99.9% uptime worldwide" },
    { icon: Clock, title: "Real-time Sync", description: "Instant updates across all devices" },
    { icon: Smartphone, title: "Mobile Ready", description: "Native iOS and Android apps" }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Features
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to scale your business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to automate workflows, 
            gain insights, and accelerate growth.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group hover:bg-gray-50">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Plus many more powerful features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Demo Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">See it in action</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Watch how our platform can transform your workflow in just 2 minutes
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Watch Demo Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;

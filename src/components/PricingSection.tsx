
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, Star, Zap } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "Up to 5 team members",
        "Basic automation workflows",
        "Email support",
        "Core integrations (10+)",
        "Basic analytics dashboard",
        "Mobile app access"
      ],
      limitations: [
        "Limited to 1,000 tasks/month",
        "Basic reporting only"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Professional",
      description: "Most popular for growing businesses",
      monthlyPrice: 79,
      annualPrice: 65,
      features: [
        "Up to 25 team members",
        "Advanced automation + AI",
        "Priority support",
        "All integrations (100+)",
        "Advanced analytics + insights",
        "Custom dashboards",
        "API access",
        "Team collaboration tools"
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true,
      color: "border-blue-500",
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      description: "For large teams with advanced needs",
      monthlyPrice: 199,
      annualPrice: 165,
      features: [
        "Unlimited team members",
        "Custom automations + AI",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security + compliance",
        "Custom integrations",
        "Onboarding & training",
        "SLA guarantee"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      color: "border-purple-500"
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (!isAnnual) return 0;
    return Math.round(((plan.monthlyPrice - plan.annualPrice) / plan.monthlyPrice) * 100);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-green-600 border-green-200">
            Pricing
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card required.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-green-600"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            <Badge className="bg-green-100 text-green-800 ml-2">
              Save up to 20%
            </Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'transform scale-105 shadow-xl' : 'shadow-lg'
              } border-2 ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2">
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">{plan.badge}</span>
                  </div>
                </div>
              )}
              
              <CardContent className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-900">${getPrice(plan)}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    {isAnnual && getSavings(plan) > 0 && (
                      <div className="text-sm text-green-600 mt-1">
                        Save {getSavings(plan)}% annually
                      </div>
                    )}
                    {!isAnnual && (
                      <div className="text-sm text-gray-500 mt-1">
                        Billed monthly
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    className={`w-full mb-6 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    } text-white font-semibold py-3`}
                  >
                    {plan.cta}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    What's included:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <h5 className="text-sm font-medium text-gray-500 mb-2">Limitations:</h5>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, limIndex) => (
                          <li key={limIndex} className="text-xs text-gray-500">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">14-Day Money-Back Guarantee</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Try SaaSFlow risk-free for 14 days. If you're not completely satisfied, 
            we'll refund your money, no questions asked.
          </p>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We work with enterprise customers to create custom solutions that fit your specific needs and requirements.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

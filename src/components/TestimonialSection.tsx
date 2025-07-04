
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechStartup Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b632?w=100&h=100&fit=crop&crop=face",
      content: "SaaSFlow transformed our entire workflow. We're now 3x more productive and our team loves how intuitive the platform is. The automation features saved us 20 hours per week.",
      rating: 5,
      metrics: "300% productivity increase"
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      company: "ScaleCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "The analytics and insights we get from SaaSFlow are game-changing. We can now make data-driven decisions that have increased our revenue by 45% in just 6 months.",
      rating: 5,
      metrics: "45% revenue growth"
    },
    {
      name: "Emily Thompson",
      role: "CTO",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Security was our biggest concern when choosing a platform. SaaSFlow's enterprise-grade security and SOC 2 compliance gave us complete peace of mind.",
      rating: 5,
      metrics: "100% security compliance"
    },
    {
      name: "David Park",
      role: "Founder",
      company: "GrowthCo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Implementation was seamless and the support team is incredible. We were up and running in less than a day, and the ROI has been phenomenal.",
      rating: 5,
      metrics: "< 1 day setup time"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp",
      industry: "Technology",
      challenge: "Manual processes slowing growth",
      solution: "Automated workflow management",
      result: "300% faster task completion",
      logo: "TC"
    },
    {
      company: "ScaleUp",
      industry: "E-commerce",
      challenge: "Lack of actionable insights",
      solution: "AI-powered analytics dashboard",
      result: "45% increase in revenue",
      logo: "SU"
    },
    {
      company: "InnovateLabs",
      industry: "Healthcare",
      challenge: "Security compliance requirements",
      solution: "Enterprise-grade security platform",
      result: "SOC 2 compliance achieved",
      logo: "IL"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
            Customer Success
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by thousands of businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our customers have to say about their experience with SaaSFlow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-blue-100" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>
                
                {/* Metrics Badge */}
                <div className="mb-6">
                  <Badge className="bg-green-100 text-green-800 px-3 py-1">
                    {testimonial.metrics}
                  </Badge>
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Customer Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{study.logo}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{study.company}</h4>
                <p className="text-sm text-gray-600 mb-2">{study.industry}</p>
                <div className="space-y-2">
                  <div className="text-xs text-gray-500">Challenge: {study.challenge}</div>
                  <div className="text-xs text-gray-500">Solution: {study.solution}</div>
                  <div className="text-sm font-semibold text-green-600">Result: {study.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

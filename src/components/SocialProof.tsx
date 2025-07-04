
import React from 'react';
import { Star, Shield, Award, Users, TrendingUp } from 'lucide-react';

const SocialProof = () => {
  const trustBadges = [
    { icon: Shield, label: "SOC 2 Certified", color: "text-blue-600" },
    { icon: Award, label: "G2 Leader 2024", color: "text-green-600" },
    { icon: Users, label: "10,000+ Users", color: "text-purple-600" },
    { icon: TrendingUp, label: "99.9% Uptime", color: "text-orange-600" }
  ];

  const companyLogos = [
    "TechCorp", "InnovateCo", "GrowthLabs", "ScaleUp", "FutureWorks", "NextGen"
  ];

  const stats = [
    { number: "10,000+", label: "Active Users", suffix: "" },
    { number: "99.9", label: "Uptime", suffix: "%" },
    { number: "300", label: "Productivity Increase", suffix: "%" },
    { number: "24/7", label: "Support Available", suffix: "" }
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <badge.icon className={`w-5 h-5 ${badge.color}`} />
                <span className="text-sm font-medium text-gray-700">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="mb-12">
          <p className="text-center text-sm text-gray-500 mb-8">Used by companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg font-bold text-gray-400">{company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
                <span className="text-blue-600">{stat.suffix}</span>
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Rating Display */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">4.9</span>
            <span className="text-sm text-gray-500">from 2,340+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

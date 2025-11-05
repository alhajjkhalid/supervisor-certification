import React, { useState } from 'react';
import { Award, BookOpen, Users, TrendingUp, CheckCircle, Clock, MapPin, FileText, Truck, DollarSign, AlertCircle, MessageSquare, Star } from 'lucide-react';

export default function KeetaCertificationDashboard() {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: "Partner Onboarding & Setup",
      icon: Users,
      duration: "3 hours",
      topics: [
        "Partner admission guidelines and requirements",
        "VAT, Invoice & Bank Information setup",
        "Understanding Keeta's partnership model",
        "Required documents and eligibility criteria"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Contract & Registration",
      icon: FileText,
      duration: "2.5 hours",
      topics: [
        "Signing up for Keeta platform",
        "Understanding 3PL and Freelance pricing",
        "Contract signing process (HQ vs Branch)",
        "E-Pnote strategy and execution"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Rider Management",
      icon: Truck,
      duration: "4 hours",
      topics: [
        "Registering riders on the platform",
        "Auditing requirements and compliance",
        "Equipment collection procedures",
        "Rider training and onboarding best practices"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Operations & Performance",
      icon: TrendingUp,
      duration: "3.5 hours",
      topics: [
        "Capacity management essentials",
        "Shift assignment strategies",
        "Performance monitoring and VDA tracking",
        "Violation management and appeals"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "Financial Management",
      icon: DollarSign,
      duration: "2 hours",
      topics: [
        "Invoicing procedures",
        "Payment cycles and reconciliation",
        "VDA and incentive logic",
        "Financial compliance requirements"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      id: 6,
      title: "Communication & Excellence",
      icon: MessageSquare,
      duration: "2 hours",
      topics: [
        "Effective PMM communication",
        "Partner tiering system",
        "Maintaining Grade A status",
        "FAQ and problem resolution"
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const certificationProcess = [
    { step: 1, title: "Enroll", description: "Register for the certification program", icon: BookOpen },
    { step: 2, title: "Learn Online", description: "Complete 17+ hours of comprehensive training", icon: Clock },
    { step: 3, title: "In-Person Exam", description: "Visit Keeta HQ for final assessment", icon: MapPin },
    { step: 4, title: "Get Certified", description: "Receive your official Keeta certification", icon: Award }
  ];

  const benefits = [
    { title: "Standardized Knowledge", description: "Ensure all supervisors have consistent, comprehensive training", icon: BookOpen },
    { title: "Improved Performance", description: "Better-trained supervisors lead to higher-quality service delivery", icon: TrendingUp },
    { title: "Reduced Errors", description: "Minimize operational mistakes and compliance issues", icon: CheckCircle },
    { title: "Career Development", description: "Provide clear growth path for 3PL supervisors", icon: Star },
    { title: "Stronger Partnership", description: "Build deeper, more professional relationships with 3PLs", icon: Users },
    { title: "Quality Assurance", description: "Maintain high standards across all partner companies", icon: AlertCircle }
  ];

  const stats = [
    { label: "Training Modules", value: "6", icon: BookOpen },
    { label: "Total Hours", value: "17+", icon: Clock },
    { label: "Topics Covered", value: "24+", icon: FileText },
    { label: "Certification Validity", value: "1 Year", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <Award className="w-10 h-10" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Keeta Supervisor Certification Program</h1>
              <p className="text-emerald-100 text-base md:text-lg">Empowering 3PL Partners with Professional Excellence</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 md:p-6 border-l-4 border-emerald-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</p>
                </div>
                <stat.icon className="w-10 h-10 text-emerald-500 opacity-80" />
              </div>
            </div>
          ))}
        </div>

        {/* Initiative Overview */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            Initiative Overview
          </h2>
          <div className="prose max-w-none text-slate-700">
            <p className="text-base md:text-lg leading-relaxed mb-4">
              The <strong>Keeta Supervisor Certification Program</strong> is designed to establish a standardized, accredited training framework for supervisors managing rider fleets for our 3PL partners. This initiative addresses a critical challenge: the extensive knowledge and training requirements needed for supervisors to effectively manage operations.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-200">
                <h3 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  The Challenge
                </h3>
                <p className="text-sm text-emerald-800">
                  3PL supervisors require comprehensive knowledge across multiple domains—from compliance and operations to financial management and communication—creating a steep learning curve and inconsistent service quality.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  The Solution
                </h3>
                <p className="text-sm text-blue-800">
                  An accredited, comprehensive certification program that provides structured learning, validates expertise through examination, and ensures all supervisors meet Keeta's professional standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Journey */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            Certification Journey
          </h2>
          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {certificationProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg mb-4 relative z-10">
                    <process.icon className="w-8 h-8" />
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-xs font-bold text-emerald-600 mb-1">STEP {process.step}</div>
                    <h3 className="font-bold text-slate-800 mb-2 text-sm md:text-base">{process.title}</h3>
                    <p className="text-xs md:text-sm text-slate-600">{process.description}</p>
                  </div>
                </div>
                {index < certificationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-100%-2rem)] h-1 bg-gradient-to-r from-emerald-300 to-teal-300 -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Training Modules */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            Comprehensive Training Modules
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => {
              const ModuleIcon = module.icon;
              return (
                <div
                  key={module.id}
                  className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
                >
                  <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-3">
                      <ModuleIcon className="w-8 h-8" />
                      <div className="flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </div>
                    </div>
                    <h3 className="font-bold text-xl">{module.title}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Star className="w-6 h-6 text-emerald-600" />
            </div>
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-6 border border-slate-200 hover:border-emerald-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <BenefitIcon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-xl p-6 md:p-8 text-white text-center">
          <Award className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Get Certified?</h2>
          <p className="text-emerald-100 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Join the Keeta Supervisor Certification Program and elevate your professional expertise in 3PL management.
          </p>
          <button className="bg-white text-emerald-600 px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold text-base md:text-lg hover:bg-emerald-50 transition-colors shadow-lg">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

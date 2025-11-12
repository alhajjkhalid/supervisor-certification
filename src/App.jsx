import React, { useState } from 'react';
import { Award, BookOpen, Users, TrendingUp, CheckCircle, Clock, MapPin, FileText, Truck, DollarSign, AlertCircle, MessageSquare, Star, RefreshCw, Target, Zap, Shield, HeadphonesIcon, Rocket } from 'lucide-react';

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
    { title: "Eliminate Repetitive PMM Work", description: "Free PMMs from answering the same questions and handling identical issues repeatedly", icon: Zap },
    { title: "Scalable Partnership Model", description: "Onboard and manage more partners without increasing PMM headcount", icon: TrendingUp },
    { title: "Reduced Operational Errors", description: "Certified supervisors make fewer mistakes, requiring less intervention", icon: CheckCircle },
    { title: "New Performance KPIs", description: "Measure supervisor performance directly rather than through PMM filters", icon: Target },
    { title: "Career Development Path", description: "Provide clear professional growth opportunities in the logistics industry", icon: Star },
    { title: "Risk Mitigation", description: "Even if pilot fails, we gain comprehensive PMM training materials", icon: Shield }
  ];

  const challenges = [
    {
      challenge: "Constantly Evolving Content",
      description: "Training materials, policies, and procedures change frequently, sometimes within short time periods. Supervisors need to stay current with these updates.",
      solutions: [
        "Implement mandatory recertification exams every 3-6 months based on extent of changes",
        "Create a tiered update system: Minor updates (monthly newsletters), Major updates (quarterly refresher courses), Critical changes (immediate mandatory training)",
        "Develop a version control system for training materials with clear change logs",
        "Offer 'micro-certifications' for specific new features or policy changes",
        "Build an automated notification system that alerts certified supervisors of material changes"
      ],
      icon: RefreshCw,
      color: "from-orange-500 to-red-500"
    },
    {
      challenge: "Initial Adoption & Buy-in",
      description: "Getting 3PL companies and their supervisors to commit time and resources to complete the certification program.",
      solutions: [
        "Start with mandatory PMM certification to refine the program and demonstrate value internally",
        "Launch pilot program in one city with select partners to prove ROI and gather feedback",
        "Offer incentives for early adopters (priority support, better contract terms, public recognition)",
        "Create a tiered partnership model where Grade A status requires certification",
        "Share success metrics and testimonials from pilot program participants"
      ],
      icon: Users,
      color: "from-blue-500 to-indigo-500"
    },
    {
      challenge: "Maintaining Quality & Rigor",
      description: "Ensuring the certification remains valuable and rigorous while being accessible to diverse learning styles and schedules.",
      solutions: [
        "Require in-person proctored exams at Keeta HQ to maintain integrity",
        "Set minimum passing score of 80% with unlimited retakes after 2-week waiting period",
        "Include practical assessments alongside theoretical knowledge tests",
        "Conduct regular audits of certified supervisors' actual performance metrics",
        "Revoke certification for supervisors whose partners consistently underperform"
      ],
      icon: Award,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1",
      title: "Internal Launch",
      duration: "Month 1-2",
      description: "Roll out mandatory certification for all PMMs",
      objectives: [
        "All PMMs complete the certification program",
        "Refine training materials based on PMM feedback",
        "Establish exam standards and passing criteria",
        "Create comprehensive training materials library"
      ],
      icon: Rocket,
      color: "bg-blue-500"
    },
    {
      phase: "Phase 2",
      title: "Pilot Program",
      duration: "Month 3-5",
      description: "Test with 3-5 partners in one city without PMM support",
      objectives: [
        "Select pilot city and partner companies",
        "Certify 5-10 supervisors from partner companies",
        "Monitor performance with new KPIs and metrics",
        "Operate pilot partners with minimal PMM intervention",
        "Gather feedback and performance data"
      ],
      icon: Target,
      color: "bg-emerald-500"
    },
    {
      phase: "Phase 3",
      title: "Evaluation & Iteration",
      duration: "Month 6",
      description: "Analyze pilot results and refine the program",
      objectives: [
        "Compare pilot partner performance vs. traditional model",
        "Calculate PMM time savings and efficiency gains",
        "Identify gaps in training materials",
        "Adjust certification requirements based on findings",
        "Present ROI analysis to leadership"
      ],
      icon: TrendingUp,
      color: "bg-orange-500"
    },
    {
      phase: "Phase 4",
      title: "Scaled Rollout",
      duration: "Month 7+",
      description: "Expand certification to all partners nationwide",
      objectives: [
        "Make certification mandatory for new 3PL partnerships",
        "Grandfather existing partners with 6-month transition period",
        "Reduce PMM team or redirect to strategic functions",
        "Implement recertification schedule",
        "Launch 24/7 certified supervisor support channel"
      ],
      icon: Zap,
      color: "bg-purple-500"
    }
  ];

  const stats = [
    { label: "Training Modules", value: "6", icon: BookOpen },
    { label: "Total Hours", value: "17+", icon: Clock },
    { label: "Recertification", value: "3-6 Mo", icon: RefreshCw },
    { label: "Support", value: "24/7", icon: HeadphonesIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <Award className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Keeta Supervisor Certification Program</h1>
              <p className="text-emerald-100 text-lg">Transforming Partnership Management Through Professional Excellence</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500">
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

        {/* Strategic Vision */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            Strategic Vision: Reducing PMM Dependency
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-slate-200">
              The current PMM model is <strong className="text-emerald-400">unsustainable and non-scalable</strong>. PMMs spend the majority of their time on repetitive tasks: onboarding new partners, answering the same questions repeatedly, and resolving identical issues across different 3PL companies. This certification program aims to <strong className="text-white">eliminate or significantly reduce PMM responsibilities</strong> by creating self-sufficient, certified supervisors who already possess all necessary knowledge.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-900/30 backdrop-blur-sm rounded-lg p-5 border border-red-500/30">
                <div className="text-red-400 font-bold text-sm mb-2">CURRENT STATE</div>
                <p className="text-sm text-slate-300 mb-3">
                  PMMs handle repetitive onboarding, training, and issue resolution for every partner—creating bottlenecks and limiting growth.
                </p>
                <div className="text-xs text-red-300 space-y-1">
                  <div>• Same questions answered daily</div>
                  <div>• Identical issues across partners</div>
                  <div>• Cannot scale without hiring more PMMs</div>
                </div>
              </div>
              <div className="bg-orange-900/30 backdrop-blur-sm rounded-lg p-5 border border-orange-500/30">
                <div className="text-orange-400 font-bold text-sm mb-2">TRANSITION STATE</div>
                <p className="text-sm text-slate-300 mb-3">
                  Certified supervisors handle standard operations independently while PMMs focus on strategic relationships and exceptions.
                </p>
                <div className="text-xs text-orange-300 space-y-1">
                  <div>• PMMs mandatory certification first</div>
                  <div>• Pilot with one city</div>
                  <div>• Performance metrics established</div>
                </div>
              </div>
              <div className="bg-emerald-500/30 backdrop-blur-sm rounded-lg p-5 border-2 border-emerald-400">
                <div className="text-emerald-300 font-bold text-sm mb-2">FUTURE STATE ⭐</div>
                <p className="text-sm text-white mb-3">
                  Self-sufficient certified supervisors operate autonomously with 24/7 support channel, measured by direct performance KPIs.
                </p>
                <div className="text-xs text-emerald-200 space-y-1">
                  <div>• PMM team reduced or redirected</div>
                  <div>• Automated support systems</div>
                  <div>• Scalable partnership model</div>
                </div>
              </div>
            </div>
            <div className="bg-emerald-500/20 rounded-lg p-5 border border-emerald-500/50">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-emerald-300 mb-2">Risk-Free Initiative</h3>
                  <p className="text-sm text-slate-300">
                    Even in the worst-case scenario where the pilot doesn't achieve desired results, we will have created a <strong className="text-white">comprehensive, structured training program for our PMMs</strong>—improving internal capabilities and standardizing knowledge across the team. This initiative has value regardless of the pilot outcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Rocket className="w-6 h-6 text-emerald-600" />
            </div>
            Implementation Roadmap
          </h2>
          <div className="space-y-6">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className={`${phase.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg`}>
                      <phase.icon className="w-7 h-7" />
                    </div>
                    {index < implementationPhases.length - 1 && (
                      <div className="w-1 h-full bg-slate-200 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-xs font-bold text-emerald-600 mb-1">{phase.phase}</div>
                          <h3 className="text-xl font-bold text-slate-800">{phase.title}</h3>
                        </div>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-4">{phase.description}</p>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-slate-700">Key Objectives:</div>
                        {phase.objectives.map((obj, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <AlertCircle className="w-6 h-6 text-emerald-600" />
            </div>
            Challenges & Strategic Solutions
          </h2>
          <div className="space-y-6">
            {challenges.map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-white shadow-lg`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Challenge: {item.challenge}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                  <div className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Strategic Solutions:
                  </div>
                  <ul className="space-y-2">
                    {item.solutions.map((solution, idx) => (
                      <li key={idx} className="text-sm text-white/90 flex items-start gap-2">
                        <span className="text-white font-bold flex-shrink-0">•</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recertification & Ongoing Support */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <RefreshCw className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Recertification Process</h2>
                <p className="text-blue-100">Keeping knowledge current and relevant</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Frequency: Every 3-6 Months
                </h3>
                <p className="text-sm text-blue-100">
                  Based on the extent of changes to training materials, policies, and operational procedures. Minor updates require shorter cycles, major overhauls extend to 6 months.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Adaptive Assessment
                </h3>
                <p className="text-sm text-blue-100">
                  Recertification exams focus only on new content and major updates, not the entire curriculum. This respects supervisors' time while ensuring currency.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Mandatory Compliance
                </h3>
                <p className="text-sm text-blue-100">
                  Supervisors who fail to recertify within the grace period (30 days) will have their certification suspended until they pass the updated exam.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <HeadphonesIcon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">24/7 Supervisor Support</h2>
                <p className="text-purple-100">Dedicated channel for certified supervisors</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Exclusive Chat Channel
                </h3>
                <p className="text-sm text-purple-100">
                  Certified supervisors gain access to a dedicated 24/7 support channel for questions, issues, and guidance—bypassing traditional PMM channels.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Community Knowledge Base
                </h3>
                <p className="text-sm text-purple-100">
                  Supervisors can search past discussions, share best practices, and learn from each other's experiences—building a self-sustaining community.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Rapid Response Team
                </h3>
                <p className="text-sm text-purple-100">
                  Dedicated support team trained to handle complex queries quickly, with average response time under 2 hours for urgent issues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Journey */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            Certification Journey
          </h2>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Background connecting line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-300" 
                 style={{ zIndex: 0, width: 'calc(100% - 4rem)', marginLeft: '2rem' }}></div>
            
            {certificationProcess.map((process, index) => (
              <div key={index} className="flex-1 flex flex-col items-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg mb-4">
                  <process.icon className="w-8 h-8" />
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all w-full">
                  <div className="text-xs font-bold text-emerald-600 mb-1 text-center">STEP {process.step}</div>
                  <h3 className="font-bold text-slate-800 mb-2 text-center">{process.title}</h3>
                  <p className="text-sm text-slate-600 text-center">{process.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-6">
            {certificationProcess.map((process, index) => (
              <div key={index} className="relative">
                {index < certificationProcess.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-teal-300" 
                       style={{ height: 'calc(100% + 1.5rem)' }}></div>
                )}
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    <process.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-xs font-bold text-emerald-600 mb-1">STEP {process.step}</div>
                    <h3 className="font-bold text-slate-800 mb-2">{process.title}</h3>
                    <p className="text-sm text-slate-600">{process.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Modules */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            Comprehensive Training Modules
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div
                key={module.id}
                onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
                className="cursor-pointer group"
              >
                <div className={`bg-gradient-to-br ${module.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-start justify-between mb-4">
                    <module.icon className="w-10 h-10" />
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                      {module.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{module.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{module.topics.length} key topics</p>
                  
                  {selectedModule === module.id && (
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-xs font-semibold mb-2 text-white/90">Topics Covered:</p>
                      <ul className="space-y-1">
                        {module.topics.map((topic, idx) => (
                          <li key={idx} className="text-sm text-white/90 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-4 text-xs text-white/70">
                    Click to {selectedModule === module.id ? 'collapse' : 'expand'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Star className="w-6 h-6 text-emerald-600" />
            </div>
            Program Benefits & Business Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all">
                <benefit.icon className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-6">Key Program Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg h-fit">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Official Keeta Accreditation</h3>
                <p className="text-emerald-100">Industry-recognized certification that validates expertise in fleet management and establishes professional credibility.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg h-fit">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Flexible Online Learning</h3>
                <p className="text-emerald-100">Self-paced online coursework with 24/7 access to materials, accommodating supervisors' busy schedules.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg h-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">In-Person Examination</h3>
                <p className="text-emerald-100">Proctored exam at Keeta headquarters ensures certification integrity and validates true competency.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg h-fit">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Direct Performance Metrics</h3>
                <p className="text-emerald-100">New KPIs measure supervisor performance directly, enabling data-driven partnership management.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Transform Partnership Management?</h2>
          <p className="text-slate-600 text-lg mb-6 max-w-2xl mx-auto">
            This certification program will eliminate repetitive PMM work, enable scalable growth, and establish Keeta as an industry leader in partner development. Even if the pilot doesn't meet all expectations, we'll have world-class training materials for our internal team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Approve Phase 1 Launch
            </button>
            <button className="bg-slate-200 text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-all">
              Schedule Deep Dive Discussion
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Keeta Supervisor Certification Program • Reducing PMM Dependency & Building Scalable Partnerships</p>
        </div>
      </div>
    </div>
  );
}
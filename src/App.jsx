import React from 'react';
import { Award, BookOpen, Users, TrendingUp, CheckCircle, Clock, MapPin, FileText, Truck, DollarSign, AlertCircle, MessageSquare, Star, RefreshCw, Target, Zap, Shield, HeadphonesIcon, Rocket, Lightbulb, BarChart3 } from 'lucide-react';

export default function KeetaCertificationDashboard() {
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
    { title: "Eliminate Repetitive PMM Work", description: "Free PMMs from answering the same questions and handling identical issues repeatedly", icon: Zap, metric: "60-80% reduction in PMM time on repetitive tasks" },
    { title: "Scalable Partnership Model", description: "Onboard and manage more partners without increasing PMM headcount", icon: TrendingUp, metric: "2-3x partner capacity without new hires" },
    { title: "Reduced Operational Errors", description: "Certified supervisors make fewer mistakes, requiring less intervention", icon: CheckCircle, metric: "40-50% decrease in support tickets" },
    { title: "Direct Performance Measurement", description: "Measure supervisor performance directly with new KPIs rather than through PMM filters", icon: Target, metric: "Real-time visibility into partner quality" },
    { title: "Career Development Path", description: "Provide clear professional growth opportunities in the logistics industry", icon: Star, metric: "Increased partner loyalty and retention" },
    { title: "Risk-Free Investment", description: "Even if pilot fails, we gain comprehensive PMM training materials", icon: Shield, metric: "Guaranteed ROI through internal training" }
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
      icon: BarChart3,
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
    { label: "Training Modules", value: "6", icon: BookOpen, sublabel: "Comprehensive topics" },
    { label: "Total Training", value: "17+hrs", icon: Clock, sublabel: "Self-paced online" },
    { label: "Recertification", value: "3-6 Mo", icon: RefreshCw, sublabel: "Keep knowledge current" },
    { label: "Support", value: "24/7", icon: HeadphonesIcon, sublabel: "Dedicated channel" }
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
              <p className="text-emerald-100 text-xl">Eliminating PMM Dependency Through Professional Excellence</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Executive Summary - THE PITCH */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl shadow-xl p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-amber-500 p-3 rounded-xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Executive Summary: The Bottom Line</h2>
              <p className="text-slate-600 text-sm">What you need to know in 30 seconds</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
              <div className="text-red-600 font-bold text-sm mb-2">THE PROBLEM</div>
              <p className="text-slate-700 text-sm">PMMs spend 60-80% of their time on repetitive tasks: answering identical questions, onboarding partners, and resolving the same issues. This model doesn't scale.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-emerald-500">
              <div className="text-emerald-600 font-bold text-sm mb-2">THE SOLUTION</div>
              <p className="text-slate-700 text-sm">Create certified 3PL supervisors who possess all necessary knowledge upfront, eliminating repetitive PMM work and enabling autonomous partner operations.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <div className="text-blue-600 font-bold text-sm mb-2">THE OUTCOME</div>
              <p className="text-slate-700 text-sm">2-3x partner capacity without new PMM hires. Even if pilot fails, we gain comprehensive internal training materials. Zero-risk, high-reward initiative.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5">
            <div className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              Implementation Approach: Low-Risk Validation
            </div>
            <div className="grid md:grid-cols-4 gap-3 text-sm">
              <div>
                <span className="font-semibold text-slate-700">Month 1-2:</span>
                <span className="text-slate-600"> PMMs get certified (internal validation)</span>
              </div>
              <div>
                <span className="font-semibold text-slate-700">Month 3-5:</span>
                <span className="text-slate-600"> Pilot with 5-10 supervisors in one city</span>
              </div>
              <div>
                <span className="font-semibold text-slate-700">Month 6:</span>
                <span className="text-slate-600"> Analyze results and calculate ROI</span>
              </div>
              <div>
                <span className="font-semibold text-slate-700">Month 7+:</span>
                <span className="text-slate-600"> Scale nationwide or pivot based on data</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-10 h-10 text-emerald-500 opacity-80" />
              </div>
              <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Strategic Vision - The Why */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            Strategic Vision: Breaking Free from the PMM Bottleneck
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-slate-200">
              Every day, our PMMs answer the same questions: "How do I register a rider?" "Why was my invoice delayed?" "What are the shift requirements?" This <strong className="text-emerald-400">repetitive work consumes 60-80% of PMM capacity</strong>, preventing them from strategic initiatives and limiting our ability to scale partnerships. The certification program solves this by frontloading knowledge to 3PL supervisors, <strong className="text-white">eliminating the need for constant PMM hand-holding</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-900/30 backdrop-blur-sm rounded-lg p-5 border border-red-500/30">
                <div className="text-red-400 font-bold text-sm mb-2">❌ TODAY'S REALITY</div>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• PMMs answer identical questions daily</li>
                  <li>• Every new partner requires full handholding</li>
                  <li>• Same issues repeat across all partners</li>
                  <li>• Cannot scale without hiring more PMMs</li>
                  <li>• 60-80% of PMM time is reactive</li>
                </ul>
              </div>
              <div className="bg-orange-900/30 backdrop-blur-sm rounded-lg p-5 border border-orange-500/30">
                <div className="text-orange-400 font-bold text-sm mb-2">🔄 TRANSITION (6 MONTHS)</div>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• PMMs get certified first (validation)</li>
                  <li>• Launch pilot with 5-10 supervisors</li>
                  <li>• Measure time savings & quality</li>
                  <li>• Refine based on real feedback</li>
                  <li>• Decision point: scale or iterate</li>
                </ul>
              </div>
              <div className="bg-emerald-500/30 backdrop-blur-sm rounded-lg p-5 border-2 border-emerald-400">
                <div className="text-emerald-300 font-bold text-sm mb-2">✓ FUTURE STATE</div>
                <ul className="text-sm text-white space-y-2">
                  <li>• Supervisors onboard independently</li>
                  <li>• 24/7 support channel handles queries</li>
                  <li>• PMMs focus on strategic partnerships</li>
                  <li>• 2-3x partner capacity, same team</li>
                  <li>• Direct performance measurement</li>
                </ul>
              </div>
            </div>
            <div className="bg-emerald-500/20 rounded-lg p-5 border border-emerald-500/50">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-emerald-300 mb-2">Zero-Risk Proposition</h3>
                  <p className="text-sm text-slate-300">
                    This initiative has <strong className="text-white">guaranteed value regardless of outcome</strong>. If the pilot succeeds, we transform our partnership model. If it doesn't meet expectations, we still gain a comprehensive, structured training program for our PMMs—improving internal capabilities and standardizing knowledge across the team. There is no scenario where this investment is wasted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What It Is - Certification Journey */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            What Is The Certification Program?
          </h2>
          <p className="text-slate-600 mb-6 ml-14">A comprehensive, accredited training program that equips 3PL supervisors with all knowledge needed to independently manage their operations</p>
          
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
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all w-full flex flex-col min-h-[140px]">
                  <div className="text-xs font-bold text-emerald-600 mb-1 text-center">STEP {process.step}</div>
                  <h3 className="font-bold text-slate-800 mb-2 text-center">{process.title}</h3>
                  <p className="text-sm text-slate-600 text-center flex-grow">{process.description}</p>
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

        {/* Training Modules - What They Learn */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            Comprehensive Training Curriculum
          </h2>
          <p className="text-slate-600 mb-6 ml-14">17+ hours of structured training covering every aspect of fleet management for Keeta partners</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div key={module.id}>
                <div className={`bg-gradient-to-br ${module.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-start justify-between mb-4">
                    <module.icon className="w-10 h-10" />
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                      {module.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{module.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{module.topics.length} key topics</p>
                  
                  <div className="pt-4 border-t border-white/20">
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Rocket className="w-6 h-6 text-emerald-600" />
            </div>
            4-Phase Implementation Roadmap
          </h2>
          <p className="text-slate-600 mb-6 ml-14">Measured, data-driven rollout with clear validation checkpoints</p>
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
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all">
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
          <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <AlertCircle className="w-6 h-6 text-emerald-600" />
            </div>
            Anticipated Challenges & Mitigation Strategies
          </h2>
          <p className="text-slate-600 mb-6 ml-14">We've identified key risks and developed concrete solutions for each</p>
          <div className="space-y-6">
            {challenges.map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-white shadow-lg`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
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
                    Mitigation Strategies:
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
                <h2 className="text-2xl font-bold mb-2">Recertification System</h2>
                <p className="text-blue-100">Keeping knowledge current as Keeta evolves</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Adaptive Frequency: Every 3-6 Months
                </h3>
                <p className="text-sm text-blue-100">
                  Recertification interval depends on the extent of changes. Minor updates require shorter 3-month cycles, while major overhauls extend to 6 months. This keeps supervisors current without overwhelming them.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Focused Assessment
                </h3>
                <p className="text-sm text-blue-100">
                  Recertification exams focus only on new content and major updates, not the entire curriculum. This respects supervisors' time while ensuring they stay current with critical changes.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Enforcement
                </h3>
                <p className="text-sm text-blue-100">
                  Supervisors who fail to recertify within the 30-day grace period will have their certification suspended until they pass the updated exam. No exceptions to maintain program integrity.
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
                <h2 className="text-2xl font-bold mb-2">24/7 Support Channel</h2>
                <p className="text-purple-100">Exclusive support for certified supervisors</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Dedicated Chat Channel
                </h3>
                <p className="text-sm text-purple-100">
                  Certified supervisors gain access to a dedicated 24/7 support channel for questions, issues, and guidance—bypassing traditional PMM channels entirely.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Community Knowledge Base
                </h3>
                <p className="text-sm text-purple-100">
                  Supervisors can search past discussions, share best practices, and learn from each other's experiences—building a self-sustaining community that reduces support load over time.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Rapid Response SLA
                </h3>
                <p className="text-sm text-purple-100">
                  Dedicated support team trained to handle complex queries quickly, with average response time under 2 hours for urgent issues. Critical problems escalated within 30 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expected Impact & Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Star className="w-6 h-6 text-emerald-600" />
            </div>
            Expected Impact & Business Benefits
          </h2>
          <p className="text-slate-600 mb-6 ml-14">Quantifiable improvements across operations, efficiency, and scalability</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all">
                <benefit.icon className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{benefit.description}</p>
                <div className="bg-emerald-50 rounded px-3 py-2 border border-emerald-200">
                  <div className="text-xs font-semibold text-emerald-700 mb-1">Target Metric:</div>
                  <div className="text-xs text-emerald-800">{benefit.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Enhancements & Expansion Opportunities */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 mb-8 border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Future Enhancement Roadmap</h2>
          </div>
          <p className="text-slate-600 mb-6 ml-14">Strategic initiatives to maximize program impact once core certification is validated (Phase 4+)</p>
          
          <div className="space-y-6">
            {/* Gamification & Recognition */}
            <div className="bg-white rounded-xl p-6 border border-indigo-100 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-lg">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Gamification & Recognition System</h3>
                  <p className="text-sm text-slate-600 mb-4">Drive engagement and healthy competition through recognition and achievement systems</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">📊 Leaderboard System</div>
                      <p className="text-xs text-slate-600">Rank certified supervisors by their performance metrics</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🏅 Achievement Badges</div>
                      <p className="text-xs text-slate-600">Award digital badges for milestones: "Zero Violations - 3 Months," "Top Performer," "Quick Learner"</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🎖️ Certification Levels</div>
                      <p className="text-xs text-slate-600">Bronze → Silver → Gold → Platinum based on tenure and performance</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🏆 Annual Awards</div>
                      <p className="text-xs text-slate-600">"Supervisor of the Year" with prize money or benefits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Incentives */}
            <div className="bg-white rounded-xl p-6 border border-indigo-100 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-lg">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Financial Incentive Structure</h3>
                  <p className="text-sm text-slate-600 mb-4">Monetize certification and reward high performance to drive adoption and excellence</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">💰 Certification Fee</div>
                      <p className="text-xs text-slate-600">Charge 3PL companies 2,000 SAR per supervisor to ensure commitment and value perception</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">💵 Performance Bonuses</div>
                      <p className="text-xs text-slate-600">Certified supervisors with top-tier metrics receive quarterly bonuses from Keeta</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">📉 Contract Advantages</div>
                      <p className="text-xs text-slate-600">Certified partners get preferential pricing (e.g., 5% better rates on delivery fees)</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">⚡ Fast-track Benefits</div>
                      <p className="text-xs text-slate-600">Priority access to new features, cities, or opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data & Technology */}
            <div className="bg-white rounded-xl p-6 border border-indigo-100 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Data Analytics & AI Support</h3>
                  <p className="text-sm text-slate-600 mb-4">Empower supervisors with insights and automated support systems</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">📊 Supervisor Dashboard</div>
                      <p className="text-xs text-slate-600 mb-2">Real-time dashboard showing:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Rider performance metrics</li>
                        <li>• Comparative analytics vs. peers</li>
                        <li>• Predictive alerts for issues</li>
                        <li>• Financial performance tracking</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🤖 AI-Powered Chatbot</div>
                      <p className="text-xs text-slate-600 mb-2">24/7 intelligent support:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Trained on all certification materials</li>
                        <li>• Handles 70-80% of routine questions</li>
                        <li>• Escalates complex issues to humans</li>
                        <li>• Available in Arabic and English</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning & Development */}
            <div className="bg-white rounded-xl p-6 border border-indigo-100 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-lg">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Continuous Learning & Development</h3>
                  <p className="text-sm text-slate-600 mb-4">Expand beyond initial certification with ongoing education and mentorship</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🎓 Learning Platform</div>
                      <p className="text-xs text-slate-600 mb-2">Ongoing education resources:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Monthly webinars on new features</li>
                        <li>• 5-10 min micro-learning modules</li>
                        <li>• Real case studies from top performers</li>
                        <li>• Exam preparation tools & practice tests</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">👥 Mentor Program</div>
                      <p className="text-xs text-slate-600 mb-2">Peer-to-peer knowledge sharing:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Senior supervisors mentor newcomers</li>
                        <li>• Additional compensation for mentors</li>
                        <li>• Knowledge-sharing ecosystem</li>
                        <li>• Reduces support channel load</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership & Quality */}
            <div className="bg-white rounded-xl p-6 border border-indigo-100 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-red-500 to-orange-600 p-3 rounded-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Partnership Tiers & Quality Assurance</h3>
                  <p className="text-sm text-slate-600 mb-4">Create incentive structures and maintain certification integrity</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🎯 Tiered Partnership Model</div>
                      <p className="text-xs text-slate-600 mb-2">Certification-based tiers:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Platinum (100% certified): Best terms</li>
                        <li>• Gold (80%+ certified): Standard terms</li>
                        <li>• Silver (50-79%): Basic terms</li>
                        <li>• Bronze (&lt;50%): Higher fees</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🔍 Quality Assurance Program</div>
                      <p className="text-xs text-slate-600 mb-2">Maintain standards:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Mystery shopper testing</li>
                        <li>• Ensures knowledge application</li>
                        <li>• Revoke cert for repeated failures</li>
                        <li>• Creates accountability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community & Growth */}
            <div className="bg-white rounded-xl p-6 border border-indigo-100 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-3 rounded-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Community Building & Organic Growth</h3>
                  <p className="text-sm text-slate-600 mb-4">Foster ecosystem and incentivize network expansion</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🎉 Annual Summit</div>
                      <p className="text-xs text-slate-600 mb-2">In-person gathering for certified supervisors:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Networking opportunities</li>
                        <li>• Recognition ceremony</li>
                        <li>• Advanced training sessions</li>
                        <li>• Builds community & brand loyalty</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🎁 Referral Program</div>
                      <p className="text-xs text-slate-600 mb-2">Incentivize organic growth:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Rewards for referring new 3PLs</li>
                        <li>• Cash bonuses or contract advantages</li>
                        <li>• Organic certified network expansion</li>
                        <li>• Peer validation of program value</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-indigo-100 rounded-lg p-5 border border-indigo-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-indigo-900 mb-2">Implementation Sequencing</h4>
                <p className="text-sm text-indigo-800">
                  These enhancements should be implemented gradually after the core certification program proves successful through Phases 1-3. 
                  Prioritize high-impact, low-complexity items first (exam prep tools, basic analytics), then progressively add sophisticated features 
                  (AI chatbot, mentor program, annual summit) as the certified supervisor base grows to 50+ supervisors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white rounded-lg shadow px-6 py-3">
            <p className="text-sm text-slate-600">
              <strong className="text-slate-800">Keeta Supervisor Certification Program</strong> • Reducing PMM Dependency & Building Scalable Partnerships
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
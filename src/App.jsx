import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Users, TrendingUp, CheckCircle, Clock, MapPin, FileText, Truck, DollarSign, AlertCircle, MessageSquare, Star, RefreshCw, Target, Zap, Shield, HeadphonesIcon, Rocket, Lightbulb, BarChart3, Languages, Video, UserCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function KeetaCertificationDashboard() {
  const { language, toggleLanguage, t } = useLanguage();
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
    { key: "modules", icon: BookOpen },
    { key: "training", icon: Clock },
    { key: "recertification", icon: RefreshCw },
    { key: "support", icon: HeadphonesIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Award className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{t.header.title}</h1>
                <p className="text-emerald-100 text-xl">{t.header.subtitle}</p>
              </div>
            </div>
            <button
              onClick={toggleLanguage}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-xl transition-all duration-200 flex items-center gap-2 group"
              title={language === 'en' ? 'Switch to Chinese' : '切换到英语'}
            >
              <Languages className="w-6 h-6" />
              <span className="text-sm font-semibold">{language === 'en' ? '中文' : 'EN'}</span>
            </button>
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
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{t.executiveSummary.title}</h2>
              <p className="text-slate-600 text-sm">{t.executiveSummary.subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
              <div className="text-indigo-600 font-bold text-sm mb-1">{t.executiveSummary.background.title}</div>
              <div className="text-indigo-500 text-xs mb-3 italic">{t.executiveSummary.background.subtitle}</div>
              <ul className="space-y-2">
                {t.executiveSummary.background.points.map((point, i) => (
                  <li key={i} className="text-slate-700 text-sm flex items-start gap-2">
                    <span className="text-indigo-500 font-bold flex-shrink-0 mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
              <div className="text-red-600 font-bold text-sm mb-1">{t.executiveSummary.problem.title}</div>
              <div className="text-red-500 text-xs mb-3 italic">{t.executiveSummary.problem.subtitle}</div>
              <ul className="space-y-2">
                {t.executiveSummary.problem.points.map((point, i) => (
                  <li key={i} className="text-slate-700 text-sm flex items-start gap-2">
                    <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-emerald-500">
              <div className="text-emerald-600 font-bold text-sm mb-1">{t.executiveSummary.solution.title}</div>
              <div className="text-emerald-500 text-xs mb-3 italic">{t.executiveSummary.solution.subtitle}</div>
              <ul className="space-y-2">
                {t.executiveSummary.solution.points.map((point, i) => (
                  <li key={i} className="text-slate-700 text-sm flex items-start gap-2">
                    <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <div className="text-blue-600 font-bold text-sm mb-1">{t.executiveSummary.result.title}</div>
              <div className="text-blue-500 text-xs mb-3 italic">{t.executiveSummary.result.subtitle}</div>
              <ul className="space-y-2">
                {t.executiveSummary.result.points.map((point, i) => (
                  <li key={i} className="text-slate-700 text-sm flex items-start gap-2">
                    <span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5">
            <div className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              {t.executiveSummary.implementationTitle}
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="font-bold text-blue-900">{t.executiveSummary.phases.month12}</span>
                </div>
                <p className="text-sm text-blue-800">{t.executiveSummary.phases.month12Text}</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="font-bold text-emerald-900">{t.executiveSummary.phases.month35}</span>
                </div>
                <p className="text-sm text-emerald-800">{t.executiveSummary.phases.month35Text}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span className="font-bold text-orange-900">{t.executiveSummary.phases.month6}</span>
                </div>
                <p className="text-sm text-orange-800">{t.executiveSummary.phases.month6Text}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                  <span className="font-bold text-purple-900">{t.executiveSummary.phases.month7plus}</span>
                </div>
                <p className="text-sm text-purple-800">{t.executiveSummary.phases.month7plusText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pilot Phase CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl shadow-2xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-3">🚀 2-Month Pilot Phase: Proof of Concept</h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Before committing to the full 3+ month program, management can evaluate quality and feasibility through
              a streamlined 2-month pilot covering 11 critical training topics in English & Arabic.
            </p>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold">11</div>
                <div className="text-xs text-blue-100">Topics</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold">22</div>
                <div className="text-xs text-blue-100">Videos</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold">2</div>
                <div className="text-xs text-blue-100">Languages</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold">2</div>
                <div className="text-xs text-blue-100">Months</div>
              </div>
            </div>
            <Link
              to="/pilot-phase"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 group"
            >
              <span>View Complete Pilot Phase Plan</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-blue-100 mt-4 italic">
              ✓ Minimal risk • ✓ Quality validation • ✓ Feasibility proof • ✓ Management evaluation
            </p>
          </div>
        </div>

        {/* Why Me Section */}
        <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 border-2 border-purple-300 rounded-xl shadow-xl p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-xl shadow-lg">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{t.whyMe.title}</h2>
              <p className="text-slate-600 text-sm">{t.whyMe.subtitle}</p>
            </div>
          </div>

          {/* Project Scope & Complexity */}
          <div className="bg-gradient-to-r from-rose-100 to-orange-100 rounded-xl p-6 mb-6 border-2 border-rose-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-rose-600 p-2 rounded-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{t.whyMe.scopeTitle}</h3>
                <p className="text-sm text-slate-600 italic">{t.whyMe.scopeSubtitle}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {t.whyMe.scopePoints.map((point, i) => (
                <li key={i} className="text-slate-700 text-sm flex items-start gap-2">
                  <span className="text-rose-600 font-bold flex-shrink-0 mt-0.5">•</span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications Grid */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-2 rounded-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">{t.whyMe.qualificationsTitle}</h3>
                <p className="text-sm text-slate-600 italic">{t.whyMe.qualificationsSubtitle}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {t.whyMe.qualifications.map((qual, index) => {
                const IconComponent = qual.icon === 'Truck' ? Truck :
                                     qual.icon === 'Video' ? Video :
                                     qual.icon === 'BookOpen' ? BookOpen :
                                     qual.icon === 'BarChart3' ? BarChart3 :
                                     qual.icon === 'Users' ? Users :
                                     qual.icon === 'MapPin' ? MapPin : Users;

                const colors = [
                  'from-blue-500 to-cyan-600',
                  'from-purple-500 to-pink-600',
                  'from-emerald-500 to-teal-600',
                  'from-orange-500 to-red-600',
                  'from-indigo-500 to-purple-600',
                  'from-green-500 to-emerald-600'
                ];

                return (
                  <div key={index} className="bg-white rounded-lg p-5 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`bg-gradient-to-br ${colors[index]} p-2 rounded-lg`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-800">{qual.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {qual.points.map((point, idx) => (
                        <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dedication Requirement */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-6 border-2 border-amber-400">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-amber-600 p-2 rounded-lg">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{t.whyMe.dedicationTitle}</h3>
                <p className="text-sm text-slate-600 italic mb-3">{t.whyMe.dedicationSubtitle}</p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {t.whyMe.dedicationText}
                </p>
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
              <p className="text-slate-600 text-sm font-medium">{t.stats[stat.key].label}</p>
              <p className="text-3xl font-bold text-slate-800 mt-1">{t.stats[stat.key].value}</p>
              <p className="text-xs text-slate-500 mt-1">{t.stats[stat.key].sublabel}</p>
            </div>
          ))}
        </div>

        {/* Strategic Vision - The Why */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            {t.strategicVision.title}
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-slate-200">
              {t.strategicVision.mainText}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-900/30 backdrop-blur-sm rounded-lg p-5 border border-red-500/30">
                <div className="text-red-400 font-bold text-sm mb-2">❌ {t.strategicVision.todayReality}</div>
                <ul className="text-sm text-slate-300 space-y-2">
                  {t.strategicVision.todayPoints.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-900/30 backdrop-blur-sm rounded-lg p-5 border border-orange-500/30">
                <div className="text-orange-400 font-bold text-sm mb-2">🔄 {t.strategicVision.transition}</div>
                <ul className="text-sm text-slate-300 space-y-2">
                  {t.strategicVision.transitionPoints.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-500/30 backdrop-blur-sm rounded-lg p-5 border-2 border-emerald-400">
                <div className="text-emerald-300 font-bold text-sm mb-2">✓ {t.strategicVision.futureState}</div>
                <ul className="text-sm text-white space-y-2">
                  {t.strategicVision.futurePoints.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-emerald-500/20 rounded-lg p-5 border border-emerald-500/50">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-emerald-300 mb-2">{t.strategicVision.zeroRiskTitle}</h3>
                  <p className="text-sm text-slate-300">
                    {t.strategicVision.zeroRiskText}
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
            {t.certification.title}
          </h2>
          <p className="text-slate-600 mb-6 ml-14">{t.certification.subtitle}</p>

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
                  <div className="text-xs font-bold text-emerald-600 mb-1 text-center">{t.certification.steps[index].label} {process.step}</div>
                  <h3 className="font-bold text-slate-800 mb-2 text-center">{t.certification.steps[index].title}</h3>
                  <p className="text-sm text-slate-600 text-center flex-grow">{t.certification.steps[index].description}</p>
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
                    <div className="text-xs font-bold text-emerald-600 mb-1">{t.certification.steps[index].label} {process.step}</div>
                    <h3 className="font-bold text-slate-800 mb-2">{t.certification.steps[index].title}</h3>
                    <p className="text-sm text-slate-600">{t.certification.steps[index].description}</p>
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
            {t.modules.title}
          </h2>
          <p className="text-slate-600 mb-6 ml-14">{t.modules.subtitle}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div key={module.id}>
                <div className={`bg-gradient-to-br ${module.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-start justify-between mb-4">
                    <module.icon className="w-10 h-10" />
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                      {t.modules.list[index].duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{t.modules.list[index].title}</h3>
                  <p className="text-white/80 text-sm mb-4">{t.modules.list[index].topics.length} key topics</p>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-xs font-semibold mb-2 text-white/90">{t.modules.topicsCovered}</p>
                    <ul className="space-y-1">
                      {t.modules.list[index].topics.map((topic, idx) => (
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
            {t.implementation.title}
          </h2>
          <p className="text-slate-600 mb-6 ml-14">{t.implementation.subtitle}</p>
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
                          <div className="text-xs font-bold text-emerald-600 mb-1">{t.implementation.phases[index].phase}</div>
                          <h3 className="text-xl font-bold text-slate-800">{t.implementation.phases[index].title}</h3>
                        </div>
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {t.implementation.phases[index].duration}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-4">{t.implementation.phases[index].description}</p>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-slate-700">{t.implementation.keyObjectives}</div>
                        {t.implementation.phases[index].objectives.map((obj, idx) => (
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
            {t.challenges.title}
          </h2>
          <p className="text-slate-600 mb-6 ml-14">{t.challenges.subtitle}</p>
          <div className="space-y-6">
            {challenges.map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-white shadow-lg`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{language === 'en' ? 'Challenge: ' : '挑战：'}{t.challenges.list[index].challenge}</h3>
                    <p className="text-white/90 text-sm">{t.challenges.list[index].description}</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                  <div className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    {t.challenges.mitigationStrategies}
                  </div>
                  <ul className="space-y-2">
                    {t.challenges.list[index].solutions.map((solution, idx) => (
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
                <h2 className="text-2xl font-bold mb-2">{t.recertification.title}</h2>
                <p className="text-blue-100">{t.recertification.subtitle}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {t.recertification.adaptiveFrequency}
                </h3>
                <p className="text-sm text-blue-100">
                  {t.recertification.adaptiveText}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  {t.recertification.focusedAssessment}
                </h3>
                <p className="text-sm text-blue-100">
                  {t.recertification.focusedText}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {t.recertification.enforcement}
                </h3>
                <p className="text-sm text-blue-100">
                  {t.recertification.enforcementText}
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
                <h2 className="text-2xl font-bold mb-2">{t.support.title}</h2>
                <p className="text-purple-100">{t.support.subtitle}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  {t.support.dedicatedChat}
                </h3>
                <p className="text-sm text-purple-100">
                  {t.support.dedicatedText}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {t.support.community}
                </h3>
                <p className="text-sm text-purple-100">
                  {t.support.communityText}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  {t.support.rapidResponse}
                </h3>
                <p className="text-sm text-purple-100">
                  {t.support.rapidText}
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
            {t.benefits.title}
          </h2>
          <p className="text-slate-600 mb-6 ml-14">{t.benefits.subtitle}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all">
                <benefit.icon className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-2">{t.benefits.list[index].title}</h3>
                <p className="text-sm text-slate-600 mb-3">{t.benefits.list[index].description}</p>
                <div className="bg-emerald-50 rounded px-3 py-2 border border-emerald-200">
                  <div className="text-xs font-semibold text-emerald-700 mb-1">{t.benefits.targetMetric}</div>
                  <div className="text-xs text-emerald-800">{t.benefits.list[index].metric}</div>
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
            <h2 className="text-2xl font-bold text-slate-800">{t.futureEnhancements.title}</h2>
          </div>
          <p className="text-slate-600 mb-6 ml-14">{t.futureEnhancements.subtitle}</p>
          
          <div className="space-y-6">
            {/* Gamification & Recognition */}
            <div className="bg-white rounded-xl p-6 border border-indigo-100 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-lg">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t.futureEnhancements.gamification.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{t.futureEnhancements.gamification.subtitle}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">📊 {t.futureEnhancements.gamification.leaderboard}</div>
                      <p className="text-xs text-slate-600">{t.futureEnhancements.gamification.leaderboardText}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🏅 {t.futureEnhancements.gamification.badges}</div>
                      <p className="text-xs text-slate-600">{t.futureEnhancements.gamification.badgesText}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🎖️ {t.futureEnhancements.gamification.levels}</div>
                      <p className="text-xs text-slate-600">{t.futureEnhancements.gamification.levelsText}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🏆 {t.futureEnhancements.gamification.awards}</div>
                      <p className="text-xs text-slate-600">{t.futureEnhancements.gamification.awardsText}</p>
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
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t.futureEnhancements.financial.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{t.futureEnhancements.financial.subtitle}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">💰 {t.futureEnhancements.financial.fee}</div>
                      <p className="text-xs text-slate-600">{t.futureEnhancements.financial.feeText}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">💵 {t.futureEnhancements.financial.bonuses}</div>
                      <p className="text-xs text-slate-600">{t.futureEnhancements.financial.bonusesText}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">📉 {t.futureEnhancements.financial.contract}</div>
                      <p className="text-xs text-slate-600">{t.futureEnhancements.financial.contractText}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">⚡ {t.futureEnhancements.financial.fastTrack}</div>
                      <p className="text-xs text-slate-600">{t.futureEnhancements.financial.fastTrackText}</p>
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
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t.futureEnhancements.analytics.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{t.futureEnhancements.analytics.subtitle}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">📊 {t.futureEnhancements.analytics.dashboard}</div>
                      <p className="text-xs text-slate-600 mb-2">{t.futureEnhancements.analytics.dashboardText}</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {t.futureEnhancements.analytics.dashboardPoints.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🤖 {t.futureEnhancements.analytics.ai}</div>
                      <p className="text-xs text-slate-600 mb-2">{t.futureEnhancements.analytics.aiText}</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {t.futureEnhancements.analytics.aiPoints.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
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
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t.futureEnhancements.learning.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{t.futureEnhancements.learning.subtitle}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🎓 {t.futureEnhancements.learning.platform}</div>
                      <p className="text-xs text-slate-600 mb-2">{t.futureEnhancements.learning.platformText}</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {t.futureEnhancements.learning.platformPoints.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">👥 {t.futureEnhancements.learning.mentor}</div>
                      <p className="text-xs text-slate-600 mb-2">{t.futureEnhancements.learning.mentorText}</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {t.futureEnhancements.learning.mentorPoints.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
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
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t.futureEnhancements.partnership.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{t.futureEnhancements.partnership.subtitle}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🎯 {t.futureEnhancements.partnership.tiered}</div>
                      <p className="text-xs text-slate-600 mb-2">{t.futureEnhancements.partnership.tieredText}</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {t.futureEnhancements.partnership.tieredPoints.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🔍 {t.futureEnhancements.partnership.quality}</div>
                      <p className="text-xs text-slate-600 mb-2">{t.futureEnhancements.partnership.qualityText}</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {t.futureEnhancements.partnership.qualityPoints.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
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
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t.futureEnhancements.community.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{t.futureEnhancements.community.subtitle}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🎉 {t.futureEnhancements.community.summit}</div>
                      <p className="text-xs text-slate-600 mb-2">{t.futureEnhancements.community.summitText}</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {t.futureEnhancements.community.summitPoints.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="font-semibold text-slate-800 mb-2 text-sm">🎁 {t.futureEnhancements.community.referral}</div>
                      <p className="text-xs text-slate-600 mb-2">{t.futureEnhancements.community.referralText}</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {t.futureEnhancements.community.referralPoints.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
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
                <h4 className="font-bold text-indigo-900 mb-2">{t.futureEnhancements.implementationSequencing}</h4>
                <p className="text-sm text-indigo-800">
                  {t.futureEnhancements.implementationText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white rounded-lg shadow px-6 py-3">
            <p className="text-sm text-slate-600">
              <strong className="text-slate-800">{t.footer.title}</strong> • {t.footer.subtitle}
            </p>
          </div>
        </div>

        {/* Credits */}
        <div className="mt-6 text-center pb-8">
          <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg shadow-sm px-6 py-4 border border-emerald-200">
            <p className="text-xs text-slate-500 mb-1">Developed by</p>
            <p className="text-sm font-semibold text-slate-800">
              Khalid Ahmad Alhajj
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Daxiang ID: <span className="font-mono text-emerald-700">khalidahmad02</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Video, FileText, Clock, TrendingUp, CheckCircle, Calendar, Target, AlertCircle, Zap, BarChart3, Users, BookOpen, Languages } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function PilotPhase() {
  const { language, t } = useLanguage();

  const deliverables = [
    {
      id: 1,
      module: "Dashboard Operations & Navigation",
      icon: BarChart3,
      topics: [
        {
          title: "Dashboard Walkthrough",
          duration: "15 min",
          description: "Complete dashboard interface overview, navigation, and customization",
          color: "from-blue-500 to-cyan-600"
        }
      ]
    },
    {
      id: 2,
      module: "Data Analysis & Reporting",
      icon: TrendingUp,
      topics: [
        {
          title: "How to Read VDA Files",
          duration: "12 min",
          description: "Extract actionable insights from VDA files and understand key metrics",
          color: "from-purple-500 to-pink-600"
        },
        {
          title: "How to Analyze Data",
          duration: "18 min",
          description: "Master KPIs, performance trends, and data-driven decision making",
          color: "from-indigo-500 to-purple-600"
        }
      ]
    },
    {
      id: 3,
      module: "Operational Excellence",
      icon: Target,
      topics: [
        {
          title: "How to Schedule Shifts",
          duration: "16 min",
          description: "Optimize capacity, balance demand, and manage shift assignments",
          color: "from-emerald-500 to-teal-600"
        },
        {
          title: "Investigating Daily Cancellations & Reporting",
          duration: "14 min",
          description: "Root cause analysis, documentation, and prevention strategies",
          color: "from-orange-500 to-red-600"
        },
        {
          title: "Daily Tasks Checklist",
          duration: "10 min",
          description: "Morning routines, monitoring checkpoints, and end-of-day reconciliation",
          color: "from-green-500 to-emerald-600"
        }
      ]
    },
    {
      id: 4,
      module: "Performance Metrics & KPIs",
      icon: Award,
      topics: [
        {
          title: "Understanding All Keeta Metrics",
          duration: "20 min",
          description: "Comprehensive breakdown of VDA, ATA, D-Responsibility, On-Time, and all other metrics",
          color: "from-rose-500 to-pink-600"
        }
      ]
    },
    {
      id: 5,
      module: "Compliance & Best Practices",
      icon: CheckCircle,
      topics: [
        {
          title: "How to Achieve 100% Compliance",
          duration: "14 min",
          description: "Mandatory requirements, audit preparation, and compliance culture",
          color: "from-amber-500 to-orange-600"
        },
        {
          title: "Operational Best Practices",
          duration: "12 min",
          description: "Proven strategies from top-performing Grade A partners",
          color: "from-teal-500 to-cyan-600"
        }
      ]
    },
    {
      id: 6,
      module: "Communication & Rider Management",
      icon: Users,
      topics: [
        {
          title: "Effective Communication",
          duration: "10 min",
          description: "Professional communication protocols with PMMs and Keeta stakeholders",
          color: "from-violet-500 to-purple-600"
        },
        {
          title: "How to Register a Rider",
          duration: "15 min",
          description: "Complete step-by-step rider registration and onboarding process",
          color: "from-blue-500 to-indigo-600"
        }
      ]
    }
  ];

  const timeline = [
    {
      month: "Month 1",
      title: "Content Creation & Production",
      weeks: [
        { week: 1, activity: "Research, script writing, content structuring", deliverable: "Finalized scripts for all 11 topics" },
        { week: 2, activity: "Video production (English) - Topics 1-6", deliverable: "6 English video tutorials" },
        { week: 3, activity: "Video production (English) - Topics 7-11", deliverable: "5 English video tutorials" },
        { week: 4, activity: "Video production (Arabic) - All topics", deliverable: "11 Arabic video tutorials" }
      ],
      color: "bg-blue-500"
    },
    {
      month: "Month 2",
      title: "Post-Production & Delivery",
      weeks: [
        { week: 1, activity: "Video editing, graphics, subtitles, quality check", deliverable: "Polished video library (English & Arabic)" },
        { week: 2, activity: "Presentation deck creation for all topics", deliverable: "11 comprehensive presentation decks" },
        { week: 3, activity: "Reference materials, checklists, templates", deliverable: "Complete support materials package" },
        { week: 4, activity: "Final review, testing, and handover", deliverable: "Complete pilot training package" }
      ],
      color: "bg-emerald-500"
    }
  ];

  const qualityStandards = [
    {
      category: "Video Production",
      standards: [
        "Minimum 1080p (Full HD) resolution",
        "Professional microphone with clear narration",
        "Professional editing with transitions and annotations",
        "Consistent Keeta branding throughout",
        "Subtitles in both English and Arabic"
      ],
      icon: Video,
      color: "from-red-500 to-rose-600"
    },
    {
      category: "Presentation Quality",
      standards: [
        "Professional branded slide templates",
        "Clear hierarchy with visual aids",
        "Uniform formatting across all decks",
        "Multiple export formats (PPT, PDF, Google Slides)",
        "Optimized for screen viewing and printing"
      ],
      icon: FileText,
      color: "from-blue-500 to-indigo-600"
    }
  ];

  const successMetrics = [
    { metric: "Production quality rating (1-10 scale)", icon: Award, color: "text-blue-600" },
    { metric: "Content accuracy and relevance", icon: Target, color: "text-emerald-600" },
    { metric: "Clarity and ease of understanding", icon: BookOpen, color: "text-purple-600" },
    { metric: "Supervisor knowledge improvement (pre/post)", icon: TrendingUp, color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold">Back to Full Proposal</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <Zap className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">2-Month Pilot Phase Plan</h1>
              <p className="text-blue-100 text-lg">Quality Assessment & Proof of Concept</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Executive Summary */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl shadow-xl p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-amber-500 p-3 rounded-xl">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Pilot Phase Overview</h2>
              <p className="text-slate-600 text-sm">Streamlined proof-of-concept to demonstrate quality before full-scale implementation</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">Objectives</h3>
              <ul className="space-y-2">
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Demonstrate production-quality training materials</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Validate content comprehensiveness and clarity</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Prove feasibility within budget and timeline</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Show measurable impact on supervisor knowledge</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">Deliverable Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Training Topics</span>
                  <span className="font-bold text-blue-600">11 Topics</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Video Tutorials</span>
                  <span className="font-bold text-emerald-600">22 Videos (EN + AR)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Total Runtime</span>
                  <span className="font-bold text-purple-600">~300 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Presentations</span>
                  <span className="font-bold text-orange-600">11 Decks (EN + AR)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Support Materials</span>
                  <span className="font-bold text-rose-600">20+ Resources</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Modules & Topics */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            Training Modules & Topics
          </h2>
          <p className="text-slate-600 mb-6 ml-14">All content delivered as video walkthroughs and presentation materials in English & Arabic</p>

          <div className="space-y-6">
            {deliverables.map((module, index) => (
              <div key={module.id} className="border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-blue-600">Module {module.id}</div>
                    <h3 className="text-lg font-bold text-slate-800">{module.module}</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {module.topics.map((topic, idx) => (
                    <div key={idx} className={`bg-gradient-to-r ${topic.color} rounded-lg p-4 text-white`}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold">{topic.title}</h4>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {topic.duration}
                        </span>
                      </div>
                      <p className="text-sm text-white/90">{topic.description}</p>
                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/20">
                        <div className="flex items-center gap-1 text-xs">
                          <Video className="w-3 h-3" />
                          <span>Video (EN + AR)</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <FileText className="w-3 h-3" />
                          <span>Presentation (EN + AR)</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <CheckCircle className="w-3 h-3" />
                          <span>Reference Materials</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Calendar className="w-6 h-6 text-emerald-600" />
            </div>
            2-Month Implementation Timeline
          </h2>
          <p className="text-slate-600 mb-6 ml-14">Week-by-week breakdown of production and delivery schedule</p>

          <div className="space-y-6">
            {timeline.map((month, index) => (
              <div key={index} className="border-2 border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`${month.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500">{month.month}</div>
                    <h3 className="text-xl font-bold text-slate-800">{month.title}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {month.weeks.map((week, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {week.week}
                        </div>
                        <span className="text-xs font-bold text-slate-600">Week {week.week}</span>
                      </div>
                      <p className="text-sm text-slate-700 mb-2">{week.activity}</p>
                      <div className="flex items-start gap-2 bg-emerald-50 rounded px-3 py-2 border border-emerald-200">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-emerald-800 font-medium">{week.deliverable}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            Quality Standards
          </h2>
          <p className="text-slate-600 mb-6 ml-14">Production and delivery standards to ensure professional output</p>

          <div className="grid md:grid-cols-2 gap-6">
            {qualityStandards.map((standard, index) => (
              <div key={index} className={`bg-gradient-to-br ${standard.color} rounded-xl p-6 text-white`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <standard.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold">{standard.category}</h3>
                </div>
                <ul className="space-y-2">
                  {standard.standards.map((item, idx) => (
                    <li key={idx} className="text-sm text-white/90 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 mb-8 border-2 border-indigo-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            Success Metrics & Evaluation
          </h2>
          <p className="text-slate-600 mb-6 ml-14">How the pilot phase will be evaluated for quality and impact</p>

          <div className="grid md:grid-cols-2 gap-4">
            {successMetrics.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-5 border border-slate-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                  <p className="text-sm font-medium text-slate-700">{item.metric}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white rounded-lg p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-600" />
              Decision Gate Criteria
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <div className="text-emerald-700 font-bold text-sm mb-2">✅ Green Light</div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Quality meets expectations</li>
                  <li>• Content is comprehensive</li>
                  <li>• Timeline was achievable</li>
                  <li>• 80%+ satisfaction rating</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <div className="text-amber-700 font-bold text-sm mb-2">⚠️ Yellow Light</div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Good but needs refinement</li>
                  <li>• Some content gaps identified</li>
                  <li>• Timeline needs adjustment</li>
                  <li>• Mixed feedback received</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="text-red-700 font-bold text-sm mb-2">🛑 Red Light</div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Quality below standards</li>
                  <li>• Critical info missing</li>
                  <li>• Timeline unrealistic</li>
                  <li>• Negative feedback majority</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-xl p-8 text-white text-center mb-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin the Pilot Phase</h2>
            <p className="text-blue-100 text-lg mb-6">
              This 2-month pilot minimizes risk while maximizing validation. Management can assess quality,
              feasibility, and impact before committing to the full certification program.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm text-blue-100">Months</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">11</div>
                <div className="text-sm text-blue-100">Topics</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">22</div>
                <div className="text-sm text-blue-100">Videos</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm text-blue-100">Languages</div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 px-6 py-3 rounded-lg shadow-md transition-all duration-200 text-slate-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Full Proposal</span>
          </Link>
        </div>

        {/* Credits */}
        <div className="mt-8 text-center pb-8">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm px-6 py-4 border border-blue-200">
            <p className="text-xs text-slate-500 mb-1">Developed by</p>
            <p className="text-sm font-semibold text-slate-800">
              Khalid Ahmad Alhajj
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Daxiang ID: <span className="font-mono text-blue-700">khalidahmad02</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

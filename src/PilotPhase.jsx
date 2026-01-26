import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle, FileText, CheckCircle } from 'lucide-react';

export default function PilotPhase() {
  const topics = [
    { id: 1, title: "Dashboard Walkthrough", duration: "15 min" },
    { id: 2, title: "How to Read VDA Files", duration: "12 min" },
    { id: 3, title: "How to Analyze Data", duration: "18 min" },
    { id: 4, title: "How to Schedule Shifts", duration: "16 min" },
    { id: 5, title: "Investigating Daily Cancellations", duration: "14 min" },
    { id: 6, title: "Daily Tasks Checklist", duration: "10 min" },
    { id: 7, title: "Understanding Keeta Metrics", duration: "20 min" },
    { id: 8, title: "How to Achieve 100% Compliance", duration: "14 min" },
    { id: 9, title: "Operational Best Practices", duration: "12 min" },
    { id: 10, title: "Effective Communication", duration: "10 min" },
    { id: 11, title: "How to Register a Rider", duration: "15 min" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Full Proposal
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">
            Pilot Phase: Quality Assessment & Proof of Concept
          </h1>
          <p className="text-blue-100 mt-2">
            Flexible approach to demonstrate capability through training content in English & Arabic
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Important Note */}
        <div className="mb-12 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6">
          <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
            <span className="text-lg">💡</span>
            Important: Modular & Flexible Approach
          </h3>
          <div className="space-y-3 text-sm text-amber-900">
            <p>
              <strong>Bite-Sized Content:</strong> Each video will be designed as a standalone module, making it easy for supervisors to navigate and allowing this content to be reused in a larger training program later.
            </p>
            <p>
              <strong>Phased Implementation:</strong> We can start with the 5 most critical topics first, evaluate their impact, and then proceed with the remaining content. This approach allows for iterative improvements based on feedback.
            </p>
            <p>
              <strong>Flexible Timeline:</strong> The scope and duration are highly adaptable based on management priorities and resource availability. This is a proposal, and all details can be adjusted as needed.
            </p>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Overview</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-5 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">~</div>
              <div className="text-sm text-slate-600 mt-1">Flexible Duration</div>
            </div>
            <div className="bg-white border-2 border-emerald-200 rounded-lg p-5 shadow-sm">
              <div className="text-3xl font-bold text-emerald-600">5-11</div>
              <div className="text-sm text-slate-600 mt-1">Training Topics</div>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-lg p-5 shadow-sm">
              <div className="text-3xl font-bold text-purple-600">10-22</div>
              <div className="text-sm text-slate-600 mt-1">Videos (EN + AR)</div>
            </div>
            <div className="bg-white border-2 border-orange-200 rounded-lg p-5 shadow-sm">
              <div className="text-3xl font-bold text-orange-600">~</div>
              <div className="text-sm text-slate-600 mt-1">Modular Content</div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Objectives</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                Validate production quality and content accuracy
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                Demonstrate feasibility within 2-month timeline
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                Measure knowledge improvement through pre/post assessment
              </li>
            </ul>
          </div>
        </div>

        {/* Training Topics */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Training Topics</h2>
          <p className="text-sm text-slate-600 mb-2">
            Each topic includes video walkthrough and presentation deck in English & Arabic
          </p>
          <p className="text-sm text-blue-600 font-medium mb-6">
            → Recommended: Start with 5 priority topics, evaluate impact, then proceed with remaining content
          </p>

          <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-200 shadow-sm">
            {topics.map((topic) => (
              <div key={topic.id} className="p-4 flex items-center justify-between hover:bg-blue-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-sm font-semibold text-white">
                    {topic.id}
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">{topic.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <PlayCircle className="w-3 h-3 text-blue-600" />
                        Video
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3 text-blue-600" />
                        Slides
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-blue-700 font-semibold">{topic.duration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Implementation Approach</h2>

          <div className="space-y-6">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded bg-blue-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Phase 1: Content Development</div>
                  <div className="text-sm text-slate-600">Research, scripting, and video production</div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                <p className="text-sm text-slate-700">
                  Develop content for selected priority topics in both English and Arabic. Each video will be a
                  self-contained module covering a specific operational area.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded bg-emerald-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Phase 2: Refinement & Delivery</div>
                  <div className="text-sm text-slate-600">Editing, documentation, and support materials</div>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded">
                <p className="text-sm text-slate-700">
                  Finalize video editing, create presentation decks, develop reference guides, and prepare all
                  supporting documentation for deployment.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded bg-purple-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Phase 3: Evaluation & Iteration</div>
                  <div className="text-sm text-slate-600">Assess impact and plan next steps</div>
                </div>
              </div>
              <div className="bg-purple-50 border border-purple-200 p-4 rounded">
                <p className="text-sm text-slate-700">
                  Review feedback, measure learning outcomes, and decide whether to proceed with additional topics
                  or refine existing content based on results.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-5">
            <p className="text-sm text-slate-600 italic">
              <strong>Note:</strong> Timeline and scope are flexible and will be determined based on management priorities,
              resource allocation, and feedback from initial deliverables.
            </p>
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Deliverables</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-purple-700 mb-4 flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Video Content
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  22 professional training videos
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  1080p resolution with clear audio
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  English & Arabic narration
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  Subtitles in both languages
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-orange-700 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Documentation
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  11 presentation decks
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  Quick reference guides
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  Checklists and templates
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  Multiple export formats
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Criteria */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Success Criteria</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="border-2 border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <div className="font-semibold text-emerald-900 mb-2">✓ Proceed</div>
              <ul className="text-xs text-emerald-800 space-y-1">
                <li>• Quality meets standards</li>
                <li>• Content is comprehensive</li>
                <li>• Timeline achievable</li>
                <li>• 80%+ satisfaction</li>
              </ul>
            </div>

            <div className="border-2 border-amber-200 bg-amber-50 rounded-lg p-5">
              <div className="font-semibold text-amber-900 mb-2">⚠ Revise</div>
              <ul className="text-xs text-amber-800 space-y-1">
                <li>• Good with refinements</li>
                <li>• Minor content gaps</li>
                <li>• Timeline adjustments</li>
                <li>• Mixed feedback</li>
              </ul>
            </div>

            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-5">
              <div className="font-semibold text-red-900 mb-2">✕ Reconsider</div>
              <ul className="text-xs text-red-800 space-y-1">
                <li>• Below standards</li>
                <li>• Major gaps found</li>
                <li>• Timeline unrealistic</li>
                <li>• Poor feedback</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-3">Flexible Pilot Approach</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            This pilot demonstrates capability and quality with an adaptable scope. We can start small, measure impact,
            and scale based on results. All aspects are open for discussion and adjustment.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 px-6 py-3 rounded-lg transition-colors font-semibold shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Full Proposal
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center pb-8">
          <div className="inline-block bg-white border border-slate-200 rounded-lg px-6 py-3 shadow-sm">
            <div className="text-sm font-medium text-slate-700">Developed by Khalid Ahmad Alhajj</div>
            <div className="text-xs text-slate-500 mt-1">Daxiang ID: <span className="font-mono text-blue-600">khalidahmad02</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

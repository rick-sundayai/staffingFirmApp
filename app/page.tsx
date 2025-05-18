import Image from "next/image";
import { BookDemoButton } from "../components/BookDemoButton";
import { AppRating } from "../components/AppRating";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-white pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary/20 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-primary/5">
              <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0" />
            </svg>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between md:gap-12 lg:gap-24">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Staffing & Recruiting Solution
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Revolutionize</span> Your Hiring Process
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Our staffing and recruiting platform connects top talent with industry-leading companies, streamlining the entire hiring process from application to onboarding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookDemoButton />
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <AppRating rating={4.8} count={1254} />
                <p className="text-sm text-gray-500">Trusted by 500+ companies worldwide</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/80 to-primary rounded-xl blur-xl opacity-20 animate-pulse"></div>
                <div className="relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Staffing App Interface"
                    width={400}
                    height={600}
                    className="mx-auto shadow-2xl rounded-xl object-cover"
                    priority
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">GDPR Compliant</p>
                      <p className="text-xs text-gray-500">Data security guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Image Left */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern <span className="text-primary">Recruiting</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform streamlines every aspect of the staffing and recruiting process
            </p>
          </div>
          
          <div className="md:flex md:items-center md:gap-12 lg:gap-24">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/60 to-primary rounded-xl blur-xl opacity-20"></div>
                <div className="relative bg-white p-2 rounded-xl shadow-xl">
                  <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-900">68% Faster Hiring</span>
                  </div>
                  <Image 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="AI-Powered Talent Matching"
                    width={400}
                    height={600}
                    className="mx-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                AI-Powered Matching
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                Find the <span className="text-primary">Perfect Fit</span> Every Time
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our proprietary algorithm analyzes thousands of data points to match candidates with positions where they&apos;ll truly excel. Say goodbye to endless resume sorting and hello to perfect-fit candidates.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-900 font-medium block">93% higher retention rate</span>
                    <span className="text-gray-600 text-sm">Keep your best talent longer</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-900 font-medium block">Reduce time-to-hire by up to 68%</span>
                    <span className="text-gray-600 text-sm">Fill positions faster with better candidates</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-900 font-medium block">AI-powered skill assessment</span>
                    <span className="text-gray-600 text-sm">Accurately evaluate candidate capabilities</span>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  Learn more about our matching algorithm
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Image Right */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:flex-row-reverse md:items-center md:gap-12 lg:gap-24">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/60 to-primary rounded-xl blur-xl opacity-20"></div>
                <div className="relative bg-white p-2 rounded-xl shadow-xl">
                  <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-900">Save 12+ hours per week</span>
                  </div>
                  <Image 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Seamless Communication Platform"
                    width={400}
                    height={600}
                    className="mx-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Unified Communication
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                <span className="text-primary">Streamlined</span> Communication Tools
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Built-in messaging, video interviews, and scheduling tools keep everyone on the same page. No more email chains or missed connections—just smooth, efficient hiring processes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Video Interviews</h3>
                  <p className="text-gray-600 text-sm">Integrated with AI insights to evaluate candidate responses</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Smart Scheduling</h3>
                  <p className="text-gray-600 text-sm">Automated calendar sync with real-time notifications</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Instant Messaging</h3>
                  <p className="text-gray-600 text-sm">Real-time chat with candidates and hiring teams</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Secure Sharing</h3>
                  <p className="text-gray-600 text-sm">GDPR-compliant document exchange platform</p>
                </div>
              </div>
              <div className="mt-8">
                <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  Explore all communication features
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Image Left */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:items-center md:gap-12 lg:gap-24">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/60 to-primary rounded-xl blur-xl opacity-20"></div>
                <div className="relative bg-white p-2 rounded-xl shadow-xl">
                  <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-900">Real-time analytics</span>
                  </div>
                  <Image 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Advanced Analytics Dashboard"
                    width={400}
                    height={600}
                    className="mx-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Data-Driven Insights
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                <span className="text-primary">Powerful</span> Analytics Dashboard
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Gain valuable insights into your hiring process with comprehensive analytics. Track metrics like time-to-fill, cost-per-hire, and candidate source effectiveness to continuously optimize your recruitment strategy.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Recruitment Performance</h3>
                    <p className="text-sm text-gray-600">Last 30 days vs. previous period</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mr-1"></div>
                      <span className="text-xs text-gray-600">Current</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
                      <span className="text-xs text-gray-600">Previous</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Time-to-hire</p>
                    <div className="flex items-end gap-2">
                      <p className="text-2xl font-bold text-gray-900">18.3</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        12%
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">days</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Cost-per-hire</p>
                    <div className="flex items-end gap-2">
                      <p className="text-2xl font-bold text-gray-900">$1,420</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        8%
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">per position</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Qualified candidates</p>
                    <div className="flex items-end gap-2">
                      <p className="text-2xl font-bold text-gray-900">68%</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        15%
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">of applicants</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Retention rate</p>
                    <div className="flex items-end gap-2">
                      <p className="text-2xl font-bold text-gray-900">94%</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        7%
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">after 1 year</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  Explore analytics features
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(255,255,255,0.05)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 text-white mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Trusted by 1,000+ companies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies that have revolutionized their recruitment strategy and found their perfect team members faster than ever before.
          </p>
          <BookDemoButton className="bg-white text-primary hover:bg-gray-100 mb-16 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white border-opacity-10 hover:bg-opacity-15 transition-all duration-300">
              <AppRating rating={4.8} count={12543} className="mb-2" />
              <p className="mt-4 text-white/90">&quot;This app completely transformed our hiring process. We found quality candidates in half the time!&quot;</p>
              <p className="mt-4 font-medium text-white/70">- Sarah J., HR Director</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white border-opacity-10 hover:bg-opacity-15 transition-all duration-300">
              <div className="flex flex-col items-center mb-6">
                <span className="text-5xl font-bold text-white">500K+</span>
                <span className="text-white/70 mt-2 font-medium">Active Users</span>
              </div>
              <p className="text-white/90">Join our growing community of recruiters and job seekers transforming the hiring landscape.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white border-opacity-10 hover:bg-opacity-15 transition-all duration-300">
              <div className="flex flex-col items-center mb-6">
                <span className="text-5xl font-bold text-white">87%</span>
                <span className="text-white/70 mt-2 font-medium">Faster Placements</span>
              </div>
              <p className="text-white/90">Our users report significantly faster time-to-hire compared to traditional methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-primary">StaffingApp</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">Revolutionizing the hiring process with AI-powered matching, seamless communication, and powerful analytics.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">AI Matching</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Communication Tools</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Analytics Dashboard</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Mobile Apps</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© {new Date().getFullYear()} StaffingApp. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
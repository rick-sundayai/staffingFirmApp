import Image from "next/image";
import { BookDemoButton } from "../components/DownloadButton";
import { AppRating } from "../components/AppRating";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-blue-50">
              <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0" />
            </svg>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between md:gap-12 lg:gap-24">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                Revolutionize Your Hiring Process
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Our staffing and recruiting app connects top talent with industry-leading companies, streamlining the entire hiring process from application to onboarding.
              </p>
              <BookDemoButton />
              <p className="mt-4 text-sm text-gray-500">Schedule a personalized demo with our sales team</p>
            </div>
            <div className="md:w-1/2">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-xl opacity-20 animate-pulse"></div>
                <div className="relative">
                  <Image 
                    src="/app-mockup-1.svg"
                    alt="Staffing App Interface"
                    width={400}
                    height={600}
                    className="mx-auto shadow-2xl rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Image Left */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:items-center md:gap-12 lg:gap-24">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl blur-xl opacity-20"></div>
                <div className="relative bg-white p-2 rounded-xl shadow-xl">
                  <Image 
                    src="/app-mockup-2.svg"
                    alt="Talent Matching Feature"
                    width={400}
                    height={600}
                    className="mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Smart Matching
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                AI-Powered Talent Matching
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our proprietary algorithm analyzes thousands of data points to match candidates with positions where they&apos;ll truly excel. Say goodbye to endless resume sorting and hello to perfect-fit candidates.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">93% higher retention rate for matched placements</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Reduce time-to-hire by up to 68%</span>
                </li>
              </ul>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur-xl opacity-20"></div>
                <div className="relative bg-white p-2 rounded-xl shadow-xl">
                  <Image 
                    src="/app-mockup-3.svg"
                    alt="Seamless Communication Feature"
                    width={400}
                    height={600}
                    className="mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Communication
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                Seamless Communication Tools
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Built-in messaging, video interviews, and scheduling tools keep everyone on the same page. No more email chains or missed connections—just smooth, efficient hiring processes.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Integrated video interviews with AI insights</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Real-time notifications and calendar sync</span>
                </li>
              </ul>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur-xl opacity-20"></div>
                <div className="relative bg-white p-2 rounded-xl shadow-xl">
                  <Image 
                    src="/app-mockup-2.svg"
                    alt="Analytics Dashboard Feature"
                    width={400}
                    height={600}
                    className="mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Analytics
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                Powerful Analytics Dashboard
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Gain valuable insights into your hiring process with comprehensive analytics. Track metrics like time-to-fill, cost-per-hire, and candidate source effectiveness to continuously optimize your recruitment strategy.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Custom reports and data visualization</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Benchmark against industry standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(255,255,255,0.05)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500 bg-opacity-30 text-white mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Trusted by 2,000+ companies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies that have revolutionized their recruitment strategy and found their perfect team members faster than ever before.
          </p>
          <BookDemoButton className="bg-white text-blue-600 hover:bg-gray-100 mb-16 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white border-opacity-10 hover:bg-opacity-15 transition-all duration-300">
              <AppRating rating={4.8} count={12543} />
              <p className="mt-4 text-blue-50">&quot;This app completely transformed our hiring process. We found quality candidates in half the time!&quot;</p>
              <p className="mt-4 font-medium text-blue-200">- Sarah J., HR Director</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white border-opacity-10 hover:bg-opacity-15 transition-all duration-300">
              <div className="flex flex-col items-center mb-6">
                <span className="text-5xl font-bold text-white">500K+</span>
                <span className="text-blue-200 mt-2 font-medium">Active Users</span>
              </div>
              <p className="text-blue-50">Join our growing community of recruiters and job seekers transforming the hiring landscape.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white border-opacity-10 hover:bg-opacity-15 transition-all duration-300">
              <div className="flex flex-col items-center mb-6">
                <span className="text-5xl font-bold text-white">87%</span>
                <span className="text-blue-200 mt-2 font-medium">Faster Placements</span>
              </div>
              <p className="text-blue-50">Our users report significantly faster time-to-hire compared to traditional methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Staffing App</h3>
            <p className="text-gray-400">Revolutionizing the hiring process for modern businesses.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>AI Matching</li>
              <li>Communication Tools</li>
              <li>Analytics Dashboard</li>
              <li>Mobile Apps</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Staffing App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
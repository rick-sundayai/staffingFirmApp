import Image from "next/image";
import { DownloadButton } from "../components/DownloadButton";
import { AppRating } from "../components/AppRating";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between md:gap-12 lg:gap-24">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Revolutionize Your Hiring Process
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
                Our staffing and recruiting app connects top talent with industry-leading companies, streamlining the entire hiring process from application to onboarding.
              </p>
              <DownloadButton />
              <p className="mt-4 text-sm text-gray-500">Available on iOS and Android</p>
            </div>
            <div className="md:w-1/2">
              <div className="relative mx-auto w-full max-w-md">
                <Image 
                  src="/app-mockup-1.svg"
                  alt="Staffing App Interface"
                  width={400}
                  height={600}
                  className="mx-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Image Left */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:items-center md:gap-12 lg:gap-24">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image 
                src="/app-mockup-2.svg"
                alt="Talent Matching Feature"
                width={400}
                height={600}
                className="mx-auto drop-shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                AI-Powered Talent Matching
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our proprietary algorithm analyzes thousands of data points to match candidates with positions where they'll truly excel. Say goodbye to endless resume sorting and hello to perfect-fit candidates.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">93% higher retention rate for matched placements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Reduce time-to-hire by up to 68%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Image Right */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:flex-row-reverse md:items-center md:gap-12 lg:gap-24">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image 
                src="/app-mockup-3.svg"
                alt="Seamless Communication Feature"
                width={400}
                height={600}
                className="mx-auto drop-shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Seamless Communication Tools
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Built-in messaging, video interviews, and scheduling tools keep everyone on the same page. No more email chains or missed connections—just smooth, efficient hiring processes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Integrated video interviews with AI insights</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time notifications and calendar sync</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Image Left */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:items-center md:gap-12 lg:gap-24">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image 
                src="/app-mockup-2.svg"
                alt="Analytics Dashboard Feature"
                width={400}
                height={600}
                className="mx-auto drop-shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Powerful Analytics Dashboard
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Gain valuable insights into your hiring process with comprehensive analytics. Track metrics like time-to-fill, cost-per-hire, and candidate source effectiveness to continuously optimize your recruitment strategy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom reports and data visualization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Benchmark against industry standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            Join thousands of companies that have revolutionized their recruitment strategy and found their perfect team members faster than ever before.
          </p>
          <DownloadButton className="bg-white text-indigo-600 hover:bg-gray-100 mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-indigo-700 bg-opacity-50 p-6 rounded-lg">
              <AppRating rating={4.8} count={12543} />
              <p className="mt-4 text-indigo-100">"This app completely transformed our hiring process. We found quality candidates in half the time!"</p>
              <p className="mt-2 font-semibold">- Sarah J., HR Director</p>
            </div>
            <div className="bg-indigo-700 bg-opacity-50 p-6 rounded-lg">
              <div className="flex flex-col items-center mb-4">
                <span className="text-4xl font-bold">500K+</span>
                <span className="text-indigo-200">Active Users</span>
              </div>
              <p className="text-indigo-100">Join our growing community of recruiters and job seekers transforming the hiring landscape.</p>
            </div>
            <div className="bg-indigo-700 bg-opacity-50 p-6 rounded-lg">
              <div className="flex flex-col items-center mb-4">
                <span className="text-4xl font-bold">87%</span>
                <span className="text-indigo-200">Faster Placements</span>
              </div>
              <p className="text-indigo-100">Our users report significantly faster time-to-hire compared to traditional methods.</p>
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
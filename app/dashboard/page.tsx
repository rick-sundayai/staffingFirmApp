'use client';

import { useEffect, useState, useRef } from 'react';
import { ProtectedRoute, SignOutButton, useAuth } from '@/components/auth';
import { createBrowserClient } from '@/lib/supabase/supabaseClient';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
}

function Dashboard() {
  const { user } = useAuth();
  const [candidates, setCandidates] = useState<Array<{
    id: string;
    full_name: string;
    email: string;
    status: string;
    created_at: string;
  }>>([]);
  const [jobs, setJobs] = useState<Array<{
    id: string;
    title: string;
    company: string;
    location: string;
    status: string;
    created_at: string;
  }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Use useRef to store the Supabase client instance to avoid recreating it on every render
  const supabaseRef = useRef(createBrowserClient());
  const supabase = supabaseRef.current;

  // Using an empty dependency array is safe here since supabase is from useRef and won't change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchDashboardData = async () => {
      console.log('Starting to fetch dashboard data...');
      setIsLoading(true);
      
      try {
        // Check if supabase client is available
        if (!supabase) {
          console.error('Supabase client is not available');
          setIsLoading(false);
          return;
        }
        
        console.log('Fetching candidates data...');
        // Fetch candidates - use try/catch for each request separately
        try {
          const { data: candidatesData, error: candidatesError } = await supabase
            .from('candidates')
            .select('id, full_name, email, status, created_at')
            .order('created_at', { ascending: false })
            .limit(5);

          console.log('Candidates response:', { data: candidatesData, error: candidatesError });
          
          if (candidatesError) {
            console.error('Error fetching candidates:', candidatesError);
          } else {
            // Type assertion to match our state type
            setCandidates((candidatesData || []) as Array<{
              id: string;
              full_name: string;
              email: string;
              status: string;
              created_at: string;
            }>);
          }
        } catch (candidateError) {
          console.error('Exception fetching candidates:', candidateError);
        }

        console.log('Fetching jobs data...');
        // Fetch jobs - use try/catch for each request separately
        try {
          const { data: jobsData, error: jobsError } = await supabase
            .from('jobs')
            .select('id, title, company, location, status, created_at')
            .order('created_at', { ascending: false })
            .limit(5);

          console.log('Jobs response:', { data: jobsData, error: jobsError });
          
          if (jobsError) {
            console.error('Error fetching jobs:', jobsError);
          } else {
            // Type assertion to match our state type
            setJobs((jobsData || []) as Array<{
              id: string;
              title: string;
              company: string;
              location: string;
              status: string;
              created_at: string;
            }>);
          }
        } catch (jobError) {
          console.error('Exception fetching jobs:', jobError);
        }
      } catch (error) {
        console.error('Error in fetchDashboardData:', error);
      } finally {
        console.log('Finished fetching dashboard data, setting isLoading to false');
        setIsLoading(false);
      }
    };

    // Set a small timeout to ensure auth is initialized
    const timer = setTimeout(() => {
      fetchDashboardData();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Welcome, {user?.email}
            </div>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Stats Overview */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">Overview</h2>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {isLoading ? (
                    // Skeleton loaders for stats
                    <>
                      {[...Array(3)].map((_, index) => (
                        <div key={index} className="bg-gray-50 overflow-hidden shadow rounded-lg">
                          <div className="px-4 py-5 sm:p-6">
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                            <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">Total Candidates</dt>
                          <dd className="mt-1 text-3xl font-semibold text-gray-900">12</dd>
                        </div>
                      </div>
                      <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">Active Jobs</dt>
                          <dd className="mt-1 text-3xl font-semibold text-gray-900">8</dd>
                        </div>
                      </div>
                      <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">Placements</dt>
                          <dd className="mt-1 text-3xl font-semibold text-gray-900">5</dd>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
                <div className="mt-5 flow-root">
                  {isLoading ? (
                    <ul className="-my-5 divide-y divide-gray-200">
                      {[...Array(3)].map((_, index) => (
                        <li key={index} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                              <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="-my-5 divide-y divide-gray-200">
                      <li className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-500">
                              <span className="text-sm font-medium leading-none text-white">JD</span>
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">New candidate applied</p>
                            <p className="text-sm text-gray-500 truncate">John Doe applied for Senior Developer</p>
                          </div>
                          <div className="flex-shrink-0 text-sm text-gray-500">2h ago</div>
                        </div>
                      </li>
                      <li className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-500">
                              <span className="text-sm font-medium leading-none text-white">AC</span>
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">Interview scheduled</p>
                            <p className="text-sm text-gray-500 truncate">Alice Cooper for UX Designer at TechCorp</p>
                          </div>
                          <div className="flex-shrink-0 text-sm text-gray-500">5h ago</div>
                        </div>
                      </li>
                      <li className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-purple-500">
                              <span className="text-sm font-medium leading-none text-white">TC</span>
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">New job posted</p>
                            <p className="text-sm text-gray-500 truncate">Product Manager at InnovateCo</p>
                          </div>
                          <div className="flex-shrink-0 text-sm text-gray-500">1d ago</div>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Recent Candidates */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">Recent Candidates</h2>
                  <a href="/candidates" className="text-sm font-medium text-blue-600 hover:text-blue-500">View all</a>
                </div>
                <div className="mt-5 flow-root">
                  {isLoading ? (
                    <ul className="-my-5 divide-y divide-gray-200">
                      {[...Array(5)].map((_, index) => (
                        <li key={index} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                              <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : candidates.length > 0 ? (
                    <ul className="-my-5 divide-y divide-gray-200">
                      {candidates.map((candidate) => (
                        <li key={candidate.id} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500">
                                <span className="text-sm font-medium leading-none text-white">
                                  {candidate.full_name.split(' ').map((n: string) => n[0]).join('')}
                                </span>
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{candidate.full_name}</p>
                              <p className="text-sm text-gray-500 truncate">{candidate.email}</p>
                            </div>
                            <div className="flex-shrink-0">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${candidate.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {candidate.status || 'New'}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-4 text-center text-gray-500">No candidates found</div>
                  )}
                </div>
              </div>
            </div>

            {/* Recent Jobs */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">Recent Jobs</h2>
                  <a href="/jobs" className="text-sm font-medium text-blue-600 hover:text-blue-500">View all</a>
                </div>
                <div className="mt-5 flow-root">
                  {isLoading ? (
                    <ul className="-my-5 divide-y divide-gray-200">
                      {[...Array(5)].map((_, index) => (
                        <li key={index} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                              <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : jobs.length > 0 ? (
                    <ul className="-my-5 divide-y divide-gray-200">
                      {jobs.map((job) => (
                        <li key={job.id} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{job.title}</p>
                              <p className="text-sm text-gray-500 truncate">{job.company} • {job.location}</p>
                            </div>
                            <div className="flex-shrink-0">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${job.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                {job.status || 'Open'}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-4 text-center text-gray-500">No jobs found</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

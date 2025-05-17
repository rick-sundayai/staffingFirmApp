'use client';

import { useEffect, useState, useRef } from 'react';
import { ProtectedRoute, SignOutButton, useAuth } from '@/components/auth';
import { createBrowserClient } from '@/lib/supabase/supabaseClient';
import { AppLayout } from '@/components/AppLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <AppLayout>
        <Dashboard />
      </AppLayout>
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Welcome, {user?.email}
          </span>
          <SignOutButton />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Stats Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Total Candidates</CardTitle>
            <CardDescription>Current candidate pool</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-12 w-24" />
            ) : (
              <p className="text-3xl font-bold">12</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Jobs</CardTitle>
            <CardDescription>Open positions</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-12 w-24" />
            ) : (
              <p className="text-3xl font-bold">8</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Placements</CardTitle>
            <CardDescription>Successful matches</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-12 w-24" />
            ) : (
              <p className="text-3xl font-bold">5</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Recent Candidates */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Candidates</CardTitle>
            <CardDescription>Latest additions to your talent pool</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <ul className="divide-y divide-border">
                  {[...Array(3)].map((_, index) => (
                    <li key={index} className="py-4">
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[200px]" />
                          <Skeleton className="h-3 w-[150px]" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : candidates.length > 0 ? (
                <ul className="divide-y divide-border">
                  {candidates.map((candidate) => (
                    <li key={candidate.id} className="py-3">
                      <div className="flex items-center space-x-4">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                          {candidate.full_name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">
                            {candidate.full_name}
                          </p>
                          <p className="text-sm text-muted-foreground truncate">
                            {candidate.email}
                          </p>
                        </div>
                        <div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {candidate.status}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="py-4 text-center text-muted-foreground">No candidates found</div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Jobs */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Jobs</CardTitle>
            <CardDescription>Latest job openings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <ul className="divide-y divide-border">
                  {[...Array(3)].map((_, index) => (
                    <li key={index} className="py-4">
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-3 w-[150px]" />
                      </div>
                    </li>
                  ))}
                </ul>
              ) : jobs.length > 0 ? (
                <ul className="divide-y divide-border">
                  {jobs.map((job) => (
                    <li key={job.id} className="py-3">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">
                            {job.title}
                          </p>
                          <p className="text-sm text-muted-foreground truncate">
                            {job.company} • {job.location}
                          </p>
                        </div>
                        <div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {job.status}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="py-4 text-center text-muted-foreground">No jobs found</div>
              )}
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

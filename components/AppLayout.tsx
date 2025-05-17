"use client";

import React from "react";
import { Home, Users, Briefcase, Settings } from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarProvider, 
  SidebarTrigger 
} from "@/components/ui/sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <Sidebar>
          <SidebarHeader>
            <h2 className="text-lg font-bold">Staffing Firm</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem href="/dashboard" icon={<Home className="h-4 w-4" />}>
                Dashboard
              </SidebarMenuItem>
              <SidebarMenuItem href="/candidates" icon={<Users className="h-4 w-4" />}>
                Candidates
              </SidebarMenuItem>
              <SidebarMenuItem href="/jobs" icon={<Briefcase className="h-4 w-4" />}>
                Jobs
              </SidebarMenuItem>
              <SidebarMenuItem href="/settings" icon={<Settings className="h-4 w-4" />}>
                Settings
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="text-xs text-muted-foreground">
              © 2025 Staffing Firm
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="flex h-14 items-center border-b px-4 lg:px-6">
            <SidebarTrigger />
            <div className="ml-auto flex items-center space-x-4">
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-4 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

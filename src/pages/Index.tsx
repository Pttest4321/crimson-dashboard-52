import { Shield, Users, Server, Activity } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/dashboard/Header";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { AgentsTable } from "@/components/dashboard/AgentsTable";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Active Agents"
                value={12}
                icon={Users}
                trend={{ value: 8, isPositive: true }}
              />
              <StatsCard
                title="Active Listeners"
                value={4}
                icon={Server}
                trend={{ value: 2, isPositive: true }}
              />
              <StatsCard
                title="Operations"
                value={3}
                icon={Shield}
                trend={{ value: 1, isPositive: true }}
              />
              <StatsCard
                title="Network Traffic"
                value="1.2 GB"
                icon={Activity}
                trend={{ value: 5, isPositive: false }}
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Active Agents</h2>
              <AgentsTable />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/dashboard/Header";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { AgentsTable } from "@/components/dashboard/AgentsTable";

const Agents = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <div className="flex flex-1">
          <DashboardSidebar />
          <main className="flex-1 p-6 space-y-6">
            <h1 className="text-2xl font-bold">Agents</h1>
            <AgentsTable />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Agents;
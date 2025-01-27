import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/dashboard/Header";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";

const Listeners = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <div className="flex flex-1">
          <DashboardSidebar />
          <main className="flex-1 p-6">
            <h1 className="text-2xl font-bold">Listeners</h1>
            <div className="mt-6">
              <p className="text-muted-foreground">No active listeners found.</p>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Listeners;
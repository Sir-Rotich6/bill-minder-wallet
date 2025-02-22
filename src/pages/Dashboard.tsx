
import { ThemeToggle } from "@/components/ThemeToggle";
import BillScheduleForm from "@/components/BillScheduleForm";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Bill Minder Dashboard</h1>
          <nav className="space-x-4">
            <button className="text-primary hover:text-primary/80">Settings</button>
          </nav>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Schedule Payment</h2>
            <BillScheduleForm />
          </div>
          
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Wallet Balance</h2>
            <p className="text-3xl font-bold">$0.00</p>
          </div>
          
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-muted-foreground">No recent activity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

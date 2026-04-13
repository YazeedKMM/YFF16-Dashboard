import logo from "@/assets/yff-logo.png";
import StatCard from "@/components/StatCard";
import DashboardCharts from "@/components/DashboardCharts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Yanbu Flower Festival Logo" className="h-14 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Yanbu Flower Festival #16</h1>
              <p className="text-sm text-muted-foreground">Visitors & Sales Summary</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-lg font-semibold">
            Yanbu
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Visitors"
            value="165,142"
            change="+12.5%"
            changeType="positive"
            icon="visitors"
            colorClass="bg-festival-blue/10 text-festival-blue"
            delay={0}
          />
          <StatCard
            title="Total Tickets"
            value="160,835"
            change="+8.3%"
            changeType="positive"
            icon="tickets"
            colorClass="bg-festival-coral/10 text-festival-coral"
            delay={100}
          />
          <StatCard
            title="Total Sales"
            value="824,360 SAR"
            change="+15.2%"
            changeType="positive"
            icon="revenue"
            colorClass="bg-festival-yellow/10 text-festival-yellow"
            delay={200}
          />
          <StatCard
            title="Seasonal Tickets"
            value="5,037"
            change="+5.4%"
            changeType="positive"
            icon="tickets"
            colorClass="bg-festival-purple/10 text-festival-purple"
            delay={300}
          />
        </div>

        {/* Charts */}
        <DashboardCharts />
      </main>
    </div>
  );
};

export default Index;

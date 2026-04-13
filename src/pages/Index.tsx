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
            <img src={logo} alt="شعار مهرجان الزهور والحدائق" className="h-14 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-foreground">مهرجان الزهور والحدائق رقم ١٦</h1>
              <p className="text-sm text-muted-foreground">ملخص زوار ومبيعات</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-lg font-semibold">
            ينبع
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="إجمالي الزوار"
            value="١٦٥,١٤٢"
            change="+١٢.٥٪"
            changeType="positive"
            icon="visitors"
            colorClass="bg-festival-blue/10 text-festival-blue"
            delay={0}
          />
          <StatCard
            title="إجمالي التذاكر"
            value="١٦٠,٨٣٥"
            change="+٨.٣٪"
            changeType="positive"
            icon="tickets"
            colorClass="bg-festival-coral/10 text-festival-coral"
            delay={100}
          />
          <StatCard
            title="إجمالي المبيعات"
            value="٨٢٤,٣٦٠ ر.س"
            change="+١٥.٢٪"
            changeType="positive"
            icon="revenue"
            colorClass="bg-festival-yellow/10 text-festival-yellow"
            delay={200}
          />
          <StatCard
            title="التذاكر الموسمية"
            value="٥,٠٣٧"
            change="+٥.٤٪"
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

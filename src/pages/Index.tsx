import logo from "@/assets/yff-logo.png";
import windowLogo from "@/assets/window-logo.svg";
import StatCard from "@/components/StatCard";
import DashboardCharts from "@/components/DashboardCharts";
import RiyalAmount from "@/components/RiyalAmount";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="شعار مهرجان الزهور والحدائق" className="h-14 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-foreground">مهرجان الزهور والحدائق رقم 16</h1>
              <p className="text-sm text-muted-foreground">ملخص زوار ومبيعات</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-sm sm:self-start">
            <div className="text-right">
              <p className="text-xs font-semibold text-muted-foreground">تم تصدير جميع التذاكر عن طريق</p>
              <p className="text-sm font-bold text-foreground">Window | نافذة</p>
            </div>
            <img src={windowLogo} alt="Window logo" className="h-10 w-auto shrink-0" />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="إجمالي الزوار"
            value="165,142"
            icon="visitors"
            colorClass="bg-festival-blue/10 text-festival-blue"
            delay={0}
          />
          <StatCard
            title="إجمالي التذاكر"
            value="160,835"
            icon="tickets"
            colorClass="bg-festival-coral/10 text-festival-coral"
            delay={100}
          />
          <StatCard
            title="إجمالي المبيعات"
            value={<RiyalAmount amount="824,360" boldSymbol />}
            icon="revenue"
            colorClass="bg-festival-yellow/10 text-festival-yellow"
            delay={200}
          />
        </div>

        {/* Charts */}
        <DashboardCharts />
      </main>
    </div>
  );
};

export default Index;

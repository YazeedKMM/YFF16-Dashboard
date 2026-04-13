import { Users, Ticket, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: "visitors" | "tickets" | "revenue";
  colorClass: string;
  delay: number;
}

const iconMap = {
  visitors: Users,
  tickets: Ticket,
  revenue: DollarSign,
};

const StatCard = ({ title, value, change, changeType, icon, colorClass, delay }: StatCardProps) => {
  const Icon = iconMap[icon];

  return (
    <div
      className={`bg-card rounded-lg p-6 shadow-sm border border-border opacity-0 animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground font-semibold">{title}</span>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="text-3xl font-bold text-card-foreground mb-2">{value}</div>
      <div className="flex items-center gap-1 text-sm">
        {changeType === "positive" ? (
          <TrendingUp className="w-4 h-4 text-green-600" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
        <span className={changeType === "positive" ? "text-green-600" : "text-red-500"}>
          {change}
        </span>
        <span className="text-muted-foreground">vs yesterday</span>
      </div>
    </div>
  );
};

export default StatCard;

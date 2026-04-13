import type { ReactNode } from "react";
import { Users, Ticket, DollarSign } from "lucide-react";

interface StatCardProps {
  title: string;
  value: ReactNode;
  icon: "visitors" | "tickets" | "revenue";
  colorClass: string;
  delay: number;
}

const iconMap = {
  visitors: Users,
  tickets: Ticket,
  revenue: DollarSign,
};

const StatCard = ({ title, value, icon, colorClass, delay }: StatCardProps) => {
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
      <div className="text-3xl font-bold text-card-foreground">{value}</div>
    </div>
  );
};

export default StatCard;

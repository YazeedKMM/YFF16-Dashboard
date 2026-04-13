/** @format */

import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import RiyalAmount from "@/components/RiyalAmount";

const summaryRows = [
  {
    label: "عدد الزوار",
    daily: "152,361",
    seasonal: "12,781",
    total: "165,142",
    accent: "text-festival-blue",
    accentBg: "bg-festival-blue/10",
  },
  {
    label: "عدد التذاكر",
    daily: "155,798",
    seasonal: "5,037",
    total: "160,835",
    accent: "text-festival-coral",
    accentBg: "bg-festival-coral/10",
  },
  {
    label: "المبيعات",
    daily: "723,620.00",
    seasonal: "100,740.00",
    total: "824,360.00",
    isCurrency: true,
    accent: "text-festival-yellow",
    accentBg: "bg-festival-yellow/10",
  },
];

const pieData = [
  { name: "تذاكر يومية", value: 155798 },
  { name: "تذاكر موسمية", value: 5037 },
];

const COLORS = ["#006daa", "#cd66d3"];
const totalTickets = pieData.reduce((sum, item) => sum + item.value, 0);
const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US").format(value);

const DashboardCharts = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Summary table */}
    <div
      className="bg-card rounded-lg p-6 shadow-sm border border-border opacity-0 animate-fade-in"
      style={{ animationDelay: "400ms" }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-card-foreground">
          ملخص زوار ومبيعات مهرجان الزهور والحدائق رقم 16
        </h3>
      </div>
      <div className="rounded-2xl border border-border/60 bg-muted/20 p-3 sm:p-4">
        <div className="mb-3 grid grid-cols-[1.1fr_repeat(3,minmax(0,1fr))] gap-2 text-center text-xs font-semibold text-muted-foreground sm:gap-3 sm:text-sm">
          <div className="rounded-xl px-3 py-2 text-right"></div>
          <div className="rounded-xl bg-background px-3 py-2">اليومية</div>
          <div className="rounded-xl bg-background px-3 py-2">الموسمية</div>
          <div className="rounded-xl bg-background px-3 py-2">الإجمالي</div>
        </div>
        <div className="space-y-3">
          {summaryRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-3 rounded-2xl border border-border/60 bg-background p-4 shadow-sm sm:grid-cols-[1.1fr_repeat(3,minmax(0,1fr))] sm:items-center"
            >
              <div className="flex items-center gap-3 text-right sm:min-h-[72px]">
                <span className={`h-10 w-2 rounded-full ${row.accentBg}`} />
                <div className="flex min-h-[40px] items-center">
                  <p className="text-sm font-bold text-card-foreground">
                    {row.label}
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-muted/30 px-3 py-3 text-center">
                <p className="text-[11px] font-semibold text-muted-foreground sm:hidden">
                  اليومية
                </p>
                <p className="text-base font-bold text-card-foreground">
                  {row.isCurrency ? (
                    <RiyalAmount amount={row.daily} />
                  ) : (
                    row.daily
                  )}
                </p>
              </div>
              <div className="rounded-xl bg-muted/30 px-3 py-3 text-center">
                <p className="text-[11px] font-semibold text-muted-foreground sm:hidden">
                  الموسمية
                </p>
                <p className="text-base font-bold text-card-foreground">
                  {row.isCurrency ? (
                    <RiyalAmount amount={row.seasonal} />
                  ) : (
                    row.seasonal
                  )}
                </p>
              </div>
              <div
                className={`rounded-xl px-3 py-3 text-center ${row.accentBg}`}
              >
                <p className="text-[11px] font-semibold text-muted-foreground sm:hidden">
                  الإجمالي
                </p>
                <p className={`text-base font-extrabold ${row.accent}`}>
                  {row.isCurrency ? (
                    <RiyalAmount amount={row.total} boldSymbol />
                  ) : (
                    row.total
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Pie chart */}
    <div
      className="bg-card rounded-lg p-6 shadow-sm border border-border opacity-0 animate-fade-in"
      style={{ animationDelay: "500ms" }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-card-foreground">
          توزيع التذاكر
        </h3>
      </div>
      <div className="rounded-2xl border border-border/60 bg-muted/20 p-4">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={78}
              outerRadius={112}
              paddingAngle={3}
              cornerRadius={10}
              stroke="hsl(var(--card))"
              strokeWidth={4}
              dataKey="value"
              label={false}
            >
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => {
                const percent = ((value / totalTickets) * 100).toFixed(1);
                return [`${formatNumber(value)} (${percent}%)`, name];
              }}
              contentStyle={{
                borderRadius: "14px",
                direction: "rtl",
                fontFamily: "Cairo",
                border: "1px solid hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
              }}
              itemStyle={{ color: "hsl(var(--foreground))" }}
              labelStyle={{ display: "none" }}
            />
            <text
              x="50%"
              y="46%"
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-muted-foreground text-[13px] font-semibold"
            >
              إجمالي التذاكر
            </text>
            <text
              x="50%"
              y="56%"
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-foreground text-[26px] font-extrabold"
            >
              {formatNumber(totalTickets)}
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {pieData.map((item, index) => {
          const percent = ((item.value / totalTickets) * 100).toFixed(1);

          return (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-xl border border-border/60 bg-background px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-3.5 w-3.5 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {percent}% من الإجمالي
                  </p>
                </div>
              </div>
              <p className="text-sm font-bold text-card-foreground">
                {formatNumber(item.value)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default DashboardCharts;

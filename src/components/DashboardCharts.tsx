import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";

const dailyData = [
  { name: "Daily Tickets", visitors: 152361, tickets: 155798, sales: 723620 },
  { name: "Seasonal Tickets", visitors: 12781, tickets: 5037, sales: 100740 },
];

const pieData = [
  { name: "Daily Tickets", value: 155798 },
  { name: "Seasonal Tickets", value: 5037 },
];

const COLORS = ["#006daa", "#cd66d3"];

const DashboardCharts = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Summary table */}
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <h3 className="text-lg font-bold text-card-foreground mb-4">Yanbu Flower Festival #16 - Visitors & Sales Summary</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 text-muted-foreground font-semibold">Type</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-semibold">Daily Tickets</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-semibold">Seasonal Tickets</th>
              <th className="text-left py-3 px-2 text-muted-foreground font-semibold">Total</th>
            </tr>
          </thead>
          <tbody className="text-card-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-2 font-semibold">Visitors</td>
              <td className="py-3 px-2">152,361</td>
              <td className="py-3 px-2">12,781</td>
              <td className="py-3 px-2 font-bold text-festival-blue">165,142</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-2 font-semibold">Tickets Sold</td>
              <td className="py-3 px-2">155,798</td>
              <td className="py-3 px-2">5,037</td>
              <td className="py-3 px-2 font-bold text-festival-coral">160,835</td>
            </tr>
            <tr>
              <td className="py-3 px-2 font-semibold">Sales (SAR)</td>
              <td className="py-3 px-2">723,620.00</td>
              <td className="py-3 px-2">100,740.00</td>
              <td className="py-3 px-2 font-bold text-festival-yellow">824,360.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Pie chart */}
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <h3 className="text-lg font-bold text-card-foreground mb-4">Ticket Distribution</h3>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
            dataKey="value"
            label={({ name, value, percent }) => `${name}: ${value.toLocaleString()} (${(percent * 100).toFixed(1)}%)`}
            labelLine={true}
          >
            {pieData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Legend wrapperStyle={{ fontFamily: "system-ui", fontSize: 13 }} />
          <Tooltip 
            contentStyle={{ borderRadius: "8px", fontFamily: "system-ui" }} 
            formatter={(value: number, name: string) => [`${value.toLocaleString()} tickets`, name]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default DashboardCharts;

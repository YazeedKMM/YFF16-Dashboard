import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";

const dailyData = [
  { name: "التذاكر اليومية", زوار: 152361, تذاكر: 155798, مبيعات: 723620 },
  { name: "التذاكر الموسمية", زوار: 12781, تذاكر: 5037, مبيعات: 100740 },
];

const pieData = [
  { name: "تذاكر يومية", value: 155798 },
  { name: "تذاكر موسمية", value: 5037 },
];

const COLORS = ["#006daa", "#cd66d3"];

const DashboardCharts = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Summary table */}
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <h3 className="text-lg font-bold text-card-foreground mb-4">ملخص زوار ومبيعات مهرجان الزهور والحدائق رقم ١٦</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-right py-3 px-2 text-muted-foreground font-semibold">البيان</th>
              <th className="text-right py-3 px-2 text-muted-foreground font-semibold">التذاكر اليومية</th>
              <th className="text-right py-3 px-2 text-muted-foreground font-semibold">التذاكر الموسمية</th>
              <th className="text-right py-3 px-2 text-muted-foreground font-semibold">الإجمالي</th>
            </tr>
          </thead>
          <tbody className="text-card-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-2 font-semibold">عدد الزوار</td>
              <td className="py-3 px-2">١٥٢,٣٦١</td>
              <td className="py-3 px-2">١٢,٧٨١</td>
              <td className="py-3 px-2 font-bold text-festival-blue">١٦٥,١٤٢</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-2 font-semibold">عدد التذاكر</td>
              <td className="py-3 px-2">١٥٥,٧٩٨</td>
              <td className="py-3 px-2">٥,٠٣٧</td>
              <td className="py-3 px-2 font-bold text-festival-coral">١٦٠,٨٣٥</td>
            </tr>
            <tr>
              <td className="py-3 px-2 font-semibold">المبيعات (ر.س)</td>
              <td className="py-3 px-2">٧٢٣,٦٢٠.٠٠</td>
              <td className="py-3 px-2">١٠٠,٧٤٠.٠٠</td>
              <td className="py-3 px-2 font-bold text-festival-yellow">٨٢٤,٣٦٠.٠٠</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Pie chart */}
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <h3 className="text-lg font-bold text-card-foreground mb-4">توزيع التذاكر</h3>
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
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
          >
            {pieData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Legend wrapperStyle={{ fontFamily: "Cairo", fontSize: 13 }} />
          <Tooltip contentStyle={{ borderRadius: "8px", direction: "rtl", fontFamily: "Cairo" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default DashboardCharts;

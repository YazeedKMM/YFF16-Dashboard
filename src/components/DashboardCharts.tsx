import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, AreaChart, Area,
} from "recharts";

const dailyData = [
  { name: "السبت", يومي: 1200, موسمي: 800 },
  { name: "الأحد", يومي: 1800, موسمي: 950 },
  { name: "الاثنين", يومي: 900, موسمي: 700 },
  { name: "الثلاثاء", يومي: 1100, موسمي: 850 },
  { name: "الأربعاء", يومي: 1500, موسمي: 1100 },
  { name: "الخميس", يومي: 2200, موسمي: 1400 },
  { name: "الجمعة", يومي: 2800, موسمي: 1800 },
];

const revenueData = [
  { name: "السبت", إيرادات: 42000 },
  { name: "الأحد", إيرادات: 58000 },
  { name: "الاثنين", إيرادات: 35000 },
  { name: "الثلاثاء", إيرادات: 41000 },
  { name: "الأربعاء", إيرادات: 52000 },
  { name: "الخميس", إيرادات: 78000 },
  { name: "الجمعة", إيرادات: 95000 },
];

const pieData = [
  { name: "تذاكر يومية", value: 11500 },
  { name: "تذاكر موسمية", value: 7600 },
];

const COLORS = ["#006daa", "#e0cd00"];

const DashboardCharts = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Tickets by type - Bar */}
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <h3 className="text-lg font-bold text-card-foreground mb-4">التذاكر المباعة حسب النوع</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={dailyData} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(205,30%,88%)" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ borderRadius: "8px", border: "1px solid hsl(205,30%,88%)", direction: "rtl", fontFamily: "Cairo" }}
          />
          <Bar dataKey="يومي" fill="#006daa" radius={[6, 6, 0, 0]} />
          <Bar dataKey="موسمي" fill="#e0cd00" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Revenue - Area */}
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <h3 className="text-lg font-bold text-card-foreground mb-4">الإيرادات اليومية (ر.س)</h3>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#006daa" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#006daa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(205,30%,88%)" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ borderRadius: "8px", border: "1px solid hsl(205,30%,88%)", direction: "rtl", fontFamily: "Cairo" }}
            formatter={(value: number) => [`${value.toLocaleString("ar-SA")} ر.س`, "الإيرادات"]}
          />
          <Area type="monotone" dataKey="إيرادات" stroke="#006daa" strokeWidth={2.5} fill="url(#revenueGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>

    {/* Pie chart */}
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
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
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
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

    {/* Summary table */}
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border opacity-0 animate-fade-in" style={{ animationDelay: "700ms" }}>
      <h3 className="text-lg font-bold text-card-foreground mb-4">ملخص الأداء</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-right py-3 px-2 text-muted-foreground font-semibold">المؤشر</th>
              <th className="text-right py-3 px-2 text-muted-foreground font-semibold">يومي</th>
              <th className="text-right py-3 px-2 text-muted-foreground font-semibold">موسمي</th>
              <th className="text-right py-3 px-2 text-muted-foreground font-semibold">الإجمالي</th>
            </tr>
          </thead>
          <tbody className="text-card-foreground">
            <tr className="border-b border-border/50">
              <td className="py-3 px-2 font-semibold">عدد الزوار</td>
              <td className="py-3 px-2">١١,٥٠٠</td>
              <td className="py-3 px-2">٧,٦٠٠</td>
              <td className="py-3 px-2 font-bold">١٩,١٠٠</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-2 font-semibold">التذاكر المباعة</td>
              <td className="py-3 px-2">١١,٥٠٠</td>
              <td className="py-3 px-2">٧,٦٠٠</td>
              <td className="py-3 px-2 font-bold">١٩,١٠٠</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-2 font-semibold">الإيرادات (ر.س)</td>
              <td className="py-3 px-2">٢٣٠,٠٠٠</td>
              <td className="py-3 px-2">٣٨٠,٠٠٠</td>
              <td className="py-3 px-2 font-bold">٦١٠,٠٠٠</td>
            </tr>
            <tr>
              <td className="py-3 px-2 font-semibold">متوسط سعر التذكرة</td>
              <td className="py-3 px-2">٢٠ ر.س</td>
              <td className="py-3 px-2">٥٠ ر.س</td>
              <td className="py-3 px-2 font-bold">٣٢ ر.س</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default DashboardCharts;

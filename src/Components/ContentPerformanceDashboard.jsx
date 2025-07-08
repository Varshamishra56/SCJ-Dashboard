import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { BarChart3, Film, DollarSign } from "lucide-react";
import { useRevenue } from "./RevenueContext"; // ✅ Add this

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const ContentPerformanceDashboard = () => {
  const { avodRevenue, tvodRevenue } = useRevenue(); // ✅ Now defined

  const stats = [
    {
      title: "AVOD Revenue",
      value: `$${avodRevenue.toFixed(2)}`,
      change: "+15.2%",
      icon: <Film className="text-indigo-600" />,
      sparkline: [2000, 3400, 2800, 4000, 5000, 6000, avodRevenue],
    },
    {
      title: "TVOD Revenue",
      value: `$${tvodRevenue.toFixed(2)}`,
      change: "+10.5%",
      icon: <BarChart3 className="text-indigo-600" />,
      sparkline: [1800, 2000, 2500, 3000, 3600, 4200, tvodRevenue],
    },
    {
      title: "Total Revenue",
      value: `$${(avodRevenue + tvodRevenue).toFixed(2)}`,
      change: "+12.9%",
      icon: <DollarSign className="text-indigo-600" />,
      sparkline: [
        3800,
        5400,
        5300,
        7000,
        8600,
        10200,
        avodRevenue + tvodRevenue,
      ],
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Content Performance Dashboard
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Track and analyze your content's performance across different
          distribution models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {stat.title}
              </h3>
              <div className="text-2xl">{stat.icon}</div>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className="flex items-center text-sm text-green-600 mb-4">
              <i className="ri-arrow-up-line mr-1" />
              <span>{stat.change} vs last month</span>
            </div>

            <div className="h-[100px]">
              <Line
                data={{
                  labels: stat.sparkline.map((_, i) => i + 1),
                  datasets: [
                    {
                      data: stat.sparkline,
                      borderColor: "#4f46e5",
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      tension: 0.4,
                      fill: true,
                      pointRadius: 0,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  elements: {
                    line: { borderWidth: 2 },
                  },
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      mode: "index",
                      intersect: false,
                      backgroundColor: "#111827",
                      titleColor: "#fff",
                      bodyColor: "#fff",
                      padding: 10,
                    },
                  },
                  scales: {
                    x: { display: false },
                    y: { display: false },
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPerformanceDashboard;

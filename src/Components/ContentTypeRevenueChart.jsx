import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useRevenue } from "./RevenueContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const ContentTypeRevenueChart = () => {
  const { avodRevenue, tvodRevenue } = useRevenue();

  const data = {
    labels: ["AVOD", "TVOD"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [avodRevenue, tvodRevenue],
        backgroundColor: ["#57b5e7", "#8dd3c7"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Revenue by Content Type
      </h3>
      <div className="h-[300px]">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default ContentTypeRevenueChart;

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useRevenue } from "./RevenueContext";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const GeoDistributionChart = () => {
  const { avodRevenue, tvodRevenue } = useRevenue();

  const labels = ["North America", "Europe", "Asia", "Latin America", "Africa"];
  const geoMultiplier = [0.3, 0.25, 0.2, 0.15, 0.1];

  const avodData = geoMultiplier.map((m) =>
    parseFloat((avodRevenue * m).toFixed(2))
  );
  const tvodData = geoMultiplier.map((m) =>
    parseFloat((tvodRevenue * m).toFixed(2))
  );

  const data = {
    labels,
    datasets: [
      {
        label: "AVOD Revenue",
        data: avodData,
        backgroundColor: "#57b5e7",
      },
      {
        label: "TVOD Revenue",
        data: tvodData,
        backgroundColor: "#8dd3c7",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Geographic Distribution
      </h3>
      <div className="h-[300px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default GeoDistributionChart;

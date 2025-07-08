import React, { useState, useEffect } from "react";
import RevenueChart from "./RevenueChart";
import { useRevenue } from "./RevenueContext";

const AVODRevenueCalculator = () => {
  const [period, setPeriod] = useState("monthly");
  const [views, setViews] = useState("");
  const [cpm, setCpm] = useState("");
  const [share, setShare] = useState("");

  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [monthlyRevenueHistory, setMonthlyRevenueHistory] = useState([]);

  const { updateAvod } = useRevenue();

  useEffect(() => {
    const v = parseFloat(views);
    const c = parseFloat(cpm);
    const s = parseFloat(share);

    if (isNaN(v) || isNaN(c) || isNaN(s) || v <= 0 || c <= 0 || s <= 0) {
      setMonthlyRevenue(0);
      setAnnualRevenue(0);
      updateAvod(0);
      return;
    }

    const revenuePerPeriod = (v / 1000) * c * (s / 100);
    const monthly =
      period === "monthly" ? revenuePerPeriod : revenuePerPeriod / 3;
    const annual = monthly * 12;

    setMonthlyRevenue(monthly.toFixed(2));
    setAnnualRevenue(annual.toFixed(2));
    updateAvod(monthly); // Sync with global context

    const newPoint = {
      month: `Month ${monthlyRevenueHistory.length + 1}`,
      revenue: parseFloat(monthly.toFixed(2)), // ✅ FIXED: using 'monthly' instead of 'month'
    };

    if (!isNaN(newPoint.revenue)) {
      setMonthlyRevenueHistory((prev) => {
        if (
          prev.length > 0 &&
          prev[prev.length - 1].revenue === newPoint.revenue
        ) {
          return prev; // Avoid duplicate entries
        }
        return [...prev.slice(-11), newPoint]; // Keep up to 12 months
      });
    }
  }, [views, cpm, share, period]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        AVOD Revenue Calculator
      </h3>

      {/* Period Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Transaction Period
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="avodPeriod"
              value="monthly"
              checked={period === "monthly"}
              onChange={() => setPeriod("monthly")}
              className="mr-2"
            />
            Monthly
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="avodPeriod"
              value="quarterly"
              checked={period === "quarterly"}
              onChange={() => setPeriod("quarterly")}
              className="mr-2"
            />
            3 Monthly
          </label>
        </div>
      </div>

      {/* Views Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Views per Period
        </label>
        <input
          type="number"
          value={views}
          onChange={(e) => setViews(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter estimated views per period"
        />
      </div>

      {/* CPM Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Average CPM (Cost Per Mille)
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            $
          </span>
          <input
            type="number"
            value={cpm}
            onChange={(e) => setCpm(e.target.value)}
            className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter CPM rate"
          />
        </div>
      </div>

      {/* Revenue Share */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Revenue Share Percentage
        </label>
        <div className="relative">
          <input
            type="number"
            value={share}
            onChange={(e) => setShare(e.target.value)}
            className="w-full pr-8 pl-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter revenue share percentage"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            %
          </span>
        </div>
      </div>

      {/* Revenue Output */}
      <div className="pt-4 border-t border-gray-200 mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Estimated Monthly Revenue:
          </span>
          <span className="text-xl font-bold text-green-600">
            ${monthlyRevenue}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            Estimated Annual Revenue:
          </span>
          <span className="text-xl font-bold text-green-600">
            ${annualRevenue}
          </span>
        </div>
      </div>

      {/* Revenue Growth Chart */}
      {monthlyRevenueHistory.length > 1 && (
        <RevenueChart
          data={monthlyRevenueHistory}
          title="AVOD Monthly Revenue Growth"
        />
      )}
    </div>
  );
};

export default AVODRevenueCalculator;

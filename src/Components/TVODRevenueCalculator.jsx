import React, { useState, useEffect } from "react";
import RevenueChart from "./RevenueChart";
import { useRevenue } from "./RevenueContext";

const TVODRevenueCalculator = () => {
  const [transactions, setTransactions] = useState("");
  const [valuePerTransaction, setValuePerTransaction] = useState("");
  const [share, setShare] = useState("");

  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [monthlyRevenueHistory, setMonthlyRevenueHistory] = useState([]);

  const { updateTvod } = useRevenue();

  useEffect(() => {
    const t = parseFloat(transactions);
    const v = parseFloat(valuePerTransaction);
    const s = parseFloat(share);

    if (isNaN(t) || isNaN(v) || isNaN(s) || t <= 0 || v <= 0 || s <= 0) {
      setMonthlyRevenue(0);
      setAnnualRevenue(0);
      updateTvod(0);
      return;
    }

    const revenue3Month = t * v * (s / 100);
    const monthly = revenue3Month / 3;
    const annual = monthly * 12;

    setMonthlyRevenue(monthly.toFixed(2));
    setAnnualRevenue(annual.toFixed(2));
    updateTvod(monthly); // Sync with global context

    const newPoint = {
      month: `Month ${monthlyRevenueHistory.length + 1}`,
      revenue: parseFloat(monthly.toFixed(2)),
    };

    if (!isNaN(newPoint.revenue)) {
      setMonthlyRevenueHistory((prev) => {
        if (
          prev.length > 0 &&
          prev[prev.length - 1].revenue === newPoint.revenue
        ) {
          return prev; // Avoid duplicate values
        }
        return [...prev.slice(-11), newPoint]; // Keep 12 months
      });
    }
  }, [transactions, valuePerTransaction, share]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        TVOD Revenue Calculator
      </h3>

      {/* Transactions Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          3 Monthly Transactions
        </label>
        <input
          type="number"
          value={transactions}
          onChange={(e) => setTransactions(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter estimated 3-monthly transactions"
        />
      </div>

      {/* Average Transaction Value */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Average Transaction Value
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            $
          </span>
          <input
            type="number"
            value={valuePerTransaction}
            onChange={(e) => setValuePerTransaction(e.target.value)}
            className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter average transaction value"
          />
        </div>
      </div>

      {/* Revenue Share Input */}
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
          title="TVOD Monthly Revenue Growth"
        />
      )}
    </div>
  );
};

export default TVODRevenueCalculator;

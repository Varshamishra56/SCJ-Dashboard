import React from "react";
import AVODRevenueCalculator from "./AVODRevenueCalculator";
import TVODRevenueCalculator from "./TVODRevenueCalculator";
import ContentPerformanceDashboard from "./ContentPerformanceDashboard";
import ContentTypeRevenueChart from "./ContentTypeRevenueChart";
import GeoDistributionChart from "./GeoDistributionChart";
import CPMRevenueDashboard from "./CPMRevenue/CPMRevenueDashboard";

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <AVODRevenueCalculator />
        <TVODRevenueCalculator />
        <ContentPerformanceDashboard />
        <ContentTypeRevenueChart />
        <GeoDistributionChart />
        <CPMRevenueDashboard />
      </div>
    </div>
  );
};

export default Dashboard;

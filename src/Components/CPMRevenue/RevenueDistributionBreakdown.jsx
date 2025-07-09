import React from "react";

const RevenueDistributionBreakdown = ({ netRevenue }) => {
  const platformPercentage = 50;
  const yourPercentage = 40;
  const scjPercentage = 10;
  const tdsPercentage = 5;

  const net = parseFloat(netRevenue) || 0;

  const platformShare = (net * platformPercentage) / 100;
  const yourGrossShare = (net * yourPercentage) / 100;
  const tds = (yourGrossShare * tdsPercentage) / 100;
  const yourFinalShare = yourGrossShare - tds;
  const scjShare = (net * scjPercentage) / 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl mt-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Revenue Distribution Summary
      </h3>

      <div className="space-y-2 text-sm text-gray-700">
        <ResultRow label="Net Revenue" value={`$${net.toFixed(2)}`} />
        <ResultRow
          label="Platform Share (50%)"
          value={`$${platformShare.toFixed(2)}`}
        />
        <ResultRow
          label="SCJ Entertainment (10%)"
          value={`$${scjShare.toFixed(2)}`}
        />
        <ResultRow
          label="Your Gross Share (40%)"
          value={`$${yourGrossShare.toFixed(2)}`}
        />
        <ResultRow
          label="TDS Deduction (5% on your share)"
          value={`-$${tds.toFixed(2)}`}
        />
        <hr className="my-2" />
        <ResultRow
          label="Your Final Share"
          value={`$${yourFinalShare.toFixed(2)}`}
        />
      </div>
    </div>
  );
};

const ResultRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span>{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default RevenueDistributionBreakdown;

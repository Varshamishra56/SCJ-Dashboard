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
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg w-full max-w-xl mt-6 text-white">
      <h3 className="text-xl font-semibold mb-4 text-white">
        Revenue Distribution Summary
      </h3>

      <div className="space-y-3 text-sm text-gray-300">
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
        <hr className="border-gray-700" />
        <ResultRow
          label="Your Final Share"
          value={`$${yourFinalShare.toFixed(2)}`}
          bold
          highlight
        />
      </div>
    </div>
  );
};

const ResultRow = ({ label, value, bold = false, highlight = false }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm">{label}</span>
    <span
      className={`${highlight ? "text-green-400" : "text-white"} ${
        bold ? "font-semibold text-base" : "text-sm font-medium"
      }`}
    >
      {value}
    </span>
  </div>
);

export default RevenueDistributionBreakdown;

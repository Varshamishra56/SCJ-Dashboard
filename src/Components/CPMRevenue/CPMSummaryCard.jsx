import React from "react";
import { DollarSign, TrendingUp, Layers } from "lucide-react";

const CPMSummaryCard = ({ impressions, cpm, grossTotal, netRevenue, platformShare, yourShare, scjShare }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <SummaryBox
        icon={<Layers className="text-blue-600" />}
        title="Total Impressions"
        value={impressions ? Number(impressions).toLocaleString() : "0"}
      />
      <SummaryBox
        icon={<DollarSign className="text-green-600" />}
        title="CPM Rate"
        value={`$${parseFloat(cpm || 0).toFixed(2)}`}
      />
      <SummaryBox
        icon={<TrendingUp className="text-purple-600" />}
        title="Gross Total"
        value={`$${parseFloat(grossTotal || 0).toFixed(2)}`}
      />
      <SummaryBox
        icon={<DollarSign className="text-indigo-600" />}
        title="Net Revenue"
        value={`$${parseFloat(netRevenue || 0).toFixed(2)}`}
      />
      <SummaryBox
        icon={<DollarSign className="text-yellow-500" />}
        title="Platform Share"
        value={`$${parseFloat(platformShare || 0).toFixed(2)}`}
      />
      <SummaryBox
        icon={<DollarSign className="text-teal-500" />}
        title="Your Share"
        value={`$${parseFloat(yourShare || 0).toFixed(2)}`}
      />
      <SummaryBox
        icon={<DollarSign className="text-pink-500" />}
        title="SCJ Share"
        value={`$${parseFloat(scjShare || 0).toFixed(2)}`}
      />
    </div>
  );
};

const SummaryBox = ({ icon, title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-start gap-2">
    <div className="flex items-center gap-2">
      <div className="text-xl">{icon}</div>
      <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
    </div>
    <div className="text-2xl font-bold text-gray-900">{value}</div>
  </div>
);

export default CPMSummaryCard;

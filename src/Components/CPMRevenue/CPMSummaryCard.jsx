import React from "react";
import { DollarSign, TrendingUp, Layers } from "lucide-react";

const CPMSummaryCard = ({
  impressions,
  cpm,
  grossTotal,
  netRevenue,
  platformShare,
  yourShare,
  scjShare,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <SummaryBox
        icon={<Layers className="text-blue-400" />}
        title="Total Impressions"
        value={impressions ? Number(impressions).toLocaleString() : "0"}
        accent="text-blue-400"
      />
      <SummaryBox
        icon={<DollarSign className="text-green-400" />}
        title="CPM Rate"
        value={`$${parseFloat(cpm || 0).toFixed(2)}`}
        accent="text-green-400"
      />
      <SummaryBox
        icon={<TrendingUp className="text-purple-400" />}
        title="Gross Total"
        value={`$${parseFloat(grossTotal || 0).toFixed(2)}`}
        accent="text-purple-400"
      />
      <SummaryBox
        icon={<DollarSign className="text-indigo-400" />}
        title="Net Revenue"
        value={`$${parseFloat(netRevenue || 0).toFixed(2)}`}
        accent="text-indigo-400"
      />
      <SummaryBox
        icon={<DollarSign className="text-yellow-400" />}
        title="Platform Share"
        value={`$${parseFloat(platformShare || 0).toFixed(2)}`}
        accent="text-yellow-400"
      />
      <SummaryBox
        icon={<DollarSign className="text-teal-400" />}
        title="Your Share"
        value={`$${parseFloat(yourShare || 0).toFixed(2)}`}
        accent="text-teal-400"
      />
      <SummaryBox
        icon={<DollarSign className="text-pink-400" />}
        title="SCJ Share"
        value={`$${parseFloat(scjShare || 0).toFixed(2)}`}
        accent="text-pink-400"
      />
    </div>
  );
};

const SummaryBox = ({ icon, title, value, accent }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between text-white h-full">
    <div className="flex items-center justify-between w-full mb-3">
      <span className={`text-xl ${accent}`}>{icon}</span>
      <h4 className="text-sm font-medium text-gray-300">{title}</h4>
    </div>
    <div className="text-3xl font-bold text-white">{value}</div>
  </div>
);

export default CPMSummaryCard;

import React, { useState } from "react";
import RevenueDistributionBreakdown from "./RevenueDistributionBreakdown";
import CPMSummaryCard from "./CPMSummaryCard";

const CPMRevenueDashboard = () => {
  const [impressions, setImpressions] = useState("");
  const [cpm, setCpm] = useState("");
  const [ssaiCost, setSsaiCost] = useState("");
  const [cdnCost, setCdnCost] = useState("");

  const [grossTotal, setGrossTotal] = useState(0);
  const [netRevenue, setNetRevenue] = useState(0);
  const [platformShare, setPlatformShare] = useState(0);
  const [yourShare, setYourShare] = useState(0);
  const [scjShare, setScjShare] = useState(0);

  const handleCalculate = () => {
    const imp = parseFloat(impressions);
    const costPerMile = parseFloat(cpm);
    const ssai = parseFloat(ssaiCost) || 0;
    const cdn = parseFloat(cdnCost) || 0;

    if (isNaN(imp) || isNaN(costPerMile) || imp <= 0 || costPerMile <= 0) {
      setGrossTotal(0);
      setNetRevenue(0);
      setPlatformShare(0);
      setYourShare(0);
      setScjShare(0);
      return;
    }

    const gross = (imp / 1000) * costPerMile;
    const deductions = ssai + cdn;
    const net = gross - deductions;

    const platform = net * 0.5;
    const yourGross = net * 0.4;
    const tds = yourGross * 0.05;
    const yourFinal = yourGross - tds;
    const scj = net * 0.1;

    setGrossTotal(gross.toFixed(2));
    setNetRevenue(net.toFixed(2));
    setPlatformShare(platform.toFixed(2));
    setYourShare(yourFinal.toFixed(2));
    setScjShare(scj.toFixed(2));
    useEffect(() => {
      const imp = parseFloat(impressions);
      const costPerMile = parseFloat(cpm);
      const ssai = parseFloat(ssaiCost) || 0;
      const cdn = parseFloat(cdnCost) || 0;

      if (isNaN(imp) || isNaN(costPerMile) || imp <= 0 || costPerMile <= 0) {
        setGrossTotal(0);
        setNetRevenue(0);
        setPlatformShare(0);
        setYourShare(0);
        setScjShare(0);
        return;
      }

      const gross = (imp / 1000) * costPerMile;
      const deductions = ssai + cdn;
      const net = gross - deductions;

      const platform = net * 0.5;
      const yourGross = net * 0.4;
      const tds = yourGross * 0.05;
      const yourFinal = yourGross - tds;
      const scj = net * 0.1;

      setGrossTotal(gross.toFixed(2));
      setNetRevenue(net.toFixed(2));
      setPlatformShare(platform.toFixed(2));
      setYourShare(yourFinal.toFixed(2));
      setScjShare(scj.toFixed(2));
    }, [impressions, cpm, ssaiCost, cdnCost]);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        CPM Revenue Dashboard
      </h2>

      {/* Input Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Enter Revenue Details</h3>
          <InputField
            label="Impressions"
            value={impressions}
            setValue={setImpressions}
          />
          <InputField
            label="CPM (Cost per Mille)"
            value={cpm}
            setValue={setCpm}
            prefix="$"
          />
          <InputField
            label="SSAI Cost"
            value={ssaiCost}
            setValue={setSsaiCost}
            prefix="$"
          />
          <InputField
            label="CDN Cost"
            value={cdnCost}
            setValue={setCdnCost}
            prefix="$"
          />
          <button
            onClick={handleCalculate}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Calculate Revenue
          </button>
        </div>

        {/* Summary Cards */}
        <CPMSummaryCard
          impressions={impressions}
          cpm={cpm}
          grossTotal={grossTotal}
          netRevenue={netRevenue}
          platformShare={platformShare}
          yourShare={yourShare}
          scjShare={scjShare}
        />
      </div>

      {/* Revenue Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevenueDistributionBreakdown netRevenue={netRevenue} />
      </div>
    </div>
  );
};

const InputField = ({ label, value, setValue, prefix }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      {prefix && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {prefix}
        </span>
      )}
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full ${
          prefix ? "pl-8" : "pl-4"
        } pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none`}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  </div>
);

export default CPMRevenueDashboard;

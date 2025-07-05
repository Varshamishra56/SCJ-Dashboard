import React from "react";

const RevenueModels = () => {
  const revenueModels = [
    {
      title: "AVOD",
      subtitle: "Ad-supported video on demand with revenue sharing",
      share: "50-70% Revenue Share",
      icon: "📺",
      color: "from-green-400 via-emerald-400 to-teal-400",
      features: [
        "Ad revenue sharing",
        "No upfront cost",
        "Performance based",
        "Flexible terms",
      ],
    },
    {
      title: "TVOD",
      subtitle: "Transactional video on demand per view/purchase",
      share: "60-80% Revenue Share",
      icon: "🎬",
      color: "from-blue-400 via-indigo-400 to-purple-400",
      features: [
        "Pay per view",
        "Purchase options",
        "Higher margins",
        "Direct monetization",
      ],
    },
    {
      title: "Minimum Guarantee",
      subtitle: "Upfront payment plus revenue share",
      share: "Fixed + 40-60% Share",
      icon: "💰",
      color: "from-yellow-400 via-orange-400 to-red-400",
      features: [
        "Upfront payment",
        "Revenue sharing",
        "Risk sharing",
        "Long-term value",
      ],
    },
    {
      title: "Outright",
      subtitle: "One-time payment for all rights",
      share: "Negotiated Lump Sum",
      icon: "🎯",
      color: "from-pink-400 via-rose-400 to-red-400",
      features: [
        "Full rights transfer",
        "Single payment",
        "No revenue sharing",
        "Complete ownership",
      ],
    },
  ];
  return (
    <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Revenue Models Comparison
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {revenueModels.map((model, index) => (
          <div
            key={index}
            className="text-center p-4 border border-gray-200 rounded-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-primary mx-auto mb-4 text-2xl">
              {model.icon}
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{model.title}</h4>
            <p className="text-sm text-gray-600 mb-3">{model.subtitle}</p>
            <p className="text-primary font-semibold">{model.share}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueModels;

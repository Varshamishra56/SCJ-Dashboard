import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import AVODRevenueCalculator from "./AVODRevenueCalculator";
import TVODRevenueCalculator from "./TVODRevenueCalculator";
import ContentPerformanceDashboard from "./ContentPerformanceDashboard";
import ContentTypeRevenueChart from "./ContentTypeRevenueChart";
import GeoDistributionChart from "./GeoDistributionChart";
import CPMRevenueDashboard from "./CPMRevenue/CPMRevenueDashboard";

const DistributionPage = () => {
  const [contractDuration, setContractDuration] = React.useState(5);
  const [selectedPlatform, setSelectedPlatform] = React.useState("Premium OTT");
  const [revenueTimeframe, setRevenueTimeframe] = useState("Monthly");
  const [distributionMetric, setDistributionMetric] = useState("Revenue");

  const platforms = [
    {
      platform: "Premium OTT",
      range: "50-70%",
      minValue: 50,
      maxValue: 70,
      icon: "🎯",
      examples: "Netflix, Amazon Prime, Disney+",
      color: "from-yellow-400 via-orange-400 to-red-400",
    },
    {
      platform: "Regional OTT",
      range: "40-60%",
      minValue: 40,
      maxValue: 60,
      icon: "📱",
      examples: "Local streaming platforms",
      color: "from-green-400 via-emerald-400 to-teal-400",
    },
    {
      platform: "Satellite",
      range: "30-50%",
      minValue: 30,
      maxValue: 50,
      icon: "📡",
      examples: "TV networks, Cable providers",
      color: "from-blue-400 via-indigo-400 to-purple-400",
    },
    {
      platform: "Theatrical",
      range: "20-40%",
      minValue: 20,
      maxValue: 40,
      icon: "🎬",
      examples: "Cinema chains",
      color: "from-pink-400 via-rose-400 to-red-400",
    },
    {
      platform: "Digital Platforms",
      range: "45-65%",
      minValue: 45,
      maxValue: 65,
      icon: "💻",
      examples: "YouTube Premium, Apple TV",
      color: "from-purple-400 via-violet-400 to-indigo-400",
    },
    {
      platform: "International Markets",
      range: "35-55%",
      minValue: 35,
      maxValue: 55,
      icon: "🌍",
      examples: "Global distribution partners",
      color: "from-cyan-400 via-blue-400 to-indigo-400",
    },
  ];

  // Mock data for sparkline charts
  const sparklineData = {
    avod: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    tvod: [20, 30, 45, 40, 60, 55, 70, 80, 83],
    views: [40, 50, 45, 60, 70, 65, 90, 100, 117],
  };

  // Updated revenue data for line chart
  const revenueData = {
    Monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          name: "Feature Films",
          data: [65000, 75000, 68000, 85000, 92000, 98000],
          color: "from-yellow-400 to-orange-500",
        },
        {
          name: "Web Series",
          data: [45000, 52000, 49000, 58000, 63000, 71000],
          color: "from-green-400 to-emerald-500",
        },
        {
          name: "TV Shows",
          data: [35000, 38000, 42000, 39000, 45000, 51000],
          color: "from-blue-400 to-indigo-500",
        },
        {
          name: "Documentaries",
          data: [25000, 28000, 24000, 32000, 35000, 38000],
          color: "from-purple-400 to-violet-500",
        },
        {
          name: "Short Films",
          data: [15000, 18000, 21000, 19000, 23000, 25000],
          color: "from-pink-400 to-rose-500",
        },
      ],
    },
    Yearly: {
      labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          name: "Feature Films",
          data: [780000, 850000, 920000, 1050000, 1200000, 1350000],
          color: "from-yellow-400 to-orange-500",
        },
        {
          name: "Web Series",
          data: [540000, 620000, 680000, 750000, 850000, 950000],
          color: "from-green-400 to-emerald-500",
        },
        {
          name: "TV Shows",
          data: [420000, 480000, 520000, 580000, 650000, 720000],
          color: "from-blue-400 to-indigo-500",
        },
        {
          name: "Documentaries",
          data: [300000, 350000, 380000, 420000, 480000, 550000],
          color: "from-purple-400 to-violet-500",
        },
        {
          name: "Short Films",
          data: [180000, 210000, 240000, 280000, 320000, 380000],
          color: "from-pink-400 to-rose-500",
        },
      ],
    },
  };

  // Mock data for bar chart
  const revenueDataBar = {
    Monthly: {
      categories: [
        "Feature Films",
        "Web Series",
        "TV Shows",
        "Documentaries",
        "Short Films",
      ],
      series: [
        {
          name: "AVOD",
          data: [65000, 45000, 35000, 25000, 15000],
        },
        {
          name: "TVOD",
          data: [45000, 35000, 25000, 20000, 10000],
        },
      ],
    },
    Yearly: {
      categories: [
        "Feature Films",
        "Web Series",
        "TV Shows",
        "Documentaries",
        "Short Films",
      ],
      series: [
        {
          name: "AVOD",
          data: [780000, 540000, 420000, 300000, 180000],
        },
        {
          name: "TVOD",
          data: [540000, 420000, 300000, 240000, 120000],
        },
      ],
    },
  };

  // Mock data for donut chart
  const distributionData = {
    Revenue: [
      { region: "North America", value: 45 },
      { region: "Europe", value: 30 },
      { region: "Asia", value: 20 },
      { region: "Others", value: 5 },
    ],
    Views: [
      { region: "North America", value: 40 },
      { region: "Europe", value: 25 },
      { region: "Asia", value: 30 },
      { region: "Others", value: 5 },
    ],
  };

  // Updated data structure for Revenue by Content Type
  const contentTypeData = {
    Monthly: {
      "Feature Films": { AVOD: 58000, TVOD: 40000 },
      "Web Series": { AVOD: 42000, TVOD: 29000 },
      "TV Shows": { AVOD: 31000, TVOD: 20000 },
      Documentaries: { AVOD: 23000, TVOD: 15000 },
      "Short Films": { AVOD: 15000, TVOD: 10000 },
    },
    Yearly: {
      "Feature Films": { AVOD: 820000, TVOD: 530000 },
      "Web Series": { AVOD: 570000, TVOD: 380000 },
      "TV Shows": { AVOD: 430000, TVOD: 290000 },
      Documentaries: { AVOD: 330000, TVOD: 220000 },
      "Short Films": { AVOD: 230000, TVOD: 150000 },
    },
  };

  // Updated data structure for Geographic Distribution
  const geoDistributionData = {
    Revenue: {
      labels: ["North America", "Europe", "Asia", "Others"],
      data: [450000, 300000, 200000, 50000],
      change: ["+20%", "+15%", "+25%", "+10%"],
    },
    Views: {
      labels: ["North America", "Europe", "Asia", "Others"],
      data: [2000000, 1500000, 1800000, 300000],
      change: ["+18%", "+12%", "+28%", "+8%"],
    },
  };

  // Updated sparkline data for content types
  const contentTypeSparklines = {
    Monthly: {
      "Feature Films": [65000, 75000, 82000, 88000, 92000, 98000],
      "Web Series": [45000, 52000, 58000, 63000, 67000, 71000],
      "TV Shows": [35000, 39000, 43000, 46000, 49000, 51000],
      Documentaries: [25000, 28000, 31000, 34000, 36000, 38000],
      "Short Films": [15000, 18000, 20000, 22000, 24000, 25000],
    },
    Yearly: {
      "Feature Films": [780000, 850000, 950000, 1050000, 1200000, 1350000],
      "Web Series": [540000, 620000, 680000, 750000, 850000, 950000],
      "TV Shows": [420000, 480000, 520000, 580000, 650000, 720000],
      Documentaries: [300000, 350000, 380000, 420000, 480000, 550000],
      "Short Films": [180000, 210000, 240000, 280000, 320000, 380000],
    },
  };

  // Updated sparkline data for geographic distribution
  const geoSparklines = {
    Revenue: {
      "North America": [380000, 395000, 410000, 425000, 440000, 450000],
      Europe: [250000, 265000, 275000, 285000, 295000, 300000],
      Asia: [150000, 165000, 175000, 185000, 195000, 200000],
      Others: [35000, 38000, 42000, 45000, 48000, 50000],
    },
    Views: {
      "North America": [1600000, 1700000, 1800000, 1900000, 1950000, 2000000],
      Europe: [1200000, 1300000, 1350000, 1400000, 1450000, 1500000],
      Asia: [1400000, 1500000, 1600000, 1700000, 1750000, 1800000],
      Others: [200000, 220000, 240000, 260000, 280000, 300000],
    },
  };

  // Transform content type data for Recharts
  const transformedContentData = Object.entries(
    contentTypeData[revenueTimeframe]
  ).map(([name, data]) => ({
    name,
    AVOD: data.AVOD,
    TVOD: data.TVOD,
  }));

  // Geographic Distribution Data
  const geoData = {
    Revenue: [
      { name: "North America", value: 450000 },
      { name: "Europe", value: 300000 },
      { name: "Asia", value: 200000 },
      { name: "Others", value: 50000 },
    ],
    Views: [
      { name: "North America", value: 2000000 },
      { name: "Europe", value: 1500000 },
      { name: "Asia", value: 1800000 },
      { name: "Others", value: 300000 },
    ],
  };

  // Colors for the donut chart
  const COLORS = ["#FFB547", "#FF7847", "#FF4747", "#FFE247"];

  // Function to get max value for chart scaling
  const getMaxValue = (data) => {
    return Math.max(...data.datasets.flatMap((dataset) => dataset.data));
  };

  // Function to calculate Y-axis labels
  const getYAxisLabels = (maxValue) => {
    const step = maxValue / 4;
    return Array.from({ length: 5 }, (_, i) => Math.round(maxValue - i * step));
  };

  // Add a mapping of platform names to online PNG/WebP URLs
  const platformLogos = [
    {
      name: "BookMyShow",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nrsCzMh96720YCAxVaAMl2J15JBE8b.png",
    },
    {
      name: "Watcho",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SUwT3zzSViOiWx3OCZ73TE0UfawVqF.png",
    },
    {
      name: "Swift TV",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-93SXAZS9BlWasbcs4bYp0vXBJ9v9Th.png",
    },
    {
      name: "Sweet.tv",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QLMfCYlQU3RCz4ixsJnvw9rhknBpGb.png",
    },
    {
      name: "Inflight Dublin",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-60VEz5yp79AtmIy44opRui3jgwFQOV.png",
    },
    {
      name: "VDO",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U5lWfvfkLb7kN5zRmyFSIxZlJ5Xk8J.png",
    },
    {
      name: "Chaupal",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Kll7XOj59YPJIMiap8Apmx55YDWqDh.png",
    },
  ];

  const partners = [
    { name: "BookMyShow" },
    { name: "Watcho" },
    { name: "Swift TV" },
    { name: "Sweet.tv" },
    { name: "Inflight Dublin" },
    { name: "VDO" },
    { name: "Chaupal" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-12">
            <span className="text-white">Our Distribution&nbsp;</span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            We offer comprehensive distribution solutions tailored to maximize
            your content's reach and revenue potential.
          </p>
        </div>

        {/* Distribution Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "50+", label: "Content Titles" },
            { number: "25+", label: "Platform Partners" },
            { number: "15+", label: "Countries" },
            { number: "100M+", label: "Total Views" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Content Acquisition */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">
                Content Acquisition
              </h3>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {[
                "Exclusive Rights Acquisition",
                "Non-Exclusive Licensing",
                "Territory-Specific Rights",
                "Multi-Platform Syndication",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <button className="text-white font-medium hover:text-yellow-400 transition-colors duration-300 flex items-center group">
              Learn More
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Distribution Models */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">
                Distribution Models
              </h3>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {[
                "AVOD Revenue Share",
                "TVOD Pay-Per-View",
                "Minimum Guarantee (MG)",
                "Outright Purchase",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <button className="text-white font-medium hover:text-orange-400 transition-colors duration-300 flex items-center group">
              Learn More
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Platform Partnerships */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">
                Platform Partnerships
              </h3>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-400 to-yellow-400 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {[
                "Major OTT Platforms",
                "Satellite TV Networks",
                "IPTV Services",
                "Regional Broadcasters",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-yellow-400"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <button className="text-white font-medium hover:text-red-400 transition-colors duration-300 flex items-center group">
              Learn More
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Rights Management Section */}
        <div className="mt-24">
          {/* Rights Management Header */}
          <div className="text-center mb-16 mt-8">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 mt-12">
              <span className="text-white">Rights&nbsp;</span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Management
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Customize your distribution strategy with flexible rights options
              tailored to your content and business goals.
            </p>
          </div>

          {/* Rights Types */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Available Rights Types
            </h3>

            {/* Rights Type Cards in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Exclusive Rights",
                  description:
                    "Grant a platform exclusive rights to your content in specified territories for a premium fee.",
                  icon: "🎯",
                },
                {
                  title: "Non-exclusive Rights",
                  description:
                    "Distribute your content across multiple platforms simultaneously to maximize reach.",
                  icon: "🌐",
                },
                {
                  title: "Territory-based Rights",
                  description:
                    "Segment your distribution by geographic regions to optimize for local markets.",
                  icon: "🗺️",
                },
                {
                  title: "Duration-based Rights",
                  description:
                    "Set specific timeframes for distribution rights to maintain flexibility.",
                  icon: "⏳",
                },
              ].map((right, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{right.icon}</span>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {right.title}
                      </h4>
                      <p className="text-gray-300">{right.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contract Duration Slider */}
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Contract Duration
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Rights Duration</span>
                  <span>
                    {contractDuration}{" "}
                    {contractDuration === 1 ? "Year" : "Years"}
                  </span>
                </div>
                <div className="relative w-full">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={contractDuration}
                    onChange={(e) =>
                      setContractDuration(parseInt(e.target.value))
                    }
                    className="w-full h-4 bg-white/10 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        #f59e0b 0%, 
                        #fb923c ${(contractDuration / 5) * 100}%, 
                        rgba(255, 255, 255, 0.1) ${
                          (contractDuration / 5) * 100
                        }%, 
                        rgba(255, 255, 255, 0.1) 100%)`,
                    }}
                  />
                  <style jsx>{`
                    input[type="range"]::-webkit-slider-thumb {
                      -webkit-appearance: none;
                      width: 20px;
                      height: 20px;
                      border-radius: 50%;
                      background: #f59e0b;
                      cursor: pointer;
                      border: 2px solid white;
                      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                    }
                    input[type="range"]::-moz-range-thumb {
                      width: 20px;
                      height: 20px;
                      border-radius: 50%;
                      background: #f59e0b;
                      cursor: pointer;
                      border: 2px solid white;
                      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                    }
                  `}</style>
                </div>
              </div>

              <div className="flex justify-between px-2 mt-4">
                {[1, 2, 3, 4, 5].map((year) => (
                  <div
                    key={year}
                    className="text-center cursor-pointer"
                    onClick={() => setContractDuration(year)}
                  >
                    <div
                      className={`text-sm ${
                        year <= contractDuration
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                    >
                      Year {year}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300">
                  Explore Rights Options
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Model Comparison Section */}
        <div className="mt-16">
          <div className="text-center mb-16 mt-8">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 mt-12">
              <span className="text-white">Revenue Model&nbsp;</span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Comparison
              </span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
              Choose from multiple revenue models tailored to your content
              distribution strategy
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
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
              ].map((model, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${model.color} text-2xl`}
                    >
                      {model.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {model.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 h-12">
                    {model.subtitle}
                  </p>

                  <div
                    className={`text-xl font-bold bg-gradient-to-r ${model.color} bg-clip-text text-transparent mb-4`}
                  >
                    {model.share}
                  </div>

                  <ul className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${model.color} mr-2`}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AVODRevenueCalculator />
            <TVODRevenueCalculator />
          </section>

          <section className="space-y-8">
            <ContentPerformanceDashboard />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContentTypeRevenueChart />
              <GeoDistributionChart />
            </div>
          </section>

          <section>
            <CPMRevenueDashboard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default DistributionPage;

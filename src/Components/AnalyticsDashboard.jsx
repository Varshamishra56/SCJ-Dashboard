import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);
const AnalyticsDashboard = () => {
  const sparklineData = {
    avod: [10, 20, 15, 25, 30, 40],
    tvod: [5, 15, 10, 20, 25, 35],
    views: [100, 200, 180, 300, 400, 500],
  };
  const stats = [
    {
      title: "AVOD Revenue",
      value: "$247,890",
      change: "+12.5%",
      icon: "💰",
      sparkline: sparklineData.avod,
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "TVOD Revenue",
      value: "$183,450",
      change: "+8.3%",
      icon: "🛒",
      sparkline: sparklineData.tvod,
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Total Views",
      value: "1.2M",
      change: "+15.7%",
      icon: "👁️",
      sparkline: sparklineData.views,
      color: "from-purple-400 to-violet-500",
    },
  ];

  return (
    <div>
      <section id="dashboard" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Content Performance Dashboard
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Track and analyze your content's performance across different
              distribution models.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {stat.title}
                  </h3>
                  <div className="text-2xl">{stat.icon}</div>
                </div>

                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="flex items-center text-sm text-green-600 mb-4">
                  <i className="ri-arrow-up-line mr-1" />
                  <span>{stat.change} vs last month</span>
                </div>

                <div className="h-[100px]">
                  <Line
                    data={{
                      labels: stat.sparkline.map((_, i) => i + 1),
                      datasets: [
                        {
                          data: stat.sparkline,
                          borderColor: "#4f46e5", // Tailwind indigo-600
                          tension: 0.4,
                          pointRadius: 0,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      elements: {
                        line: { borderWidth: 2 },
                      },
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          mode: "index",
                          intersect: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          );
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Revenue by Content Type */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Revenue by Content Type
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="text-sm text-gray-600 hover:text-primary">
                    Monthly
                  </button>
                  <button className="text-sm text-primary">Yearly</button>
                </div>
              </div>
              <div
                className="h-[300px]"
                id="contentTypeChart"
                _echarts_instance_="ec_1751638104177"
                style={{
                  userSelect: "none",
                  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 308,
                    height: 300,
                    padding: 0,
                    margin: 0,
                    borderWidth: 0,
                    cursor: "default",
                  }}
                >
                  <canvas
                    data-zr-dom-id="zr_0"
                    width={385}
                    height={375}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 308,
                      height: 300,
                      userSelect: "none",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      padding: 0,
                      margin: 0,
                      borderWidth: 0,
                    }}
                  />
                </div>
                <div
                  className=""
                  style={{
                    position: "absolute",
                    display: "block",
                    borderStyle: "solid",
                    whiteSpace: "nowrap",
                    zIndex: 9999999,
                    boxShadow: "rgba(0, 0, 0, 0.2) 1px 2px 10px",
                    transition:
                      "opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1), visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderWidth: 1,
                    borderRadius: 4,
                    color: "rgb(31, 41, 55)",
                    font: '14px / 21px "Microsoft YaHei"',
                    padding: 10,
                    top: 0,
                    left: 0,
                    transform: "translate3d(446px, 71px, 0px)",
                    borderColor: "rgb(226, 232, 240)",
                    pointerEvents: "none",
                    visibility: "hidden",
                    opacity: 0,
                  }}
                >
                  <div style={{ margin: "0px 0 0", lineHeight: 1 }}>
                    <div style={{ margin: "0px 0 0", lineHeight: 1 }}>
                      <div
                        style={{
                          fontSize: 14,
                          color: "#1f2937",
                          fontWeight: 400,
                          lineHeight: 1,
                        }}
                      >
                        Documentaries
                      </div>
                      <div style={{ margin: "10px 0 0", lineHeight: 1 }}>
                        <div style={{ margin: "0px 0 0", lineHeight: 1 }}>
                          <div style={{ margin: "0px 0 0", lineHeight: 1 }}>
                            <span
                              style={{
                                display: "inline-block",
                                marginRight: 4,
                                borderRadius: 10,
                                width: 10,
                                height: 10,
                                backgroundColor: "rgba(87, 181, 231, 1)",
                              }}
                            />
                            <span
                              style={{
                                fontSize: 14,
                                color: "#1f2937",
                                fontWeight: 400,
                                marginLeft: 2,
                              }}
                            >
                              AVOD
                            </span>
                            <span
                              style={{
                                float: "right",
                                marginLeft: 20,
                                fontSize: 14,
                                color: "#1f2937",
                                fontWeight: 900,
                              }}
                            >
                              70
                            </span>
                            <div style={{ clear: "both" }} />
                          </div>
                          <div style={{ clear: "both" }} />
                        </div>
                        <div style={{ margin: "10px 0 0", lineHeight: 1 }}>
                          <div style={{ margin: "0px 0 0", lineHeight: 1 }}>
                            <span
                              style={{
                                display: "inline-block",
                                marginRight: 4,
                                borderRadius: 10,
                                width: 10,
                                height: 10,
                                backgroundColor: "rgba(141, 211, 199, 1)",
                              }}
                            />
                            <span
                              style={{
                                fontSize: 14,
                                color: "#1f2937",
                                fontWeight: 400,
                                marginLeft: 2,
                              }}
                            >
                              TVOD
                            </span>
                            <span
                              style={{
                                float: "right",
                                marginLeft: 20,
                                fontSize: 14,
                                color: "#1f2937",
                                fontWeight: 900,
                              }}
                            >
                              50
                            </span>
                            <div style={{ clear: "both" }} />
                          </div>
                          <div style={{ clear: "both" }} />
                        </div>
                        <div style={{ clear: "both" }} />
                      </div>
                      <div style={{ clear: "both" }} />
                    </div>
                    <div style={{ clear: "both" }} />
                  </div>
                </div>
              </div>
            </div>
            {/* Geographic Distribution */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Geographic Distribution
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="text-sm text-gray-600 hover:text-primary">
                    Views
                  </button>
                  <button className="text-sm text-primary">Revenue</button>
                </div>
              </div>
              <div
                className="h-[300px]"
                id="geoChart"
                _echarts_instance_="ec_1751638104178"
                style={{
                  userSelect: "none",
                  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 308,
                    height: 300,
                    padding: 0,
                    margin: 0,
                    borderWidth: 0,
                    cursor: "default",
                  }}
                >
                  <canvas
                    data-zr-dom-id="zr_0"
                    width={385}
                    height={375}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 308,
                      height: 300,
                      userSelect: "none",
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      padding: 0,
                      margin: 0,
                      borderWidth: 0,
                    }}
                  />
                </div>
                <div
                  className=""
                  style={{
                    position: "absolute",
                    display: "block",
                    borderStyle: "solid",
                    whiteSpace: "nowrap",
                    zIndex: 9999999,
                    boxShadow: "rgba(0, 0, 0, 0.2) 1px 2px 10px",
                    transition:
                      "opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1), visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderWidth: 1,
                    borderRadius: 4,
                    color: "rgb(31, 41, 55)",
                    font: '14px / 21px "Microsoft YaHei"',
                    padding: 10,
                    top: 0,
                    left: 0,
                    transform: "translate3d(250px, 248px, 0px)",
                    borderColor: "rgb(226, 232, 240)",
                    pointerEvents: "none",
                    visibility: "hidden",
                    opacity: 0,
                  }}
                >
                  <div style={{ margin: "0px 0 0", lineHeight: 1 }}>
                    <div style={{ margin: "0px 0 0", lineHeight: 1 }}>
                      <span
                        style={{
                          display: "inline-block",
                          marginRight: 4,
                          borderRadius: 10,
                          width: 10,
                          height: 10,
                          backgroundColor: "rgba(141, 211, 199, 1)",
                        }}
                      />
                      <span
                        style={{
                          fontSize: 14,
                          color: "#1f2937",
                          fontWeight: 400,
                          marginLeft: 2,
                        }}
                      >
                        Europe
                      </span>
                      <span
                        style={{
                          float: "right",
                          marginLeft: 20,
                          fontSize: 14,
                          color: "#1f2937",
                          fontWeight: 900,
                        }}
                      >
                        25
                      </span>
                      <div style={{ clear: "both" }} />
                    </div>
                    <div style={{ clear: "both" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Revenue Calculator */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                AVOD Revenue Calculator
              </h3>
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transaction Period
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="avodPeriod"
                        defaultValue="monthly"
                        className="custom-checkbox mr-2"
                        defaultChecked=""
                      />
                      <span className="text-gray-700">Monthly</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="avodPeriod"
                        defaultValue="quarterly"
                        className="custom-checkbox mr-2"
                      />
                      <span className="text-gray-700">3 Monthly</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Views per Period
                  </label>
                  <input
                    type="number"
                    id="avodViews"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter estimated views per period"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Average CPM (Cost Per Mille)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      id="avodCpm"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Enter CPM rate"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Revenue Share Percentage
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="avodShare"
                      className="w-full pr-8 pl-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Enter revenue share percentage"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Estimated Monthly Revenue:
                    </span>
                    <span
                      id="avodResult"
                      className="text-xl font-bold text-primary"
                    >
                      $0.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">
                      Estimated Annual Revenue:
                    </span>
                    <span
                      id="avodAnnualResult"
                      className="text-xl font-bold text-primary"
                    >
                      $0.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                TVOD Revenue Calculator
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    3 Monthly Transactions
                  </label>
                  <input
                    type="number"
                    id="tvodTransactions"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Enter estimated 3 monthly transactions"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Average Transaction Value
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      id="tvodValue"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Enter average transaction value"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Revenue Share Percentage
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="tvodShare"
                      className="w-full pr-8 pl-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Enter revenue share percentage"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Estimated Monthly Revenue:
                    </span>
                    <span
                      id="tvodResult"
                      className="text-xl font-bold text-primary"
                    >
                      $0.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">
                      Estimated Annual Revenue:
                    </span>
                    <span
                      id="tvodAnnualResult"
                      className="text-xl font-bold text-primary"
                    >
                      $0.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Top Performing Content
              </h3>
              <div className="custom-select w-48">
                <div className="custom-select-selected">
                  <span>Last 30 Days</span>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-down-s-line" />
                  </div>
                </div>
                <div
                  className="custom-select-options"
                  style={{ display: "none" }}
                >
                  <div className="custom-select-option">Last 7 Days</div>
                  <div className="custom-select-option">Last 30 Days</div>
                  <div className="custom-select-option">Last 90 Days</div>
                  <div className="custom-select-option">Last Year</div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Title
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Type
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Views
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Revenue
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded bg-gray-200 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            The Last Witness
                          </div>
                          <div className="text-sm text-gray-600">Thriller</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-primary rounded text-sm">
                        AVOD
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-gray-900">245.8K</div>
                      <div className="text-sm text-green-600">+12.4%</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-gray-900">$24,580</div>
                      <div className="text-sm text-green-600">+15.2%</div>
                    </td>
                    <td className="py-3 px-4">
                      <div
                        className="h-8 w-24"
                        id="trend1"
                        _echarts_instance_="ec_1751638104179"
                        style={{
                          userSelect: "none",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: 96,
                            height: 32,
                            padding: 0,
                            margin: 0,
                            borderWidth: 0,
                            cursor: "pointer",
                          }}
                        >
                          <canvas
                            data-zr-dom-id="zr_0"
                            width={120}
                            height={40}
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: 96,
                              height: 32,
                              userSelect: "none",
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              padding: 0,
                              margin: 0,
                              borderWidth: 0,
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded bg-gray-200 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Wild Frontiers
                          </div>
                          <div className="text-sm text-gray-600">
                            Documentary
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-primary rounded text-sm">
                        TVOD
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-gray-900">198.3K</div>
                      <div className="text-sm text-green-600">+8.7%</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-gray-900">$19,830</div>
                      <div className="text-sm text-green-600">+10.5%</div>
                    </td>
                    <td className="py-3 px-4">
                      <div
                        className="h-8 w-24"
                        id="trend2"
                        _echarts_instance_="ec_1751638104180"
                        style={{
                          userSelect: "none",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: 96,
                            height: 32,
                            padding: 0,
                            margin: 0,
                            borderWidth: 0,
                          }}
                        >
                          <canvas
                            data-zr-dom-id="zr_0"
                            width={120}
                            height={40}
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: 96,
                              height: 32,
                              userSelect: "none",
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              padding: 0,
                              margin: 0,
                              borderWidth: 0,
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded bg-gray-200 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Nexus Protocol
                          </div>
                          <div className="text-sm text-gray-600">Sci-Fi</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-primary rounded text-sm">
                        AVOD
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-gray-900">167.5K</div>
                      <div className="text-sm text-green-600">+5.3%</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-gray-900">$16,750</div>
                      <div className="text-sm text-green-600">+7.8%</div>
                    </td>
                    <td className="py-3 px-4">
                      <div
                        className="h-8 w-24"
                        id="trend3"
                        _echarts_instance_="ec_1751638104181"
                        style={{
                          userSelect: "none",
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: 96,
                            height: 32,
                            padding: 0,
                            margin: 0,
                            borderWidth: 0,
                          }}
                        >
                          <canvas
                            data-zr-dom-id="zr_0"
                            width={120}
                            height={40}
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: 96,
                              height: 32,
                              userSelect: "none",
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              padding: 0,
                              margin: 0,
                              borderWidth: 0,
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsDashboard;

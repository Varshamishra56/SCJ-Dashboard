import React from "react";
import RevenueModels from "./RevenueModels";

const Services = () => {
  return (
    <div>
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Distribution Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive distribution solutions tailored to maximize
              your content's reach and revenue potential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Content Acquisition */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full text-primary mb-4">
                <i className="ri-film-line ri-2x" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Content Acquisition
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">
                    Exclusive Rights Acquisition
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">Non-Exclusive Licensing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">
                    Territory-Specific Rights
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">
                    Multi-Platform Syndication
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block text-primary hover:text-blue-700 flex items-center"
              >
                <span>Learn More</span>
                <div className="w-5 h-5 flex items-center justify-center ml-1">
                  <i className="ri-arrow-right-line" />
                </div>
              </a>
            </div>
            {/* Distribution Models */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full text-primary mb-4">
                <i className="ri-funds-box-line ri-2x" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Distribution Models
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">AVOD Revenue Share</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">TVOD Pay-Per-View</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">Minimum Guarantee (MG)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">Outright Purchase</span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block text-primary hover:text-blue-700 flex items-center"
              >
                <span>Learn More</span>
                <div className="w-5 h-5 flex items-center justify-center ml-1">
                  <i className="ri-arrow-right-line" />
                </div>
              </a>
            </div>
            {/* Platform Partnerships */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full text-primary mb-4">
                <i className="ri-tv-line ri-2x" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Platform Partnerships
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">Major OTT Platforms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">Satellite TV Networks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">IPTV Services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <i className="ri-check-line" />
                  </div>
                  <span className="text-gray-700">Regional Broadcasters</span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block text-primary hover:text-blue-700 flex items-center"
              >
                <span>Learn More</span>
                <div className="w-5 h-5 flex items-center justify-center ml-1">
                  <i className="ri-arrow-right-line" />
                </div>
              </a>
            </div>
          </div>
          {/* Revenue Models Infographic */}
          <RevenueModels />
        </div>
      </section>
    </div>
  );
};

export default Services;

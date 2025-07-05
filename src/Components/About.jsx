import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div
                style={{
                  backgroundImage:
                    'url("https://readdy.ai/api/search-image?query=professional%20entertainment%20executives%20in%20meeting%20discussing%20film%20distribution%20strategy%2C%20modern%20office%20setting%20with%20screens%20showing%20content%20analytics%2C%20diverse%20team%20collaborating&width=600&height=400&seq=12350&orientation=landscape")',
                }}
                className="w-full h-96 rounded-lg bg-cover bg-center shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About SCJ Entertainments
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 2018, SCJ Entertainments has established itself as a
                leading force in global content distribution, connecting
                creators with audiences worldwide through strategic partnerships
                with major streaming platforms, broadcasters, and media
                companies.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of industry veterans brings decades of combined
                experience in content acquisition, rights management, and
                distribution strategy, ensuring that each title in our catalog
                reaches its maximum potential audience and revenue.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary mr-3">
                    <i className="ri-global-line ri-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Global Reach
                    </h3>
                    <p className="text-sm text-gray-600">
                      Distribution in 120+ countries
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary mr-3">
                    <i className="ri-customer-service-2-line ri-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Creator Support
                    </h3>
                    <p className="text-sm text-gray-600">
                      Dedicated account managers
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary mr-3">
                    <i className="ri-line-chart-line ri-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Analytics</h3>
                    <p className="text-sm text-gray-600">
                      Real-time performance tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary mr-3">
                    <i className="ri-secure-payment-line ri-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Transparent Payments
                    </h3>
                    <p className="text-sm text-gray-600">
                      Regular revenue reporting
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-block bg-primary text-white px-6 py-3 !rounded-button whitespace-nowrap hover:bg-blue-700 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

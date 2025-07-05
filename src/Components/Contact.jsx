import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our services or want to discuss your content?
              Reach out to our team.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject *
                    </label>
                    <div className="custom-select">
                      <div className="custom-select-selected">
                        <span>Select subject</span>
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-arrow-down-s-line" />
                        </div>
                      </div>
                      <div
                        className="custom-select-options"
                        style={{ display: "none" }}
                      >
                        <div className="custom-select-option">
                          Content Submission
                        </div>
                        <div className="custom-select-option">
                          Distribution Partnership
                        </div>
                        <div className="custom-select-option">
                          Catalog Inquiry
                        </div>
                        <div className="custom-select-option">
                          Business Development
                        </div>
                        <div className="custom-select-option">Other</div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Type your message here"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 !rounded-button whitespace-nowrap hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Schedule a Call
                </h3>
                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Select a date and time that works for you, and our team will
                    confirm the appointment.
                  </p>
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    <div className="text-center text-xs text-gray-500">Mon</div>
                    <div className="text-center text-xs text-gray-500">Tue</div>
                    <div className="text-center text-xs text-gray-500">Wed</div>
                    <div className="text-center text-xs text-gray-500">Thu</div>
                    <div className="text-center text-xs text-gray-500">Fri</div>
                    <div className="text-center text-xs text-gray-500">Sat</div>
                    <div className="text-center text-xs text-gray-500">Sun</div>
                    <div className="text-center p-2 text-gray-400">26</div>
                    <div className="text-center p-2 text-gray-400">27</div>
                    <div className="text-center p-2 text-gray-400">28</div>
                    <div className="text-center p-2 text-gray-400">29</div>
                    <div className="text-center p-2 text-gray-400">30</div>
                    <div className="text-center p-2">1</div>
                    <div className="text-center p-2">2</div>
                    <div className="text-center p-2 bg-blue-100 rounded cursor-pointer">
                      3
                    </div>
                    <div className="text-center p-2 bg-blue-100 rounded cursor-pointer">
                      4
                    </div>
                    <div className="text-center p-2 bg-blue-100 rounded cursor-pointer">
                      5
                    </div>
                    <div className="text-center p-2 bg-blue-100 rounded cursor-pointer">
                      6
                    </div>
                    <div className="text-center p-2 bg-blue-100 rounded cursor-pointer">
                      7
                    </div>
                    <div className="text-center p-2">8</div>
                    <div className="text-center p-2">9</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <button className="text-center p-2 border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-200 transition">
                      9:00 AM
                    </button>
                    <button className="text-center p-2 border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-200 transition">
                      10:00 AM
                    </button>
                    <button className="text-center p-2 border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-200 transition">
                      11:00 AM
                    </button>
                    <button className="text-center p-2 border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-200 transition">
                      1:00 PM
                    </button>
                    <button className="text-center p-2 border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-200 transition">
                      2:00 PM
                    </button>
                    <button className="text-center p-2 border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-200 transition">
                      3:00 PM
                    </button>
                  </div>
                  <button className="w-full bg-primary text-white py-3 !rounded-button whitespace-nowrap hover:bg-blue-700 transition">
                    Schedule Call
                  </button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary mr-3">
                      <i className="ri-map-pin-line ri-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Headquarters
                      </h4>
                      <p className="text-gray-600">
                        350 Fifth Avenue, New York, NY 10118, USA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary mr-3">
                      <i className="ri-mail-line ri-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        distribution@scjentertainments.com
                      </p>
                      <p className="text-gray-600">
                        submissions@scjentertainments.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary mr-3">
                      <i className="ri-phone-line ri-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (212) 555-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary mr-3">
                      <i className="ri-time-line ri-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary hover:bg-blue-200 transition"
                    >
                      <i className="ri-linkedin-fill ri-lg" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary hover:bg-blue-200 transition"
                    >
                      <i className="ri-twitter-x-fill ri-lg" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary hover:bg-blue-200 transition"
                    >
                      <i className="ri-instagram-fill ri-lg" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-primary hover:bg-blue-200 transition"
                    >
                      <i className="ri-facebook-fill ri-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

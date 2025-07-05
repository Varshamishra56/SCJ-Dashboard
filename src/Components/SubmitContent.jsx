import React from "react";

const SubmitContent = () => {
  return (
    <div>
      <section id="submit" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Submit Your Content
              </h2>
              <p className="text-gray-700 mb-6">
                Ready to distribute your film or series? Complete our submission
                form to have your content reviewed by our acquisition team.
                We'll evaluate its potential for our distribution channels and
                get back to you within 5 business days.
              </p>
              <div className="bg-blue-50 border-l-4 border-primary p-4 mb-8">
                <div className="flex">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mr-3">
                    <i className="ri-information-line" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      What happens next?
                    </h4>
                    <p className="text-sm text-gray-700">
                      After submission, our team will review your content and
                      contact you to discuss distribution options, revenue
                      models, and next steps.
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    'url("https://readdy.ai/api/search-image?query=film%20submission%20process%20with%20digital%20content%20being%20reviewed%20on%20multiple%20screens%2C%20entertainment%20executives%20evaluating%20content%2C%20professional%20office%20setting&width=500&height=300&seq=12352&orientation=landscape")',
                }}
                className="w-full h-64 rounded-lg bg-cover bg-center"
              />
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Content Title *
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        placeholder="Enter title"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="language"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Language *
                      </label>
                      <div className="custom-select">
                        <div className="custom-select-selected">
                          <span>Select language</span>
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-arrow-down-s-line" />
                          </div>
                        </div>
                        <div
                          className="custom-select-options"
                          style={{ display: "none" }}
                        >
                          <div className="custom-select-option">English</div>
                          <div className="custom-select-option">Spanish</div>
                          <div className="custom-select-option">French</div>
                          <div className="custom-select-option">German</div>
                          <div className="custom-select-option">Hindi</div>
                          <div className="custom-select-option">Japanese</div>
                          <div className="custom-select-option">Korean</div>
                          <div className="custom-select-option">Chinese</div>
                          <div className="custom-select-option">Other</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="genre"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Genre *
                      </label>
                      <div className="custom-select">
                        <div className="custom-select-selected">
                          <span>Select genre</span>
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-arrow-down-s-line" />
                          </div>
                        </div>
                        <div
                          className="custom-select-options"
                          style={{ display: "none" }}
                        >
                          <div className="custom-select-option">Action</div>
                          <div className="custom-select-option">Comedy</div>
                          <div className="custom-select-option">Drama</div>
                          <div className="custom-select-option">Horror</div>
                          <div className="custom-select-option">Thriller</div>
                          <div className="custom-select-option">Sci-Fi</div>
                          <div className="custom-select-option">
                            Documentary
                          </div>
                          <div className="custom-select-option">Animation</div>
                          <div className="custom-select-option">Other</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="year"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Release Year *
                      </label>
                      <input
                        type="text"
                        id="year"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        placeholder="YYYY"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="format"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Content Format *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="format"
                          className="custom-checkbox mr-2"
                        />
                        <span className="text-gray-700">Feature Film</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="format"
                          className="custom-checkbox mr-2"
                        />
                        <span className="text-gray-700">Web Series</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="format"
                          className="custom-checkbox mr-2"
                        />
                        <span className="text-gray-700">TV Show</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="format"
                          className="custom-checkbox mr-2"
                        />
                        <span className="text-gray-700">Documentary</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="format"
                          className="custom-checkbox mr-2"
                        />
                        <span className="text-gray-700">Short Film</span>
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="rights"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Rights Available *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="custom-checkbox mr-2"
                        />
                        <span className="text-gray-700">Worldwide</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="custom-checkbox mr-2"
                        />
                        <span className="text-gray-700">North America</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="custom-checkbox mr-2"
                        />
                        <span className="text-gray-700">Europe</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="custom-checkbox mr-2"
                        />
                        <span className="text-gray-700">Asia</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="custom-checkbox mr-2"
                        />
                        <span className="text-gray-700">Latin America</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="custom-checkbox mr-2"
                        />
                        <span className="text-gray-700">Africa</span>
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="screener"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Screener Link *
                    </label>
                    <input
                      type="text"
                      id="screener"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Vimeo, YouTube, or file sharing link"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Provide a password-protected link to your content
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Brief Description
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Tell us about your content"
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        className="custom-checkbox mr-2 mt-1"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the{" "}
                        <a href="#" className="text-primary hover:underline">
                          Non-Disclosure Agreement
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms of Service
                        </a>
                        . *
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 !rounded-button whitespace-nowrap hover:bg-blue-700 transition"
                  >
                    Submit Content
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmitContent;

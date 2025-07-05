import React from "react";

const Catalog = () => {
  return (
    <div>
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Content Catalog
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse a selection of our available titles. For full catalog
              access, please{" "}
              <a href="#contact" className="text-primary hover:underline">
                contact us
              </a>
              .
            </p>
          </div>
          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="custom-select w-48">
                <div className="custom-select-selected">
                  <span>All Formats</span>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-down-s-line" />
                  </div>
                </div>
                <div
                  className="custom-select-options"
                  style={{ display: "none" }}
                >
                  <div className="custom-select-option">All Formats</div>
                  <div className="custom-select-option">Feature Films</div>
                  <div className="custom-select-option">Web Series</div>
                  <div className="custom-select-option">TV Shows</div>
                  <div className="custom-select-option">Documentaries</div>
                  <div className="custom-select-option">Short Films</div>
                </div>
              </div>
              <div className="custom-select w-48">
                <div className="custom-select-selected">
                  <span>All Genres</span>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-down-s-line" />
                  </div>
                </div>
                <div
                  className="custom-select-options"
                  style={{ display: "none" }}
                >
                  <div className="custom-select-option">All Genres</div>
                  <div className="custom-select-option">Action</div>
                  <div className="custom-select-option">Comedy</div>
                  <div className="custom-select-option">Drama</div>
                  <div className="custom-select-option">Horror</div>
                  <div className="custom-select-option">Thriller</div>
                  <div className="custom-select-option">Sci-Fi</div>
                </div>
              </div>
              <div className="custom-select w-48">
                <div className="custom-select-selected">
                  <span>All Languages</span>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-down-s-line" />
                  </div>
                </div>
                <div
                  className="custom-select-options"
                  style={{ display: "none" }}
                >
                  <div className="custom-select-option">All Languages</div>
                  <div className="custom-select-option">English</div>
                  <div className="custom-select-option">Spanish</div>
                  <div className="custom-select-option">French</div>
                  <div className="custom-select-option">Hindi</div>
                  <div className="custom-select-option">Korean</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search titles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full md:w-64"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400">
                <i className="ri-search-line" />
              </div>
            </div>
          </div>
          {/* Catalog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=dramatic%20scene%20from%20thriller%20movie%20with%20two%20characters%20in%20tense%20confrontation%2C%20cinematic%20lighting%2C%20professional%20film%20still&width=300&height=180&seq=12353&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                  Feature Film
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  The Last Witness
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>2023</span>
                  <span className="mx-2">•</span>
                  <span>Thriller</span>
                  <span className="mx-2">•</span>
                  <span>English</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  A gripping thriller about a journalist who uncovers a
                  conspiracy that puts her life in danger.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded">
                    AVOD/TVOD
                  </span>
                  <button className="text-primary hover:text-blue-700">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-information-line" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=comedy%20web%20series%20scene%20with%20diverse%20cast%20in%20bright%20colorful%20setting%2C%20humorous%20situation%2C%20professional%20production%20quality&width=300&height=180&seq=12354&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Web Series
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Roommates Forever
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>2022</span>
                  <span className="mx-2">•</span>
                  <span>Comedy</span>
                  <span className="mx-2">•</span>
                  <span>English</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  A hilarious series following four friends navigating life,
                  love, and chaotic living situations in New York.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded">
                    AVOD
                  </span>
                  <button className="text-primary hover:text-blue-700">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-information-line" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=documentary%20scene%20with%20wildlife%20in%20natural%20habitat%2C%20professional%20nature%20cinematography%2C%20beautiful%20landscape&width=300&height=180&seq=12355&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                  Documentary
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Wild Frontiers
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>2023</span>
                  <span className="mx-2">•</span>
                  <span>Documentary</span>
                  <span className="mx-2">•</span>
                  <span>Multiple</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  An award-winning documentary series exploring Earth's most
                  remote and endangered ecosystems.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded">
                    TVOD
                  </span>
                  <button className="text-primary hover:text-blue-700">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-information-line" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=romantic%20drama%20film%20scene%20with%20couple%20in%20emotional%20moment%2C%20beautiful%20cinematography%2C%20soft%20lighting&width=300&height=180&seq=12356&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                  Feature Film
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Echoes of Tomorrow
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>2022</span>
                  <span className="mx-2">•</span>
                  <span>Drama</span>
                  <span className="mx-2">•</span>
                  <span>French</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  A poignant drama about love, loss, and second chances across
                  different timelines.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded">
                    AVOD/TVOD
                  </span>
                  <button className="text-primary hover:text-blue-700">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-information-line" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Item 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=sci-fi%20movie%20scene%20with%20futuristic%20cityscape%2C%20advanced%20technology%2C%20professional%20film%20production&width=300&height=180&seq=12357&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                  Feature Film
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Nexus Protocol
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>2023</span>
                  <span className="mx-2">•</span>
                  <span>Sci-Fi</span>
                  <span className="mx-2">•</span>
                  <span>English</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  A mind-bending sci-fi thriller about artificial intelligence
                  that becomes self-aware.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded">
                    TVOD
                  </span>
                  <button className="text-primary hover:text-blue-700">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-information-line" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Item 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=horror%20film%20scene%20with%20creepy%20atmosphere%2C%20dark%20shadows%2C%20suspenseful%20moment%2C%20professional%20cinematography&width=300&height=180&seq=12358&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                  Feature Film
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Whispers in the Dark
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>2022</span>
                  <span className="mx-2">•</span>
                  <span>Horror</span>
                  <span className="mx-2">•</span>
                  <span>Spanish</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  A chilling horror film about a family who moves into a house
                  with a terrifying past.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded">
                    AVOD/TVOD
                  </span>
                  <button className="text-primary hover:text-blue-700">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-information-line" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Item 7 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=TV%20cooking%20show%20set%20with%20professional%20chef%20and%20cooking%20equipment%2C%20bright%20studio%20lighting&width=300&height=180&seq=12359&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                  TV Show
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Global Kitchen Masters
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>2023</span>
                  <span className="mx-2">•</span>
                  <span>Reality</span>
                  <span className="mx-2">•</span>
                  <span>Multiple</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  A competitive cooking show featuring talented chefs from
                  around the world.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded">
                    AVOD
                  </span>
                  <button className="text-primary hover:text-blue-700">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-information-line" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Item 8 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=short%20film%20scene%20with%20emotional%20moment%20between%20characters%2C%20artistic%20cinematography%2C%20indie%20film%20style&width=300&height=180&seq=12360&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Short Film
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">The Letter</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>2023</span>
                  <span className="mx-2">•</span>
                  <span>Drama</span>
                  <span className="mx-2">•</span>
                  <span>Korean</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  An award-winning short film about a life-changing letter that
                  arrives 50 years too late.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded">
                    AVOD
                  </span>
                  <button className="text-primary hover:text-blue-700">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-information-line" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 !rounded-button whitespace-nowrap hover:bg-gray-50 transition">
              Load More
            </button>
            <p className="mt-4 text-gray-600">
              Showing 8 of 250+ titles.{" "}
              <a href="#contact" className="text-primary hover:underline">
                Contact us
              </a>{" "}
              for full catalog access.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;

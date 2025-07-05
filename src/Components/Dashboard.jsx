import React from "react";
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
const Dashboard = () => {
  return (
    <div>
      <>
        {/* Header */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white border-b border-slate-700 shadow-md">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between relative z-10">
            <a
              href="#"
              className="text-2xl font-['Pacifico'] bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent transition duration-300 hover:opacity-90"
            >
              SCJ Entertainments
            </a>

            <nav className="hidden md:flex items-center space-x-6">
              {[
                "Home",
                "About",
                "Services",
                "Submit Content",
                "Catalog",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-slate-300 hover:text-blue-400 transition duration-300 hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center text-slate-300 hover:text-purple-400 transition-all duration-300">
                  <span>EN</span>
                  <div className="w-6 h-6 flex items-center justify-center ml-1">
                    <i className="ri-arrow-down-s-line" />
                  </div>
                </button>
                {/* Optional dropdown could go here */}
              </div>

              {/* Login Button */}
              <a
                href="#"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 text-slate-900 font-semibold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25"
              >
                Login
              </a>

              {/* Mobile Menu Icon */}
              <button className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-blue-400 transition">
                <i className="ri-menu-line ri-lg" />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu (Hidden by default) */}
        <div className="hidden bg-secondary text-white py-4 px-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-blue-300 transition">
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-blue-300 transition"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white hover:text-blue-300 transition"
            >
              Services
            </a>
            <a
              href="#submit"
              className="text-white hover:text-blue-300 transition"
            >
              Submit Content
            </a>
            <a
              href="#catalog"
              className="text-white hover:text-blue-300 transition"
            >
              Catalog
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-300 transition"
            >
              Contact
            </a>
          </nav>
        </div>
        {/* Hero Section */}
        <section className="hero-section w-full h-[600px] flex items-center bg-[url('image.png')] bg-cover bg-center">
          {" "}
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Connecting Content Creators with Global Audiences
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Expert film distribution services for feature films, web series,
                TV shows, documentaries, and short films.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#submit"
                  className="bg-primary text-white px-6 py-3 !rounded-button whitespace-nowrap hover:bg-blue-700 transition"
                >
                  Submit Your Content
                </a>
                <a
                  href="#catalog"
                  className="bg-white text-secondary px-6 py-3 !rounded-button whitespace-nowrap hover:bg-gray-100 transition"
                >
                  Explore Catalog
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-gray-300">Titles Distributed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">50+</p>
                  <p className="text-gray-300">Platform Partners</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">100M+</p>
                  <p className="text-gray-300">Global Viewers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Content Verticals */}
        <section id="verticals" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Content Verticals
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We specialize in distributing diverse content across multiple
                formats and genres to global audiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="content-card bg-white rounded shadow-md overflow-hidden">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=professional%20cinematic%20feature%20film%20scene%20with%20actors%20and%20high%20production%20value%2C%20dramatic%20lighting%2C%20movie%20set%20atmosphere&width=400&height=250&seq=12345&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Feature Films
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Full-length movies across all genres from global filmmakers.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">200+ Titles</span>
                    <a
                      href="#"
                      className="text-primary hover:text-blue-700 flex items-center"
                    >
                      <span>Learn More</span>
                      <div className="w-5 h-5 flex items-center justify-center ml-1">
                        <i className="ri-arrow-right-line" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content-card bg-white rounded shadow-md overflow-hidden">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=web%20series%20production%20set%20with%20multiple%20cameras%2C%20digital%20equipment%2C%20actors%20preparing%20for%20scene%2C%20professional%20lighting%20setup&width=400&height=250&seq=12346&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Web Series
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Episodic content created for digital streaming platforms.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">150+ Series</span>
                    <a
                      href="#"
                      className="text-primary hover:text-blue-700 flex items-center"
                    >
                      <span>Learn More</span>
                      <div className="w-5 h-5 flex items-center justify-center ml-1">
                        <i className="ri-arrow-right-line" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content-card bg-white rounded shadow-md overflow-hidden">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=television%20show%20studio%20with%20multiple%20cameras%2C%20studio%20audience%2C%20professional%20lighting%2C%20TV%20production%20set&width=400&height=250&seq=12347&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    TV Shows
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Television programs including reality, drama, and comedy
                    series.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">100+ Shows</span>
                    <a
                      href="#"
                      className="text-primary hover:text-blue-700 flex items-center"
                    >
                      <span>Learn More</span>
                      <div className="w-5 h-5 flex items-center justify-center ml-1">
                        <i className="ri-arrow-right-line" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content-card bg-white rounded shadow-md overflow-hidden">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=documentary%20filmmaking%20in%20nature%20with%20camera%20crew%20capturing%20wildlife%2C%20professional%20equipment%2C%20natural%20lighting&width=400&height=250&seq=12348&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Documentaries
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Non-fiction films exploring real events, people, and places.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">80+ Titles</span>
                    <a
                      href="#"
                      className="text-primary hover:text-blue-700 flex items-center"
                    >
                      <span>Learn More</span>
                      <div className="w-5 h-5 flex items-center justify-center ml-1">
                        <i className="ri-arrow-right-line" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content-card bg-white rounded shadow-md overflow-hidden">
                <div
                  style={{
                    backgroundImage:
                      'url("https://readdy.ai/api/search-image?query=short%20film%20production%20with%20small%20crew%2C%20indie%20filmmaking%2C%20compact%20camera%20setup%2C%20intimate%20setting&width=400&height=250&seq=12349&orientation=landscape")',
                  }}
                  className="h-48 bg-cover bg-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Short Films
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Brief cinematic stories showcasing emerging talent and
                    creativity.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">120+ Films</span>
                    <a
                      href="#"
                      className="text-primary hover:text-blue-700 flex items-center"
                    >
                      <span>Learn More</span>
                      <div className="w-5 h-5 flex items-center justify-center ml-1">
                        <i className="ri-arrow-right-line" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
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
                  Founded in 2018, SCJ Entertainments has established itself as
                  a leading force in global content distribution, connecting
                  creators with audiences worldwide through strategic
                  partnerships with major streaming platforms, broadcasters, and
                  media companies.
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
        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Distribution Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive distribution solutions tailored to
                maximize your content's reach and revenue potential.
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
                    <span className="text-gray-700">
                      Non-Exclusive Licensing
                    </span>
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
                    <span className="text-gray-700">
                      Minimum Guarantee (MG)
                    </span>
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
            <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Revenue Models Comparison
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-primary mx-auto mb-4">
                    <i className="ri-advertisement-line ri-2x" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AVOD</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Ad-supported video on demand with revenue sharing
                  </p>
                  <p className="text-primary font-semibold">
                    50-70% Revenue Share
                  </p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-primary mx-auto mb-4">
                    <i className="ri-shopping-cart-line ri-2x" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">TVOD</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Transactional video on demand per view/purchase
                  </p>
                  <p className="text-primary font-semibold">
                    60-80% Revenue Share
                  </p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-primary mx-auto mb-4">
                    <i className="ri-shield-check-line ri-2x" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Minimum Guarantee
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Upfront payment plus revenue share
                  </p>
                  <p className="text-primary font-semibold">
                    Fixed + 40-60% Share
                  </p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-primary mx-auto mb-4">
                    <i className="ri-hand-coin-line ri-2x" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Outright</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    One-time payment for all rights
                  </p>
                  <p className="text-primary font-semibold">
                    Negotiated Lump Sum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Partner Showcase */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Platform Partners
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work with leading streaming platforms and broadcasters
                worldwide to maximize your content's reach.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm w-36 h-20">
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                  <i className="ri-netflix-fill ri-2x text-red-600" />
                </div>
                <span className="font-semibold text-gray-800">Netflix</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm w-36 h-20">
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                  <i className="ri-amazon-fill ri-2x text-blue-500" />
                </div>
                <span className="font-semibold text-gray-800">Prime</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm w-36 h-20">
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                  <i className="ri-youtube-fill ri-2x text-red-600" />
                </div>
                <span className="font-semibold text-gray-800">YouTube</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm w-36 h-20">
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                  <i className="ri-apple-fill ri-2x text-gray-800" />
                </div>
                <span className="font-semibold text-gray-800">Apple TV+</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm w-36 h-20">
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                  <i className="ri-tv-2-fill ri-2x text-green-600" />
                </div>
                <span className="font-semibold text-gray-800">Hulu</span>
              </div>
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm w-36 h-20">
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                  <i className="ri-tv-fill ri-2x text-blue-600" />
                </div>
                <span className="font-semibold text-gray-800">HBO Max</span>
              </div>
            </div>
            {/* Testimonials */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mr-1">
                    <i className="ri-double-quotes-l ri-lg" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 italic mb-6">
                  SCJ Entertainments has been instrumental in expanding our
                  film's global reach. Their strategic approach to distribution
                  and deep industry connections helped us secure placement on
                  major platforms we couldn't have accessed independently.
                </p>
                <div className="flex items-center">
                  <div
                    style={{
                      backgroundImage:
                        'url("https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20female%20film%20director%2C%2040s%2C%20confident%20expression%2C%20neutral%20background&width=60&height=60&seq=12351&orientation=squarish")',
                    }}
                    className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Rebecca Martinez
                    </h4>
                    <p className="text-sm text-gray-600">
                      Director, "The Silent Echo"
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button className="w-3 h-3 rounded-full bg-primary mx-1" />
                <button className="w-3 h-3 rounded-full bg-gray-300 mx-1" />
                <button className="w-3 h-3 rounded-full bg-gray-300 mx-1" />
              </div>
            </div>
          </div>
        </section>
        {/* Submit Content Section */}
        <section id="submit" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Submit Your Content
                </h2>
                <p className="text-gray-700 mb-6">
                  Ready to distribute your film or series? Complete our
                  submission form to have your content reviewed by our
                  acquisition team. We'll evaluate its potential for our
                  distribution channels and get back to you within 5 business
                  days.
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
                            <div className="custom-select-option">
                              Animation
                            </div>
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
        {/* Catalog Section */}
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
                  <h3 className="font-semibold text-gray-900 mb-1">
                    The Letter
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span>2023</span>
                    <span className="mx-2">•</span>
                    <span>Drama</span>
                    <span className="mx-2">•</span>
                    <span>Korean</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    An award-winning short film about a life-changing letter
                    that arrives 50 years too late.
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
        {/* Analytics Dashboard */}
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
              {/* AVOD Overview */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    AVOD Revenue
                  </h3>
                  <div className="w-8 h-8 flex items-center justify-center text-primary">
                    <i className="ri-line-chart-line ri-lg" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  $247,890
                </div>
                <div className="flex items-center text-sm text-green-600 mb-4">
                  <div className="w-4 h-4 flex items-center justify-center mr-1">
                    <i className="ri-arrow-up-line" />
                  </div>
                  <span>12.5% vs last month</span>
                </div>
                <div
                  className="h-[100px]"
                  id="avodChart"
                  _echarts_instance_="ec_1751638104174"
                  style={{
                    userSelect: "none",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: 181,
                      height: 100,
                      padding: 0,
                      margin: 0,
                      borderWidth: 0,
                      cursor: "default",
                    }}
                  >
                    <canvas
                      data-zr-dom-id="zr_0"
                      width={226}
                      height={125}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 181,
                        height: 100,
                        userSelect: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        padding: 0,
                        margin: 0,
                        borderWidth: 0,
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* TVOD Overview */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    TVOD Revenue
                  </h3>
                  <div className="w-8 h-8 flex items-center justify-center text-primary">
                    <i className="ri-shopping-cart-line ri-lg" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  $183,450
                </div>
                <div className="flex items-center text-sm text-green-600 mb-4">
                  <div className="w-4 h-4 flex items-center justify-center mr-1">
                    <i className="ri-arrow-up-line" />
                  </div>
                  <span>8.3% vs last month</span>
                </div>
                <div
                  className="h-[100px]"
                  id="tvodChart"
                  _echarts_instance_="ec_1751638104175"
                  style={{
                    userSelect: "none",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: 181,
                      height: 100,
                      padding: 0,
                      margin: 0,
                      borderWidth: 0,
                    }}
                  >
                    <canvas
                      data-zr-dom-id="zr_0"
                      width={226}
                      height={125}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 181,
                        height: 100,
                        userSelect: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        padding: 0,
                        margin: 0,
                        borderWidth: 0,
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Total Views */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Total Views
                  </h3>
                  <div className="w-8 h-8 flex items-center justify-center text-primary">
                    <i className="ri-eye-line ri-lg" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  1.2M
                </div>
                <div className="flex items-center text-sm text-green-600 mb-4">
                  <div className="w-4 h-4 flex items-center justify-center mr-1">
                    <i className="ri-arrow-up-line" />
                  </div>
                  <span>15.7% vs last month</span>
                </div>
                <div
                  className="h-[100px]"
                  id="viewsChart"
                  _echarts_instance_="ec_1751638104176"
                  style={{
                    userSelect: "none",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: 181,
                      height: 100,
                      padding: 0,
                      margin: 0,
                      borderWidth: 0,
                    }}
                  >
                    <canvas
                      data-zr-dom-id="zr_0"
                      width={226}
                      height={125}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 181,
                        height: 100,
                        userSelect: "none",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        padding: 0,
                        margin: 0,
                        borderWidth: 0,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
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
                            <div className="text-sm text-gray-600">
                              Thriller
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-primary rounded text-sm">
                          AVOD
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-gray-900">
                          245.8K
                        </div>
                        <div className="text-sm text-green-600">+12.4%</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-gray-900">
                          $24,580
                        </div>
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
                        <div className="font-semibold text-gray-900">
                          198.3K
                        </div>
                        <div className="text-sm text-green-600">+8.7%</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-gray-900">
                          $19,830
                        </div>
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
                        <div className="font-semibold text-gray-900">
                          167.5K
                        </div>
                        <div className="text-sm text-green-600">+5.3%</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-gray-900">
                          $16,750
                        </div>
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
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Have questions about our services or want to discuss your
                content? Reach out to our team.
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
                      Select a date and time that works for you, and our team
                      will confirm the appointment.
                    </p>
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      <div className="text-center text-xs text-gray-500">
                        Mon
                      </div>
                      <div className="text-center text-xs text-gray-500">
                        Tue
                      </div>
                      <div className="text-center text-xs text-gray-500">
                        Wed
                      </div>
                      <div className="text-center text-xs text-gray-500">
                        Thu
                      </div>
                      <div className="text-center text-xs text-gray-500">
                        Fri
                      </div>
                      <div className="text-center text-xs text-gray-500">
                        Sat
                      </div>
                      <div className="text-center text-xs text-gray-500">
                        Sun
                      </div>
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
        {/* Footer */}
        <footer className="bg-secondary text-white pt-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <a
                  href="#"
                  className="text-2xl font-['Pacifico'] text-white mb-4 inline-block"
                >
                  SCJ Entertainments
                </a>
                <p className="text-gray-300 mb-4">
                  Connecting exceptional content with global audiences through
                  strategic distribution partnerships.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-linkedin-fill" />
                    </div>
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-twitter-x-fill" />
                    </div>
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-instagram-fill" />
                    </div>
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-facebook-fill" />
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-300 hover:text-white transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#submit"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Submit Content
                    </a>
                  </li>
                  <li>
                    <a
                      href="#catalog"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Content Catalog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Distribution FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Submission Guidelines
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Rights Management
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Platform Requirements
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Industry News
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-300 mb-4">
                  Stay updated with the latest distribution opportunities and
                  industry trends.
                </p>
                <form>
                  <div className="flex mb-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-2 rounded-l border-none outline-none text-gray-800 w-full"
                    />
                    <button
                      type="submit"
                      className="bg-primary text-white px-4 py-2 rounded-r hover:bg-blue-700 transition"
                    >
                      Subscribe
                    </button>
                  </div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="custom-checkbox mr-2 mt-1 border-white"
                    />
                    <span className="text-xs text-gray-300">
                      I agree to receive marketing communications from SCJ
                      Entertainments.
                    </span>
                  </label>
                </form>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 SCJ Entertainments. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition"
                >
                  Cookie Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition"
                >
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </footer>
        {/* Scripts */}
      </>
    </div>
  );
};

export default Dashboard;

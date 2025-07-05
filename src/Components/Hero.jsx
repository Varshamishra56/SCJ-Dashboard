import React from "react";

const Hero = () => {
  return (
    <div>
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
    </div>
  );
};

export default Hero;

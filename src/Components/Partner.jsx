import React from "react";

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

const Partner = () => {
  return (
    <div>
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

          {/* Dynamic Platform Logos */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {platformLogos.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm w-36 h-20"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-8 h-8 object-contain mr-2"
                />
                <span className="font-semibold text-gray-800">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-1">
                  <i className="ri-double-quotes-l ri-lg" />
                </div>
              </div>
              <p className="text-lg text-gray-700 italic mb-6">
                SCJ Entertainments has been instrumental in expanding our film's
                global reach. Their strategic approach to distribution and deep
                industry connections helped us secure placement on major
                platforms we couldn't have accessed independently.
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
    </div>
  );
};

export default Partner;

import banner from "../assets/banner.png";

const HeroBanner = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <img
        src={banner}
        alt="Floating Waves Banner"
        className="w-full h-[700px] object-cover"
      />

      
      <div className="absolute inset-0 flex flex-col justify-center px-16">
        <div className="max-w-xl">

          <h3 className="text-[#0F4C81] text-2xl font-semibold">
            Ride Your Vibe
          </h3>

          <h1 className="text-6xl font-extrabold text-[#0F4C81] mt-3 leading-tight">
            FLOATING WAVES
          </h1>

          <h2 className="text-3xl font-semibold mt-3 text-gray-800">
            Model With Us. Inspire The World.
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            We're looking for confident, creative and passionate individuals
            to represent Floating Waves and become part of our growing fashion
            family.
          </p>

          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 text-[#0F4C81] font-medium">
            <p>Professional Photoshoots</p>
            <p> Brand Collaborations</p>
            <p> Fashion Exposure</p>
            <p> Global Reach</p>
            <p> Exclusive Benefits</p>
           
          </div>

           
          <button className="mt-10 bg-[#0F4C81] hover:bg-[#0A3A63] text-white px-10 py-4 rounded-lg text-xl font-semibold transition duration-300 shadow-lg">
            Register Now
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
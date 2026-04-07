import React from "react";

const Hero = ({ imageSrc, imageAlt = "Profile" }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-[42px] sm:text-[64px] md:text-[100px] lg:text-[150px] xl:text-[180px] font-bold leading-[0.9] tracking-tight">
            AASHUTOSH
          </h1>

          <h1 className="text-[42px] sm:text-[64px] md:text-[100px] lg:text-[150px] xl:text-[180px] font-light text-orange-700 leading-[0.9] tracking-tight">
            DAHAL
          </h1>

          <p className="mt-6 text-black text-sm sm:text-base md:text-lg lg:text-xl tracking-widest uppercase leading-relaxed">
            Talk is cheap. Show me the code
            <br />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg tracking-widest">
              — Linus Torvalds
            </span>
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              width: "clamp(180px, 60vw, 420px)",
              height: "clamp(240px, 70vw, 560px)",
            }}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-sm tracking-widest uppercase">
                  Your Image
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

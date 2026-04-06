import React from "react";

const Hero = ({ imageSrc, imageAlt = "Profile" }) => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex items-center justify-between gap-8">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center flex-shrink-0">
          <h1 className="text-[80px] md:text-[150px] lg:text-[180px] font-bold leading-[0.9] tracking-tight">
            AASHUTOSH
          </h1>

          <h1 className="text-[80px] md:text-[150px] lg:text-[180px] font-light text-orange-700 leading-[0.9] tracking-tight">
            DAHAL
          </h1>

          <p className="mt-6 text-black text-base md:text-lg lg:text-xl tracking-widest uppercase leading-relaxed">
            Talk is cheap. Show me the code
            <br />
            <span className="text-sm md:text-base lg:text-lg tracking-widest">
              — Linus Torvalds
            </span>
          </p>
        </div>

        {/* Right: Image */}
        {imageSrc && (
          <div className="flex-shrink-0 flex items-center justify-end">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                width: "clamp(200px, 28vw, 420px)",
                height: "clamp(260px, 38vw, 560px)",
              }}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
                style={{ display: "block" }}
              />
            </div>
          </div>
        )}

        {!imageSrc && (
          <div className="flex-shrink-0 flex items-center justify-end">
            <div
              className="relative overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center"
              style={{
                width: "clamp(200px, 28vw, 420px)",
                height: "clamp(260px, 38vw, 560px)",
              }}
            >
              <span className="text-gray-400 text-sm tracking-widest uppercase">
                Your Image
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,rgba(252,_214,_255,_0.7),rgba(41,_216,_255,_0.7),rgba(255,_253,_128,_0.7),rgba(248,_154,_192,_0.7),rgba(252,_214,_255,_0.7))]">
      <div className="container">
        <p className="font-semibold">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface —{" "}
          </span>
          <a href="#" className="underline underline-offset-4">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;

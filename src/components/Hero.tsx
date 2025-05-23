import Image from "next/image";
import RightArrow from "../assets/icons/arrow-w.svg";
import CursorImage from "../assets/images/cursor.png";
import MessageImage from "../assets/images/message.png";

const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:h-[768px] sm:w-[1536px] lg:h-[1400px] lg:w-[2800px] rounded-[100%] bg-black  left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border border-white/30 py-1 px-2 rounded-lg"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <RightArrow />
            </span>
          </a>
        </div>
        <div className="flex justify-center  mt-8 ">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task <br />
              at a Time
            </h1>
            <Image
              src={CursorImage}
              alt=""
              height={200}
              width={200}
              className="absolute hidden sm:inline right-[456px] top-[108px]"
            />
            <Image
              src={MessageImage}
              alt=""
              height={200}
              width={200}
              className="absolute hidden sm:inline top-[56px] left-[498px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-center text-xl mt-8 sm:mt-10 max-w-md px-6">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

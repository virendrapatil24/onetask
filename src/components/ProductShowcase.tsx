import Image from "next/image";
import ProductImage from "../assets/images/app-screen.png";

const ProductShowcase = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl text-center font-bold">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl mt-5 text-center text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <Image
          src={ProductImage}
          alt="Product Showcase"
          className="mt-14 mx-auto"
        />
      </div>
    </div>
  );
};

export default ProductShowcase;

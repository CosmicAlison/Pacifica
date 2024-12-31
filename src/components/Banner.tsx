import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner w-full flex flex-col items-left max-sm:h-[550px] max-sm:gap-2">
      <h2 className="padding: 5vmax text-white text-left text-5xl font-bold tracking-[1.86px] leading-[60px] max-sm:text-4xl max-[400px]:text-3xl">
        Elegance In<br />
        Every Piece
      </h2>
      <h3 className="text-white text-left text-2xl font-normal leading-[60px] tracking-[1.86px] max-sm:text-lg max-[400px]:text-md">
        Summer Collection
      </h3>
      <div className="flex justify-center items-center gap-0 pb-10 max-[400px]:flex-col max-[350px]:gap-1 w-[320px] max-sm:w-[250px] max-[300px]:w-[200px]">
      <Link to="/shop" className="bg-white text-black text-center text-xl border border-[rgba(0, 0, 0, 0.40)] font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
          Shop Now
        </Link>
      </div>
    </div>
  );
};
export default Banner;

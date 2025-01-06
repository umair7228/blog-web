// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-[80%] mx-auto mt-24 pb-12 max-w-screen-2xl">
      {/* Left - About Text */}
      <div className="bg-teal-700 text-white p-6 md:p-10 xl:p-16 2xl:p-20 flex flex-col justify-between rounded-md h-[40vh] md:h-[35vh] lg:h-[60vh]">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
            About Us - DriveLux
          </h2>
          <p className="text-xs md:text-sm xl:text-lg tracking-wider leading-4 md:leading-7 font-normal mb-6">
            At DriveLux, we believe the right car can transform your journey and
            elevate your driving experience. Specializing in cutting-edge
            engineering, premium craftsmanship, and modern designs, we showcase
            cars that seamlessly blend performance with style. Whether it's the
            thrill of the open road or the comfort of city commutes, our curated
            collection ensures every drive is a masterpiece of innovation and
            elegance.
          </p>
        </div>
        <Link href={'/blogs'}>
          <button className="py-2 px-4 w-44 h-12 bg-teal-600 rounded-md font-medium">
            View collection
          </button>
        </Link>
      </div>

      {/* Right - Image */}
      <div className="relative h-[40vh] md:h-[35vh] lg:h-[60vh] w-full rounded-md overflow-hidden">
        <Image
          src="/post-images/post6.jpg"
          alt="Comforty chair"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;

import Image from "next/image";
import loaderGif from "../assets/loader.gif";

export default function SpecialOffers() {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-violet-900">Special Offers</h2>
        <button className="text-violet-600 font-medium hover:text-violet-800 transition-colors duration-200">
          See All
        </button>
      </div>
      <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-6 text-white overflow-hidden relative shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
        <div className="relative z-10">
          <span className="text-6xl font-bold">30%</span>
          <h3 className="text-2xl font-bold mb-2">Today's Special!</h3>
          <p className="text-violet-100 text-lg">
            Get discount for every order, only valid for today
          </p>
        </div>
        <div className="absolute right-0 bottom-0 w-40 h-40 transform translate-x-8 translate-y-8 opacity-50">
          <Image
            src={loaderGif}
            alt="Special offer"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}

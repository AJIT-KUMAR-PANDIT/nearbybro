import { Search } from "lucide-react";
import loaderGif from "../assets/loader.gif";
import Image from "next/image";

export default function SearchBar() {
  return (
    <>
      <div className="lg:hidden flex justify-center w-[93vw]">
        <div className="flex items-center gap-4">
          <div className=" w-12 h-12 rounded-full overflow-hidden ring-2 ring-violet-300 relative">
            <Image
              src={loaderGif}
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <p className="text-violet-500 text-sm font-medium">
              Good Morning 👋
            </p>
            <h1 className="font-bold text-lg text-violet-900">
              Nearby Indians
            </h1>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-400" />
          <input
            type="search"
            placeholder="Search for services..."
            className="w-full bg-violet-50 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow duration-200 text-violet-900 placeholder-violet-300"
          />
        </div>
      </div>
    </>
  );
}

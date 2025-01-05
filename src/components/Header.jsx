import Image from "next/image";
import { Bell, Bookmark } from "lucide-react";
import loaderGif from "../assets/loader.gif";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <>
      <header className="pl-4 flex items-center justify-between md:p-6 lg:p-8 bg-white shadow-sm">
        <Image
          src="/logo4light.png"
          alt="Profile"
          width={100}
          height={35}
          className="lg:hidden"
        />
        <div className="hidden lg:block">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-violet-300 relative">
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
        <div className="flex gap-3">
          {[Bell, Bookmark].map((Icon, index) => (
            <button
              key={index}
              className="p-2 hover:bg-violet-100 rounded-full transition-colors duration-200"
            >
              <Icon className="w-6 h-6 text-violet-600" />
            </button>
          ))}
        </div>
      </header>
      <div className="pl-4 pr-4">
        {" "}
        <SearchBar />
      </div>
    </>
  );
}

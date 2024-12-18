import Image from "next/image";
import { Bell, Bookmark } from "lucide-react";
import loaderGif from "../assets/loader.gif";

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between md:p-6 lg:p-8 bg-white shadow-sm">
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
          <p className="text-violet-500 text-sm font-medium">Good Morning 👋</p>
          <h1 className="font-bold text-lg text-violet-900">Andrew Ainsley</h1>
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
  );
}

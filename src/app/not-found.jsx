// src/pages/404.js
import Link from "next/link";
import Image from "next/image";
import fourOFour from "../assets/404.png";

const Custom404 = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-6xl font-bold text-red-600">
      <Image src={fourOFour} alt="404" width={200} height={200} />
    </h1>
    <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
    <p className="text-lg text-gray-500 mb-6">
      The page you are looking for does not exist or has been moved.
    </p>
    <Link
      href="/"
      className="text-white font-bold bg-[#6a1b8f] p-4 rounded-lg pl-5 pr-5 hover:underline"
    >
      Go back to Home
    </Link>
  </div>
);

export default Custom404;

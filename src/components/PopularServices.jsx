import Image from "next/image";
import { Bookmark, Star } from "lucide-react";
import loaderGif from "../assets/loader.gif";

const popularServices = [
  {
    name: "Kylee Danford",
    service: "House Cleaning",
    price: 25,
    rating: 4.8,
    reviews: 8289,
  },
  {
    name: "Alfonzo Schuessler",
    service: "Floor Cleaning",
    price: 20,
    rating: 4.9,
    reviews: 6182,
  },
  {
    name: "Sanjuanita Ordonez",
    service: "Washing Clothes",
    price: 22,
    rating: 4.7,
    reviews: 7938,
  },
  {
    name: "Freida Varnes",
    service: "Bathroom Cleaning",
    price: 24,
    rating: 4.9,
    reviews: 6182,
  },
];

function ServiceCard({ image, name, service, price, rating, reviews }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-violet-50 transition-colors duration-200">
      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-md relative">
        <Image src={loaderGif} alt={service} layout="fill" objectFit="cover" />
      </div>
      <div className="flex-1">
        <p className="text-violet-600 text-sm font-medium">{name}</p>
        <h3 className="font-bold text-lg text-violet-900">{service}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-violet-700 font-bold text-lg">${price}</span>
          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-yellow-700">
              {rating}
            </span>
          </div>
          <span className="text-sm text-violet-500">
            {reviews.toLocaleString()} reviews
          </span>
        </div>
      </div>
      <button className="p-2 hover:bg-violet-100 rounded-full transition-colors duration-200">
        <Bookmark className="w-5 h-5 text-violet-400" />
      </button>
    </div>
  );
}

function TabFilter() {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
      {["All", "Cleaning", "Repairing", "Painting"].map((tab, index) => (
        <button
          key={index}
          className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
            index === 0
              ? "bg-violet-600 text-white"
              : "border border-violet-200 text-violet-600 hover:bg-violet-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default function PopularServices() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-violet-900">
          Most Popular Services
        </h2>
        <button className="text-violet-600 font-medium hover:text-violet-800 transition-colors duration-200">
          See All
        </button>
      </div>
      <TabFilter />
      <div className="space-y-4 mt-6">
        {popularServices.map((service, index) => (
          <ServiceCard key={index} image="/placeholder.svg" {...service} />
        ))}
      </div>
    </section>
  );
}

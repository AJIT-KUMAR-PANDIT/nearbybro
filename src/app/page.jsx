import SpecialOffers from "../components/SpecialOffers";
import ServicesGrid from "../components/ServicesGrid";
import PopularServices from "../components/PopularServices";

export default function Home() {
  return (
    <div>
      <SpecialOffers />

      <ServicesGrid />

      {/* Advertisement Space Between Sections (All Devices) */}
      <div className="w-full bg-gray-200 rounded-lg p-6 text-center">
        <span className="text-gray-700 font-semibold">Advertisement</span>
      </div>

      <PopularServices />
      {/* Advertisement Space Between Sections (All Devices) */}
      <div className="w-full bg-gray-200 rounded-lg p-6 text-center">
        <span className="text-gray-700 font-semibold">Advertisement</span>
      </div>

      {/* Advertisement Space Between Sections (All Devices) */}
      <div className="w-full bg-gray-200 rounded-lg p-6 text-center">
        <span className="text-gray-700 font-semibold">Advertisement</span>
      </div>
    </div>
  );
}

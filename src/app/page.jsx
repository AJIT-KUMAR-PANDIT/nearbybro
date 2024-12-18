import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SpecialOffers from "@/components/SpecialOffers";
import ServicesGrid from "@/components/ServicesGrid";
import PopularServices from "@/components/PopularServices";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <div className="max-w-7xl mx-auto bg-white min-h-screen pb-20 lg:pb-0 lg:flex shadow-xl">
        <aside className="hidden lg:block lg:w-64 lg:border-r lg:p-6 bg-violet-50">
          <div>
            <a
              href="#"
              className="block py-2 px-4 rounded-lg text-violet-600 hover:bg-violet-100 transition-colors duration-200"
            >
              <Image
                src="/nearByBroLight.png"
                alt="nearByBro Logo"
                width={200}
                height={50}
              />
            </a>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-violet-800">Menu</h2>
          <nav>
            <ul className="space-y-2">
              {["Home", "Bookings", "Calendar", "Inbox", "Profile"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block py-2 px-4 rounded-lg text-violet-600 hover:bg-violet-100 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">
          <Header />
          <div className="px-4 md:px-6 lg:px-8">
            <SearchBar />
            <SpecialOffers />
            <ServicesGrid />
            <PopularServices />
          </div>
        </main>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookmarkIcon,
  MapPinIcon,
  StarIcon,
  MessageCircleIcon,
  CalendarIcon,
} from "lucide-react";
import { Button2 } from "../../../components/ui/Button2"; // Import the new Button2 component
import Gallery from "../../../components/bussinessDetailsSlug/Gallery";
import Reviews from "../../../components/bussinessDetailsSlug/Reviews";
import ProfileHeader from "../../../components/bussinessDetailsSlug/ProfileHeader";
import CustomMap from "../../../components/map/CustomMap";
import whatsappIcon from "../../../assets/tab_icon/whatsapp.png";
import callIcon from "../../../assets/tab_icon/call.png";
import locationIcon from "../../../assets/tab_icon/location.png";
import streetviewIcon from "../../../assets/tab_icon/streetview.png";

const embedUrl =
  "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14712.546724122365!2d86.18084090274206!3d22.7973987693127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stcs%20jamshedpur!5e0!3m2!1sen!2sin!4v1735994804150!5m2!1sen!2sin"; // Provided Google Maps Embed URL

export default function CleaningServiceProfile() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen">
      <ProfileHeader />

      <main className="p-4 space-y-6">
        <section aria-labelledby="about-section">
          <h2 id="about-section" className="text-xl font-bold mb-2">
            About me
          </h2>
          <p className="text-gray-600">
            With over 10 years of experience in professional cleaning, I bring a
            keen eye for detail and a passion for creating spotless
            environments. My services are eco-friendly and tailored to meet your
            specific needs.
            <button className="text-purple-600 ml-1 focus:outline-none focus:underline">
              Read more...
            </button>
          </p>
        </section>

        <section>
          {" "}
          <CustomMap mapUrl={embedUrl} />
        </section>

        <section aria-labelledby="gallery-section">
          <div className="flex justify-between items-center mb-4">
            <h2 id="gallery-section" className="text-xl font-bold">
              Photos & Videos
            </h2>
            <button className="text-purple-600 focus:outline-none focus:underline">
              See All
            </button>
          </div>
          <Gallery />
        </section>

        <section aria-labelledby="reviews-section">
          <div className="flex items-center gap-2 mb-4">
            <StarIcon className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <h2 id="reviews-section" className="font-bold">
              4.8 (4,479 reviews)
            </h2>
            <button className="text-purple-600 ml-auto focus:outline-none focus:underline">
              See All
            </button>
          </div>
          <Reviews />
        </section>
      </main>

      <footer className="lg:hidden w-[100vw] overflow-x-scroll fixed bottom-16 left-0 right-0 p-4 flex gap-4 max-w-2xl mx-auto  lg:bottom-0">
        <Button2
          variant="outline"
          className="min-w-8 flex items-center justify-center gap-2 bg-white"
        >
          {/* <MessageCircleIcon className="w-4 h-4" />
          Whatsapp */}
          <Image src={whatsappIcon} alt="whatsapp" width={100} height={100} />
        </Button2>
        <Button2
          variant="outline"
          className="min-w-8 flex items-center justify-center gap-2 bg-white"
        >
          {/* <CalendarIcon className="w-4 h-4" />
          Call Now */}
          <Image src={callIcon} alt="call" width={100} height={100} />
        </Button2>
        <Button2
          variant="outline"
          className="min-w-8 flex items-center justify-center gap-2 bg-white"
        >
          {/* <CalendarIcon className="w-4 h-4" />
          Location */}
          <Image src={locationIcon} alt="location" width={100} height={100} />
        </Button2>
        <Button2
          variant="outline"
          className="min-w-8 flex items-center justify-center gap-2 bg-white"
        >
          {/* <CalendarIcon className="w-4 h-4" />
          Street View */}
          <Image src={streetviewIcon} alt="location" width={100} height={100} />
        </Button2>
      </footer>
    </div>
  );
}

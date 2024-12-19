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

      <footer className="fixed bottom-16 left-0 right-0 p-4  bg-white border-t flex gap-4 max-w-2xl mx-auto  lg:bottom-0">
        <Button2
          variant="outline"
          className="w-1/2 flex items-center justify-center gap-2"
        >
          <MessageCircleIcon className="w-4 h-4" />
          Message
        </Button2>
        <Button2 className="w-1/2 bg-purple-600 hover:bg-purple-700 flex items-center justify-center gap-2">
          <CalendarIcon className="w-4 h-4" />
          Book Now
        </Button2>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookmarkIcon, MapPinIcon, StarIcon } from "lucide-react";

export default function ProfileHeader() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <motion.header
      className="relative bg-gradient-to-b from-pink-500 to-purple-600 p-4 rounded-b-3xl text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsBookmarked(!isBookmarked)}
        aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
      >
        <BookmarkIcon
          className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
        />
      </motion.button>

      <div className="pt-12 pb-4">
        <h1 className="text-3xl font-bold mb-2">House Cleaning</h1>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-medium">Jenny Wilson</span>
          <div className="flex items-center">
            <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1">4.8</span>
          </div>
          <span className="text-sm">(4,479 reviews)</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MapPinIcon className="w-4 h-4" />
          <span>255 Grand Park Avenue, New York</span>
        </div>

        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold">$20</span>
          <span className="ml-2 opacity-80">(Floor price)</span>
        </div>
      </div>
    </motion.header>
  );
}

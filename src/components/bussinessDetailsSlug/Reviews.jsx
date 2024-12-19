"use client";

import { useState } from "react";
import { StarIcon, MoreVerticalIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Reviews() {
  const [selectedRating, setSelectedRating] = useState("All");
  const ratings = ["All", "5", "4", "3", "2", "1"];
  const reviews = [
    {
      name: "Lauralee Quintero",
      rating: 5,
      comment:
        "Awesome! This is exactly what I was looking for. I highly recommend to everyone!",
      likes: 724,
      time: "3 weeks ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Clinton Mcclure",
      rating: 4,
      comment:
        "The workers are very professional and the results are very satisfying! I like it very much!",
      likes: 783,
      time: "1 week ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Chieko Chute",
      rating: 5,
      comment:
        "This is the first time I've used these services, and the results were amazing!",
      likes: 597,
      time: "2 weeks ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const filteredReviews =
    selectedRating === "All"
      ? reviews
      : reviews.filter((review) => review.rating === parseInt(selectedRating));

  return (
    <div className="space-y-4">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {ratings.map((rating) => (
          <motion.button
            key={rating}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full border ${
              rating === selectedRating
                ? "bg-purple-600 text-white"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedRating(rating)}
          >
            {rating === "All" ? (
              rating
            ) : (
              <div className="flex items-center gap-1">
                <StarIcon className="w-4 h-4" />
                {rating}
              </div>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {filteredReviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="border rounded-2xl p-4 shadow-sm"
          >
            <div className="flex items-start">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{review.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                      <StarIcon className="w-4 h-4" />
                      {review.rating}
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVerticalIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                    <HeartIcon className="w-4 h-4" />
                    {review.likes}
                  </button>
                  <span>{review.time}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

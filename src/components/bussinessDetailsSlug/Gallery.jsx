"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedImage(index)}
        >
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-3xl aspect-square">
            <Image
              src={images[selectedImage]}
              alt={`Full size gallery image ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

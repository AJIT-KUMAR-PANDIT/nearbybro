"use client";
import React from "react";
import { ArrowLeft, Search, Star, Bookmark } from "lucide-react";
import Button from "../../../components/ui/Button";

// Sample data
const cleaningServices = [
  {
    id: 1,
    name: "Jenny Wilson",
    service: "House Cleaning",
    price: 20,
    rating: 4.8,
    reviews: 4479,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Willard Purnell",
    service: "Floor Cleaning",
    price: 23,
    rating: 4.9,
    reviews: 6182,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Tynisha Obey",
    service: "Washing Clothes",
    price: 22,
    rating: 4.7,
    reviews: 7938,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Georgette Strobel",
    service: "Bathroom Cleaning",
    price: 24,
    rating: 4.9,
    reviews: 6182,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Titus Kitamura",
    service: "Washing Clothes",
    price: 21,
    rating: 4.8,
    reviews: 5234,
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function CleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="z-50 flex items-center justify-between px-4 h-14 bg-white border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Cleaning</h1>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Search className="h-6 w-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="pt-14 pb-4 container max-w-2xl mx-auto">
        <div className="divide-y">
          {cleaningServices.map((service) => (
            <div key={service.id} className="py-4 px-4">
              <div className="flex gap-4">
                {/* Service Provider Image */}
                <div className="relative h-20 w-20 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>

                {/* Service Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm text-gray-600">{service.name}</p>
                      <h2 className="text-lg font-semibold mt-0.5">
                        {service.service}
                      </h2>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-purple-500 -mr-2"
                    >
                      <Bookmark className="h-6 w-6" />
                    </Button>
                  </div>

                  <div className="mt-2">
                    <span className="text-xl font-semibold text-purple-500">
                      ${service.price}
                    </span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Star className="h-4 w-4 fill-current text-orange-400" />
                      <span className="font-medium">{service.rating}</span>
                      <span className="text-gray-600">
                        | {service.reviews.toLocaleString()} reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

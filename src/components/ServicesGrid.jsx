"use client";
import React from "react";
import { ChevronLeft, MoreHorizontal } from "lucide-react";
import {
  Brush,
  Home,
  Truck,
  Wrench,
  Hammer,
  Droplet,
  ShowerHead,
} from "lucide-react";

const FullscreenModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-full h-full bg-white z-50 animate-in fade-in duration-200">
      <div className="h-full w-full flex flex-col">
        <div className="p-4 border-b">
          <button
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="ml-2 text-lg">Back</span>
          </button>
        </div>
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </div>
    </div>
  );
};

function ServiceIcon({ Icon, label, color, onClick }) {
  return (
    <div className="flex flex-col items-center gap-2 group" onClick={onClick}>
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color} transform group-hover:scale-110 transition-transform duration-200`}
      >
        <Icon className="w-8 h-8" />
      </div>
      <span className="text-sm font-medium text-violet-800 group-hover:text-violet-600 transition-colors duration-200">
        {label}
      </span>
    </div>
  );
}

const services = [
  { icon: Home, label: "Cleaning", color: "bg-blue-100 text-blue-600" },
  { icon: Wrench, label: "Repairing", color: "bg-green-100 text-green-600" },
  { icon: Brush, label: "Painting", color: "bg-yellow-100 text-yellow-600" },
  { icon: ShowerHead, label: "Laundry", color: "bg-pink-100 text-pink-600" },
  { icon: Hammer, label: "Appliance", color: "bg-red-100 text-red-600" },
  { icon: Droplet, label: "Plumbing", color: "bg-indigo-100 text-indigo-600" },
  { icon: Truck, label: "Shifting", color: "bg-orange-100 text-orange-600" },
];

export default function ServicesGrid() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-violet-900">Services</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-violet-600 font-medium hover:text-violet-800 transition-colors duration-200"
        >
          See All
        </button>
      </div>
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8">
        {services.map((service, index) => (
          <ServiceIcon
            key={index}
            Icon={service.icon}
            label={service.label}
            color={service.color}
          />
        ))}
        {/* More button */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-100 text-gray-600 transform group-hover:scale-110 transition-transform duration-200">
            <MoreHorizontal className="w-8 h-8" />
          </div>
          <span className="text-sm font-medium text-violet-800 group-hover:text-violet-600 transition-colors duration-200">
            More
          </span>
        </div>
      </div>

      <FullscreenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-violet-900">All Services</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceIcon
                key={index}
                Icon={service.icon}
                label={service.label}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </FullscreenModal>
    </section>
  );
}

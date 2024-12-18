import { Brush, Home, MoreHorizontal, Truck, Wrench, Hammer, Droplet, ShowerHead } from 'lucide-react';

const services = [
  { icon: Home, label: 'Cleaning', color: 'bg-blue-100 text-blue-600' },
  { icon: Wrench, label: 'Repairing', color: 'bg-green-100 text-green-600' },
  { icon: Brush, label: 'Painting', color: 'bg-yellow-100 text-yellow-600' },
  { icon: ShowerHead, label: 'Laundry', color: 'bg-pink-100 text-pink-600' },
  { icon: Hammer, label: 'Appliance', color: 'bg-red-100 text-red-600' },
  { icon: Droplet, label: 'Plumbing', color: 'bg-indigo-100 text-indigo-600' },
  { icon: Truck, label: 'Shifting', color: 'bg-orange-100 text-orange-600' },
  { icon: MoreHorizontal, label: 'More', color: 'bg-gray-100 text-gray-600' },
];

function ServiceIcon({ Icon, label, color }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color} transform group-hover:scale-110 transition-transform duration-200`}>
        <Icon className="w-8 h-8" />
      </div>
      <span className="text-sm font-medium text-violet-800 group-hover:text-violet-600 transition-colors duration-200">{label}</span>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-violet-900">Services</h2>
        <button className="text-violet-600 font-medium hover:text-violet-800 transition-colors duration-200">See All</button>
      </div>
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8">
        {services.map((service, index) => (
          <ServiceIcon key={index} Icon={service.icon} label={service.label} color={service.color} />
        ))}
      </div>
    </section>
  );
}


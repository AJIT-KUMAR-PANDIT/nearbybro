import Link from 'next/link';
import { Calendar, Home, Inbox, LayoutList, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '/', active: true },
  { icon: LayoutList, label: 'Bookings', href: '/bookings' },
  { icon: Calendar, label: 'Calendar', href: '/calendar' },
  { icon: Inbox, label: 'Inbox', href: '/inbox' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t lg:hidden shadow-lg">
      <div className="flex justify-around py-2 max-w-7xl mx-auto">
        {navItems.map(({ icon: Icon, label, href, active }, index) => (
          <Link 
            key={index} 
            href={href}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors duration-200 ${
              active ? 'text-violet-600' : 'text-gray-400 hover:text-violet-600 hover:bg-violet-50'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}


import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="mb-8">
      <div className="relative">
        <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-400" />
        <input
          type="search"
          placeholder="Search for services..."
          className="w-full bg-violet-50 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow duration-200 text-violet-900 placeholder-violet-300"
        />
      </div>
    </div>
  );
}


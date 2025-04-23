'use client';

import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

export default function AdminNavbar({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <div className="flex-1 px-4 flex justify-between items-center">
        {/* Pencarian */}
        <div className="flex-1 flex">
          <div className="w-full max-w-md relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Ikon Notifikasi dan Profil */}
        <div className="ml-4 flex items-center space-x-4 md:ml-6">
          {/* Ikon Notifikasi */}
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
            <span className="sr-only">View notifications</span>
            <FaBell className="h-6 w-6" />
          </button>

          {/* Profil */}
          <div className="relative">
            <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
              <span className="sr-only">Open user menu</span>
              <FaUserCircle className="h-8 w-8 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

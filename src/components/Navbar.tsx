'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth_token='));
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🌍</span>
              <span className="text-white font-bold text-xl">TravelWorld</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`${
                pathname === '/' ? 'text-white border-b-2 border-white' : 'text-blue-100'
              } hover:text-white transition`}
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className={`${
                pathname === '/destinations' ? 'text-white border-b-2 border-white' : 'text-blue-100'
              } hover:text-white transition`}
            >
              Destinations
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  href="/add-destination"
                  className={`${
                    pathname === '/add-destination'
                      ? 'text-white border-b-2 border-white'
                      : 'text-blue-100'
                  } hover:text-white transition`}
                >
                  Add Destination
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

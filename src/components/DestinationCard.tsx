'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Destination {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
}

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href={`/destinations/${destination.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105 cursor-pointer h-full">
        <div className="relative h-48 w-full">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{destination.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{destination.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold text-lg">${destination.price}</span>
            {destination.rating && (
              <span className="text-yellow-500 font-semibold">⭐ {destination.rating}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

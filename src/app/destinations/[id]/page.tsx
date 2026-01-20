'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { toast } from 'sonner';

interface Destination {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  details?: string;
  bestTime?: string;
  attractions?: string[];
}

export default function DestinationDetailsPage() {
  const params = useParams();
  const id = params.id;
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/destinations/${id}`);
        if (response.ok) {
          const data = await response.json();
          setDestination(data);
        } else {
          toast.error('Destination not found');
          setTimeout(() => router.push('/destinations'), 1000);
        }
      } catch (error) {
        toast.error('Failed to load destination details');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDestination();
    }
  }, [id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-600">Loading destination details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!destination) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <button
          onClick={() => router.back()}
          className="text-blue-600 hover:text-blue-700 mb-8 font-semibold"
        >
          ← Back to Destinations
        </button>

        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8 shadow-lg">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-3xl font-bold text-blue-600">${destination.price}</span>
              <span className="text-gray-600 ml-2">per person</span>
            </div>
            <div className="text-2xl font-bold">
              ⭐ {destination.rating}/5
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-6">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{destination.description}</p>
          </div>

          {destination.details && (
            <div className="border-l-4 border-purple-600 pl-6">
              <h2 className="text-2xl font-bold mb-4">About This Destination</h2>
              <p className="text-gray-700 leading-relaxed">{destination.details}</p>
            </div>
          )}

          {destination.bestTime && (
            <div className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold mb-4">Best Time to Visit</h2>
              <p className="text-gray-700 leading-relaxed text-lg font-semibold">{destination.bestTime}</p>
            </div>
          )}

          {destination.attractions && destination.attractions.length > 0 && (
            <div className="border-l-4 border-orange-600 pl-6">
              <h2 className="text-2xl font-bold mb-4">Top Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.attractions.map((attraction, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
                    <p className="text-gray-700 flex items-center">
                      <span className="text-blue-600 mr-3 text-xl">📍</span>
                      <span>{attraction}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-8 border-t-2 border-gray-200">
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-bold text-lg transition shadow-lg">
              Book This Destination Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1: Hero with Background Image */}
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
          <p className="text-xl mb-8">Discover amazing destinations and create unforgettable memories</p>
          <Link
            href="/destinations"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition inline-block"
          >
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose TravelWorld?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-3">Best Deals</h3>
              <p className="text-gray-600">Get the best prices on flights and accommodations worldwide</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold mb-3">Expert Guides</h3>
              <p className="text-gray-600">Local experts to help you discover hidden gems</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Safe & Secure</h3>
              <p className="text-gray-600">Your safety and security is our top priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Popular Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="rounded-lg p-8 text-white text-center hover:shadow-lg transition h-64 flex flex-col items-center justify-center bg-cover bg-center relative"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=500&fit=crop")'
              }}>
              <div className="text-5xl mb-4">🗼</div>
              <h3 className="text-2xl font-bold mb-2">Paris</h3>
              <p>The City of Light</p>
            </div>
            <div 
              className="rounded-lg p-8 text-white text-center hover:shadow-lg transition h-64 flex flex-col items-center justify-center bg-cover bg-center relative"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1540959375944-7049f642e9c6?w=500&h=500&fit=crop")'
              }}>
              <div className="text-5xl mb-4">🗾</div>
              <h3 className="text-2xl font-bold mb-2">Tokyo</h3>
              <p>Modern and Tradition</p>
            </div>
            <div 
              className="rounded-lg p-8 text-white text-center hover:shadow-lg transition h-64 flex flex-col items-center justify-center bg-cover bg-center relative"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=500&fit=crop")'
              }}>
              <div className="text-5xl mb-4">🗽</div>
              <h3 className="text-2xl font-bold mb-2">New York</h3>
              <p>The Big Apple</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Statistics */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg">Destinations</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100K+</div>
              <p className="text-lg">Happy Travelers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-lg">Countries</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Special Offers */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="rounded-lg p-8 shadow-lg bg-cover bg-center relative"
              style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("https://images.unsplash.com/photo-1562883676-8c5a5a1b1b5f?w=600&h=400&fit=crop")'
              }}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Summer Sale - 30% Off</h3>
              <p className="text-gray-600 mb-4">Book your summer vacation and save up to 30% on selected destinations</p>
              <Link href="/destinations" className="text-blue-600 font-bold hover:underline">
                View Offers →
              </Link>
            </div>
            <div 
              className="rounded-lg p-8 shadow-lg bg-cover bg-center relative"
              style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop")'
              }}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Loyalty Rewards</h3>
              <p className="text-gray-600 mb-4">Get rewarded for every trip! Earn points and unlock exclusive benefits</p>
              <Link href="/login" className="text-blue-600 font-bold hover:underline">
                Sign Up Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', text: 'Amazing experience! The best travel website I have used.' },
              { name: 'John Doe', text: 'Great deals and excellent customer support throughout my journey.' },
              { name: 'Emma Wilson', text: 'Discovered hidden gems and made unforgettable memories!' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA with Background Image */}
      <section 
        className="py-20 text-white text-center bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop")'
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8">Join thousands of travelers exploring the world with TravelWorld</p>
          <div className="space-x-4">
            <Link
              href="/destinations"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition inline-block"
            >
              Explore Destinations
            </Link>
            <Link
              href="/login"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-bold transition inline-block"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

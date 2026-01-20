export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">About TravelWorld</h3>
            <p className="text-sm">Discover amazing destinations around the globe.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Destinations</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>Email: info@travelworld.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2026 TravelWorld. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

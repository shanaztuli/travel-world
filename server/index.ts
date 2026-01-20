import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample destination data - LOTS OF DESTINATIONS
let destinations = [
  {
    id: 1,
    name: 'Paris, France',
    description: 'The City of Light awaits with its iconic Eiffel Tower, world-class museums, and charming cafés.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=500&fit=crop',
    rating: 4.8,
    details: 'Paris is the capital and most populous city of France. With an estimated population of 2,161,000 residents within the city proper, Paris is the eighth-largest city in the European Union.',
    bestTime: 'April to June, September to October',
    attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Arc de Triomphe'],
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    description: 'Experience the perfect blend of ancient tradition and cutting-edge modernity in Japan\'s vibrant capital.',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9c6?w=500&h=500&fit=crop',
    rating: 4.9,
    details: 'Tokyo is the capital of Japan and the most populated city in the world. The city is known for its modern architecture and high-tech amenities.',
    bestTime: 'March to May, September to November',
    attractions: ['Senso-ji Temple', 'Shinjuku', 'Shibuya Crossing', 'Tokyo Tower'],
  },
  {
    id: 3,
    name: 'New York, USA',
    description: 'The city that never sleeps - Broadway shows, iconic skyscrapers, and diverse neighborhoods await.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=500&fit=crop',
    rating: 4.7,
    details: 'New York City is the most populous city in the United States and one of the most visited cities in the world.',
    bestTime: 'May to September, November to December',
    attractions: ['Statue of Liberty', 'Times Square', 'Central Park', 'Empire State Building'],
  },
  {
    id: 4,
    name: 'Barcelona, Spain',
    description: 'Discover Gaudí\'s masterpieces, beautiful beaches, and vibrant nightlife in this Mediterranean city.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1562883676-8c5a5a1b1b5f?w=500&h=500&fit=crop',
    rating: 4.6,
    details: 'Barcelona is the capital city of Catalonia. It is the second-largest city in Spain and the sixth-most populous in Europe.',
    bestTime: 'April to May, September to October',
    attractions: ['Sagrada Familia', 'Park Güell', 'Gothic Quarter', 'La Rambla'],
  },
  {
    id: 5,
    name: 'Sydney, Australia',
    description: 'Iconic beaches, the magnificent Opera House, and world-class cuisine in the land down under.',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
    rating: 4.8,
    details: 'Sydney is the state capital of New South Wales and the most populous city in Australia.',
    bestTime: 'December to February (Summer)',
    attractions: ['Sydney Opera House', 'Bondi Beach', 'Harbour Bridge', 'Royal Botanic Garden'],
  },
  {
    id: 6,
    name: 'Dubai, UAE',
    description: 'Ultra-modern luxury in the desert - stunning architecture, shopping, and vibrant culture.',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1512453694671-e7c66a65ee8d?w=500&h=500&fit=crop',
    rating: 4.5,
    details: 'Dubai is a city and emirate in the United Arab Emirates. It is the most populous city in the UAE.',
    bestTime: 'November to April',
    attractions: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Desert Safari'],
  },
  {
    id: 7,
    name: 'Rome, Italy',
    description: 'Walk through history in the Eternal City with ancient ruins, Renaissance art, and incredible food.',
    price: 980,
    image: 'https://images.unsplash.com/photo-1552832230-7c37d2c6d94f?w=500&h=500&fit=crop',
    rating: 4.9,
    details: 'Rome is the capital city of Italy and a former capital of the greatest empires in history.',
    bestTime: 'April to June, September to October',
    attractions: ['Colosseum', 'Vatican Museums', 'Roman Forum', 'Trevi Fountain'],
  },
  {
    id: 8,
    name: 'Bangkok, Thailand',
    description: 'Experience ornate temples, bustling markets, and delicious street food in Southeast Asia\'s vibrant hub.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop',
    rating: 4.7,
    details: 'Bangkok is the capital and largest city of Thailand. It is the most visited city in the world.',
    bestTime: 'November to February',
    attractions: ['Grand Palace', 'Wat Pho', 'Floating Markets', 'Lumphini Park'],
  },
  {
    id: 9,
    name: 'Barcelona Beach, Spain',
    description: 'Golden beaches, Mediterranean warmth, and tapas by the sea in this coastal paradise.',
    price: 820,
    image: 'https://images.unsplash.com/photo-1583077260404-3934483e0eb0?w=500&h=500&fit=crop',
    rating: 4.6,
    details: 'Barcelona\'s beaches offer a perfect blend of urban culture and seaside relaxation with crystal-clear waters.',
    bestTime: 'May to September',
    attractions: ['Barceloneta Beach', 'Port Vell', 'Beach Bars', 'Water Sports'],
  },
  {
    id: 10,
    name: 'Amsterdam, Netherlands',
    description: 'Cruise through charming canals, visit world-renowned museums, and explore Dutch culture.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1520034475321-cda63d715742?w=500&h=500&fit=crop',
    rating: 4.8,
    details: 'Amsterdam is the capital and most populous city of the Netherlands.',
    bestTime: 'April to May, September to October',
    attractions: ['Anne Frank House', 'Van Gogh Museum', 'Canal Cruises', 'Bikes'],
  },
  {
    id: 11,
    name: 'Venice, Italy',
    description: 'The city of canals - romantic gondola rides, historic palaces, and timeless beauty.',
    price: 1050,
    image: 'https://images.unsplash.com/photo-1629154475277-3f72ae0c4e1c?w=500&h=500&fit=crop',
    rating: 4.7,
    details: 'Venice is a city in northeastern Italy and the capital of the Veneto region, built on an archipelago of 118 islands.',
    bestTime: 'April to May, September to October',
    attractions: ['St. Mark\'s Basilica', 'Grand Canal', 'Gondolas', 'Doge\'s Palace'],
  },
  {
    id: 12,
    name: 'Bali, Indonesia',
    description: 'Tropical paradise with ancient temples, pristine beaches, and rich cultural traditions.',
    price: 680,
    image: 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=500&h=500&fit=crop',
    rating: 4.8,
    details: 'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, and beautiful temples.',
    bestTime: 'April to June, September to November',
    attractions: ['Tanah Lot Temple', 'Ubud', 'Rice Terraces', 'Beaches'],
  },
  {
    id: 13,
    name: 'Miami, USA',
    description: 'Sunny beaches, vibrant nightlife, art deco architecture, and multicultural cuisine await you.',
    price: 780,
    image: 'https://images.unsplash.com/photo-1530132711175-a8c99de4c4da?w=500&h=500&fit=crop',
    rating: 4.5,
    details: 'Miami is a coastal city in the southeastern United States with an Art Deco historic district.',
    bestTime: 'November to April',
    attractions: ['South Beach', 'Art Deco District', 'Wynwood Walls', 'Everglades'],
  },
  {
    id: 14,
    name: 'Istanbul, Turkey',
    description: 'Where Europe meets Asia - historic mosques, bustling bazaars, and Bosphorus views.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1524511751213-20f7fdc96700?w=500&h=500&fit=crop',
    rating: 4.6,
    details: 'Istanbul is the capital of Turkey, one of the oldest cities in the world, straddling two continents.',
    bestTime: 'April to May, September to November',
    attractions: ['Blue Mosque', 'Hagia Sophia', 'Grand Bazaar', 'Bosphorus Cruise'],
  },
  {
    id: 15,
    name: 'London, United Kingdom',
    description: 'Historic landmarks, royal palaces, world-class museums, and iconic red buses and phone boxes.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=500&fit=crop',
    rating: 4.7,
    details: 'London is the capital city of England and the United Kingdom. It is one of the largest and most important cities in the world.',
    bestTime: 'May to September',
    attractions: ['Big Ben', 'Tower of London', 'British Museum', 'Buckingham Palace'],
  },
];

// Routes

// GET all destinations
app.get('/api/destinations', (req, res) => {
  res.json(destinations);
});

// GET single destination
app.get('/api/destinations/:id', (req, res) => {
  const destination = destinations.find((d) => d.id === parseInt(req.params.id));
  if (destination) {
    res.json(destination);
  } else {
    res.status(404).json({ error: 'Destination not found' });
  }
});

// POST new destination
app.post('/api/destinations', (req, res) => {
  const { name, description, price, image, rating, details, bestTime } = req.body;

  if (!name || !description || !price || !image || !rating) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newDestination = {
    id: Math.max(...destinations.map((d) => d.id), 0) + 1,
    name,
    description,
    price: parseFloat(price),
    image,
    rating: parseFloat(rating),
    details: details || '',
    bestTime: bestTime || '',
    attractions: [],
  };

  destinations.push(newDestination);
  res.status(201).json(newDestination);
});

// PUT update destination
app.put('/api/destinations/:id', (req, res) => {
  const destination = destinations.find((d) => d.id === parseInt(req.params.id));
  if (!destination) {
    return res.status(404).json({ error: 'Destination not found' });
  }

  const { name, description, price, image, rating, details, bestTime } = req.body;
  if (name) destination.name = name;
  if (description) destination.description = description;
  if (price) destination.price = parseFloat(price);
  if (image) destination.image = image;
  if (rating) destination.rating = parseFloat(rating);
  if (details) destination.details = details;
  if (bestTime) destination.bestTime = bestTime;

  res.json(destination);
});

// DELETE destination
app.delete('/api/destinations/:id', (req, res) => {
  const index = destinations.findIndex((d) => d.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Destination not found' });
  }

  const deleted = destinations.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📍 API available at http://localhost:${PORT}/api/destinations`);
});

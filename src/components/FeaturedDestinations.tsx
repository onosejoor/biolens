import React from 'react';
import DestinationCard from './DestinationCard';

const destinations = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg',
    location: 'Santorini, Greece',
    title: 'Luxury Villa with Ocean View',
    price: '299',
    rating: 4.9,
    reviews: 182,
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    location: 'Bali, Indonesia',
    title: 'Tropical Paradise Resort',
    price: '199',
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/2598683/pexels-photo-2598683.jpeg',
    location: 'Tulum, Mexico',
    title: 'Beachfront Luxury Suite',
    price: '249',
    rating: 4.7,
    reviews: 124,
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    location: 'Alps, Switzerland',
    title: 'Mountain Chalet Retreat',
    price: '329',
    rating: 4.9,
    reviews: 98,
  },
];

const FeaturedDestinations: React.FC = () => {
  return (
    <section id="destinations" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Featured Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of stunning properties in the most sought-after
            destinations around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              location={destination.location}
              title={destination.title}
              price={destination.price}
              rating={destination.rating}
              reviews={destination.reviews}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-teal-700 border-2 border-teal-500 hover:bg-teal-50 font-medium rounded-lg px-6 py-3 transition-colors">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
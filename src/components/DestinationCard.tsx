import React from 'react';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  location: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  location,
  title,
  price,
  rating,
  reviews,
}) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full py-1 px-3 text-sm font-medium text-gray-700 shadow-sm">
          ${price}/night
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <MapPin className="w-4 h-4 text-teal-500 mr-1" />
          <span className="text-gray-500 text-sm">{location}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2 group-hover:text-teal-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-center">
          <div className="flex mr-2">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-300'
                } fill-current`}
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-500 text-sm">
            {rating} ({reviews} reviews)
          </span>
        </div>
        <button className="w-full mt-4 bg-teal-50 text-teal-700 border border-teal-200 rounded-lg py-2 font-medium transition-colors hover:bg-teal-100 hover:border-teal-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
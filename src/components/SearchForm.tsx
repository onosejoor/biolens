import React, { useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const SearchForm: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Where to?
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full py-3 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onClick={() => setIsExpanded(true)}
              />
            </div>
          </div>

          {isExpanded && (
            <>
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dates
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Add dates"
                    className="w-full py-3 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex-1 mb-4 md:mb-0">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Add guests"
                    className="w-full py-3 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          <div className="md:ml-2">
            <button
              className="w-full md:w-auto bg-gradient-to-r from-teal-500 to-teal-700 text-white px-6 py-3 rounded-lg font-medium hover:from-teal-600 hover:to-teal-800 transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => setIsExpanded(true)}
            >
              {isExpanded ? 'Search' : 'Explore'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
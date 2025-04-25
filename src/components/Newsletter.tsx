import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Exclusive Travel Deals
          </h2>
          <p className="text-white text-opacity-90 mb-8 text-lg">
            Subscribe to our newsletter and be the first to receive special offers,
            travel inspiration, and expert tips.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300 pr-14"
              required
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:from-teal-600 hover:to-teal-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>

          {isSubscribed && (
            <div className="mt-4 text-white bg-white bg-opacity-20 rounded-lg px-4 py-3 inline-block">
              Thank you for subscribing! Check your inbox soon.
            </div>
          )}

          <p className="mt-5 text-sm text-white text-opacity-80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
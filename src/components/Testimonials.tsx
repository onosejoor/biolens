import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  location,
  image,
}) => (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 relative">
    <Quote className="absolute top-6 left-6 w-8 h-8 text-teal-100" />
    <div className="pl-5">
      <p className="text-gray-700 italic mb-6">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "TravelEase made our honeymoon planning so simple. We found the perfect villa in Santorini with an amazing view. The booking process was seamless!",
      author: "Sarah & James",
      location: "New York, USA",
      image: "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg",
    },
    {
      id: 2,
      quote:
        "As a frequent business traveler, I appreciate how quick and reliable this platform is. I've booked over 20 stays and every one has been perfect.",
      author: "Michael Chen",
      location: "Singapore",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    },
    {
      id: 3,
      quote:
        "Our family vacation was a dream come true thanks to TravelEase. The property was exactly as described, and the customer service was exceptional.",
      author: "The Rodriguez Family",
      location: "Madrid, Spain",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from travelers who have experienced
            the TravelEase difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
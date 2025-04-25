import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    "20+ Years of Excellence",
    "ISO 9001:2015 Certified",
    "Expert Research Team",
    "24/7 Technical Support"
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Leading the Way in Laboratory Innovation
            </h2>
            <p className="text-gray-400 mb-8">
              Lab Bolt has been at the forefront of laboratory innovation for over two decades. 
              We combine cutting-edge technology with expertise to deliver exceptional results 
              for our clients across various industries.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-[#ffd700] mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
                alt="Laboratory"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
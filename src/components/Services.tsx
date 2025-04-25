import React from 'react';
import { FlaskRound as Flask, Microscope, Database, Brain } from 'lucide-react';

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-gray-800 hover:border-[#ffd700] transition-all">
    <div className="text-[#ffd700] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Flask className="h-8 w-8" />,
      title: "Lab Analysis",
      description: "State-of-the-art analytical services with precise results and quick turnaround times."
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Research Support",
      description: "Comprehensive research assistance with advanced equipment and expert guidance."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Management",
      description: "Secure and efficient laboratory data management systems for better organization."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Innovation Lab",
      description: "Cutting-edge facilities for experimental research and innovative developments."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive laboratory solutions to meet your research and development needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
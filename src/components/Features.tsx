import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, FlaskRound as Flask, Database, Brain, Network, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "State-of-the-art analytical tools powered by machine learning"
    },
    {
      icon: <Flask className="h-8 w-8" />,
      title: "Clinical Research",
      description: "Comprehensive research support and collaboration tools"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Secure Data",
      description: "Enterprise-grade security for your research data"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Integration",
      description: "Cutting-edge AI algorithms for data analysis"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Global Network",
      description: "Connect with researchers worldwide"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "24/7 support from our expert community"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4"
          >
            Our Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Empowering clinical research through innovative technology and community collaboration
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-[#1a237e] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#1a237e] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
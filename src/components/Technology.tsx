import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Shield, Zap } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="py-16 md:py-24 bg-[#1a237e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Advanced Technology
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Powered by cutting-edge AI and machine learning algorithms
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg p-8"
          >
            <img
              src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
              alt="AI Technology"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-[#1a237e] mb-4">AI-Powered Analysis</h3>
            <p className="text-gray-600">
              Our advanced AI algorithms process and analyze clinical data with unprecedented accuracy,
              helping researchers make breakthrough discoveries.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-white rounded-lg p-6 flex items-start">
              <Cpu className="h-8 w-8 text-[#1a237e] mr-4" />
              <div>
                <h4 className="text-xl font-semibold text-[#1a237e] mb-2">Machine Learning</h4>
                <p className="text-gray-600">Advanced algorithms that learn and adapt to your research needs</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex items-start">
              <Database className="h-8 w-8 text-[#1a237e] mr-4" />
              <div>
                <h4 className="text-xl font-semibold text-[#1a237e] mb-2">Big Data Processing</h4>
                <p className="text-gray-600">Handle large datasets with efficient processing capabilities</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex items-start">
              <Shield className="h-8 w-8 text-[#1a237e] mr-4" />
              <div>
                <h4 className="text-xl font-semibold text-[#1a237e] mb-2">Secure Infrastructure</h4>
                <p className="text-gray-600">Enterprise-grade security for your sensitive research data</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex items-start">
              <Zap className="h-8 w-8 text-[#1a237e] mr-4" />
              <div>
                <h4 className="text-xl font-semibold text-[#1a237e] mb-2">Real-time Analysis</h4>
                <p className="text-gray-600">Instant insights from your clinical data</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
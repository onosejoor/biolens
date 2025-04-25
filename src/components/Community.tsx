import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, MessageSquare, Award } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4"
          >
            Join Our Community
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Connect with researchers and healthcare professionals worldwide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Users className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1a237e] mb-2">10,000+</h3>
            <p className="text-gray-600">Active Members</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <Globe className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1a237e] mb-2">50+</h3>
            <p className="text-gray-600">Countries</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <MessageSquare className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1a237e] mb-2">5,000+</h3>
            <p className="text-gray-600">Research Discussions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Award className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1a237e] mb-2">200+</h3>
            <p className="text-gray-600">Published Papers</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="bg-[#1a237e] text-white px-8 py-3 rounded-md font-medium hover:bg-[#283593] transition-colors">
            Join Our Community
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
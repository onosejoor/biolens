import { motion } from 'framer-motion';
import { Brain, Network, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#1a237e] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Welcome to <span className="text-white">BioLens</span> Community
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Advancing clinical research through AI-powered collaboration and community-driven innovation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-[#1a237e] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
              Join Our Network
              <Network className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-[#1a237e] transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <Brain className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-300">Advanced machine learning algorithms for clinical research</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <Network className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Global Network</h3>
            <p className="text-gray-300">Connect with researchers worldwide</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <Users className="h-12 w-12 text-white mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Community Driven</h3>
            <p className="text-gray-300">Collaborative research and knowledge sharing</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
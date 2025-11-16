import { motion } from 'framer-motion';
import { FaPlayCircle, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import VideoModal from './VideoModal';

const HeroNoRouter = ({ backgroundVideo, onPortfolioClick, onDemoClick, demoVideoUrl }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const handlePortfolioClick = () => {
    // Scroll to portfolio section
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onPortfolioClick) {
      onPortfolioClick();
    }
  };

  const handleDemoClick = () => {
    if (demoVideoUrl) {
      // Open video modal if video URL is provided
      setIsVideoModalOpen(true);
    } else if (onDemoClick) {
      // Fallback to custom handler if no video URL
      onDemoClick();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Background Video Overlay */}
      {backgroundVideo && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      )}

      {/* Animated Background Gradient (fallback if no video) */}
      {!backgroundVideo && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Profile Picture Circle */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-col items-center">
            <div className="relative mb-4">
              {/* Circle Photo with Gradient Border */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-1">
                  <div className="relative w-full h-full bg-gray-900 rounded-full overflow-hidden">
                    <img
                      src="/images/profile-photo.jpg"
                      alt="Purnima Rani - Video Editor"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback agar image nahi mile
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">PR</div>';
                      }}
                    />
                  </div>
                </div>
                
                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 animate-pulse"></div>
              </div>
              
              {/* Floating Particles Effect */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
            </div>
            
            {/* Profession Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm sm:text-base font-medium shadow-lg"
            >
              Video Editor
            </motion.div>
          </motion.div>

          {/* Main Heading - Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Purnima Rani
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Blending creativity and precision to produce engaging video content
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <motion.button
              onClick={handlePortfolioClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background gradient */}
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Button content */}
              <span className="relative flex items-center gap-2">
                <span>View Portfolio</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            </motion.button>

            {/* Optional: Play Demo Video Button */}
            <motion.button
              onClick={handleDemoClick}
              className="group flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlayCircle className="text-xl" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block z-20"
      >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -z-0"></div>

      {/* Video Modal */}
      {demoVideoUrl && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl={demoVideoUrl}
        />
      )}
    </section>
  );
};

export default HeroNoRouter;


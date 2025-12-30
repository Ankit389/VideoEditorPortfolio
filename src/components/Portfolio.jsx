import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPlay, FaTimes, FaVolumeUp, FaVolumeMute, FaPause, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import VideoModal from './VideoModal';

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Google Drive Videos Folder - All videos yahan upload kiye gaye hain
  const GOOGLE_DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/11nfb0LedRW5CBDohDlYuqg6raQw2tJlu?usp=sharing";
  
  // Videos - Ek video card jo Google Drive folder link par redirect karega
  const videos = [
    {
      id: 1,
      title: "My Video Portfolio",
      description: "View all my video editing work on Google Drive",
      // Google Drive folder link - video card par click karne par folder open hoga
      url: GOOGLE_DRIVE_FOLDER_URL,
      thumbnail: null,
      isFolder: true, // Flag to indicate it's a folder link
    },
  ];

  const handleVideoClick = (video) => {
    // Agar folder link hai, to directly Google Drive folder open karo
    if (video.isFolder || video.url.includes('/folders/')) {
      window.open(video.url, '_blank');
      return;
    }
    // Regular video ke liye modal open karo
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Explore my video editing work and creative projects
            </p>
          </motion.div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                {/* Video Thumbnail Container */}
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : video.url && video.url.includes("drive.google.com") ? (
                    // Google Drive folder/video - thumbnail placeholder
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <FaFolderOpen className="text-5xl text-white/60 mx-auto mb-2" />
                        <p className="text-white/50 text-sm">Google Drive</p>
                      </div>
                    </div>
                  ) : (
                    // Regular video preview (first frame)
                    <video
                      src={video.url}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-2xl"
                    >
                      <FaPlay className="text-3xl ml-1" />
                    </motion.div>
                  </div>

                  {/* Video Number Badge */}
                  {!video.isFolder && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      Video {video.id}
                    </div>
                  )}
                  {/* Google Drive Badge */}
                  {video.isFolder && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center gap-1">
                      <FaFolderOpen className="text-xs" />
                      <span>All Videos</span>
                    </div>
                  )}

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {video.description || "Click to watch"}
                  </p>
                  {video.isFolder && (
                    <div className="flex items-center gap-2 text-blue-400 text-xs">
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Opens Google Drive</span>
                    </div>
                  )}
                </div>

                {/* Border Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10"></div>
              </motion.div>
            ))}
          </div>

          {/* Google Drive Folder Link Button */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <motion.a
              href={GOOGLE_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300"
            >
              <FaFolderOpen className="text-xl" />
              <span>View All Videos on Google Drive</span>
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Want to see more? Get in touch!
            </p>
            <motion.button
              onClick={() => {
                const footer = document.getElementById('footer') || document.querySelector('footer');
                footer?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoUrl={selectedVideo.url}
        />
      )}
    </section>
  );
};

export default Portfolio;



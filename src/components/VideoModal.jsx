import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Auto-play video when modal opens
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Auto-play prevented:', error);
        // Some browsers prevent auto-play, user will need to click play
      });
      setIsPlaying(true);
    }
  }, [isOpen]);

  // Pause video when modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume > 0) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                aria-label="Close modal"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Video Container */}
              <div className="relative w-full aspect-video bg-black">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full h-full object-contain"
                  controls={false}
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Custom Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none">
                  {/* Play/Pause Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                    <motion.button
                      onClick={togglePlay}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <FaPause className="text-3xl" />
                      ) : (
                        <FaPlay className="text-3xl ml-1" />
                      )}
                    </motion.button>
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-auto">
                    <div className="flex items-center gap-4">
                      {/* Mute Button */}
                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? (
                          <FaVolumeMute className="text-lg" />
                        ) : (
                          <FaVolumeUp className="text-lg" />
                        )}
                      </button>

                      {/* Volume Slider */}
                      <div className="flex-1 flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-500"
                        />
                        <span className="text-white text-sm w-12 text-right">
                          {Math.round(volume * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info (Optional) */}
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Demo Video
                </h3>
                <p className="text-gray-400 text-sm">
                  Watch this demo to see my video editing skills in action
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;



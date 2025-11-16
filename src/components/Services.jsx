import { motion } from 'framer-motion';
import { 
  FaVideo, 
  FaYoutube, 
  FaInstagram, 
  FaRocket,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const Services = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  // Services data
  const services = [
    {
      id: 1,
      title: 'Professional Video Editing',
      description: 'High-quality video editing with attention to detail, seamless cuts, transitions, and professional-grade post-production work.',
      icon: FaVideo,
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-500/70',
      features: ['Color Correction', 'Audio Mixing', 'Transitions', 'Effects']
    },
    {
      id: 2,
      title: 'YouTube Videos & Shorts',
      description: 'Engaging YouTube content optimized for retention, including long-form videos and attention-grabbing Shorts format.',
      icon: FaYoutube,
      color: 'from-red-500 to-pink-500',
      iconColor: 'text-red-500',
      bgGradient: 'from-red-500/10 to-pink-500/10',
      borderColor: 'border-red-500/30',
      hoverBorder: 'hover:border-red-500/70',
      features: ['Thumbnail Design', 'SEO Optimization', 'Hook Creation', 'Engagement']
    },
    {
      id: 3,
      title: 'Instagram Reels & Social Media Edits',
      description: 'Trendy, eye-catching Reels and social media content designed to maximize engagement and reach on platforms.',
      icon: FaInstagram,
      color: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-500/70',
      features: ['Trend Adaptation', 'Viral Hooks', 'Text Overlay', 'Music Sync']
    },
    {
      id: 4,
      title: 'Ready-to-Post Content',
      description: 'Fully edited, polished content ready for immediate upload. No revisions needed - perfect content every time.',
      icon: FaRocket,
      color: 'from-orange-500 to-yellow-500',
      iconColor: 'text-orange-500',
      bgGradient: 'from-orange-500/10 to-yellow-500/10',
      borderColor: 'border-orange-500/30',
      hoverBorder: 'hover:border-orange-500/70',
      features: ['Quick Turnaround', 'Zero Revisions', 'All Formats', 'Optimized']
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                What I Offer
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive video editing services tailored to your needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  {/* Service Card */}
                  <div className={`
                    relative h-full bg-gray-800/50 backdrop-blur-sm 
                    border ${service.borderColor} ${service.hoverBorder}
                    rounded-2xl p-6 sm:p-8
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:shadow-purple-500/20
                    overflow-hidden
                  `}>
                    {/* Gradient Background on Hover */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-br ${service.bgGradient}
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      -z-0
                    `}></div>

                    {/* Animated Border Glow */}
                    <div className={`
                      absolute inset-0 rounded-2xl
                      bg-gradient-to-r ${service.color}
                      opacity-0 group-hover:opacity-20
                      transition-opacity duration-300
                      blur-xl -z-10
                    `}></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`
                          w-16 h-16 sm:w-20 sm:h-20
                          rounded-2xl bg-gradient-to-br ${service.color}
                          flex items-center justify-center
                          mb-6 shadow-lg
                          group-hover:shadow-xl group-hover:shadow-purple-500/50
                          transition-all duration-300
                        `}
                      >
                        <IconComponent className="text-white text-2xl sm:text-3xl" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                            className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                          >
                            <FaCheckCircle className={`${service.iconColor} text-xs flex-shrink-0`} />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <motion.div
                        className="flex items-center gap-2 text-sm font-medium text-purple-400 group-hover:text-pink-400 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span>Learn More</span>
                        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    </div>

                    {/* Hover Effect - Shine */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-8 py-4
                bg-gradient-to-r from-purple-600 to-pink-600
                text-white font-semibold rounded-full
                shadow-lg shadow-purple-500/50
                hover:shadow-xl hover:shadow-purple-500/70
                transition-all duration-300
                flex items-center gap-2 mx-auto
              "
            >
              <span>Get Started</span>
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;







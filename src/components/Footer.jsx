import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Social links data
  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:businesswriter33@gmail.com',
      icon: FaEnvelope,
      color: 'text-gray-400 hover:text-red-500',
      bgColor: 'bg-gray-800 hover:bg-red-500/20',
      borderColor: 'border-gray-700 hover:border-red-500',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/purnima-rani-648085330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: FaLinkedin,
      color: 'text-gray-400 hover:text-blue-500',
      bgColor: 'bg-gray-800 hover:bg-blue-500/20',
      borderColor: 'border-gray-700 hover:border-blue-500',
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/purnima3002?t=umpT-5pX9FqXlGRRGNE4UA&s=09',
      icon: FaTwitter,
      color: 'text-gray-400 hover:text-sky-400',
      bgColor: 'bg-gray-800 hover:bg-sky-400/20',
      borderColor: 'border-gray-700 hover:border-sky-400',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/19uw6RjaGc/',
      icon: FaFacebook,
      color: 'text-gray-400 hover:text-blue-600',
      bgColor: 'bg-gray-800 hover:bg-blue-600/20',
      borderColor: 'border-gray-700 hover:border-blue-600',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/freelanc_content10?utm_source=qr&igsh=YWIzd2lrNDlsdHN0',
      icon: FaInstagram,
      color: 'text-gray-400 hover:text-pink-500',
      bgColor: 'bg-gray-800 hover:bg-pink-500/20',
      borderColor: 'border-gray-700 hover:border-pink-500',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Purnima Rani
                </span>
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                Professional Video Editor specializing in creating engaging content for social media and digital platforms.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Blending creativity and precision to produce exceptional video content.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Portfolio'].map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base inline-flex items-center gap-2 group"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(link.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        } else if (link === 'Home') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Get In Touch
              </h4>
              <a
                href="mailto:businesswriter33@gmail.com"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm sm:text-base mb-6 group"
              >
                <FaEnvelope className="text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="break-all">businesswriter33@gmail.com</span>
              </a>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        ${social.bgColor}
                        ${social.borderColor}
                        ${social.color}
                        w-12 h-12 sm:w-14 sm:h-14
                        rounded-xl border
                        flex items-center justify-center
                        transition-all duration-300
                        backdrop-blur-sm
                        shadow-lg hover:shadow-xl
                        group
                      `}
                      aria-label={social.name}
                    >
                      <IconComponent className="text-lg sm:text-xl transform group-hover:rotate-12 transition-transform duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700/50 my-8"></div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-gray-500 text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1">
                © {new Date().getFullYear()} Purnima Rani. Made with{' '}
                <FaHeart className="text-red-500 text-xs animate-pulse inline" />{' '}
                for Video Editing Excellence.
              </p>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="
                w-10 h-10 sm:w-12 sm:h-12
                bg-gradient-to-r from-purple-600 to-pink-600
                rounded-full
                flex items-center justify-center
                text-white
                shadow-lg hover:shadow-xl hover:shadow-purple-500/50
                transition-all duration-300
                group
              "
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-sm sm:text-base transform group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;



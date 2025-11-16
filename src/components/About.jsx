import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { 
  FaVideo, 
  FaPalette, 
  FaMagic, 
  FaPaintBrush,
  FaMobileAlt 
} from 'react-icons/fa';

const About = ({ profilePicture }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  // Skills data
  const skills = [
    { name: 'CapCut', icon: FaVideo, color: 'text-blue-500' },
    { name: 'VN', icon: FaMobileAlt, color: 'text-purple-500' },
    { name: 'Canva', icon: FaMagic, color: 'text-green-500' },
    { name: 'Motion Graphics', icon: FaPalette, color: 'text-pink-500' },
    { name: 'Color Grading', icon: FaPaintBrush, color: 'text-orange-500' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Profile Picture & Info */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              {/* Profile Picture */}
              {profilePicture ? (
                <div className="relative mb-8 max-w-md mx-auto lg:max-w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-1">
                      <div className="relative h-full w-full bg-gray-900 rounded-2xl overflow-hidden">
                        <img
                          src={profilePicture}
                          alt="Purnima Rani - Video Editor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl -z-10"></div>
                </div>
              ) : (
                // Placeholder if no profile picture
                <div className="relative mb-8 max-w-md mx-auto lg:max-w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-1">
                    <div className="relative h-96 bg-gray-800 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <FaVideo className="w-24 h-24 mx-auto text-purple-300/50 mb-4" />
                        <p className="text-gray-400 text-sm">Profile Picture</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right Column - Summary & Skills */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              {/* Professional Summary */}
              <motion.div
                variants={itemVariants}
                className="mb-8 sm:mb-10"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  Professional Summary
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-base sm:text-lg">
                    I'm a passionate and creative video editor with a keen eye for detail and a love for storytelling through visual media. 
                    With expertise in modern editing tools and techniques, I specialize in transforming raw footage into compelling, 
                    engaging content that captivates audiences.
                  </p>
                  <p className="text-base sm:text-lg">
                    My work combines technical precision with artistic vision, ensuring every project meets the highest standards 
                    of quality while maintaining creative authenticity. I thrive on bringing ideas to life through seamless 
                    editing, dynamic motion graphics, and meticulous color grading.
                  </p>
                  <p className="text-base sm:text-lg">
                    Whether it's social media content, promotional videos, or cinematic productions, I approach each project 
                    with dedication and enthusiasm, always striving to exceed expectations and deliver exceptional results.
                  </p>
                </div>
              </motion.div>

              {/* Skills Section */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                  Skills & Expertise
                </h3>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          {/* Icon */}
                          <div className={`${skill.color} text-2xl group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent />
                          </div>
                          
                          {/* Skill Name */}
                          <div className="flex-1">
                            <p className="text-white font-medium text-base sm:text-lg">
                              {skill.name}
                            </p>
                            {/* Progress indicator (visual element) */}
                            <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '90%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className={`h-full bg-gradient-to-r ${skill.color.replace('text-', 'from-').replace('-500', '-500')} to-${skill.color.replace('text-', '').replace('-500', '-400')}`}
                                style={{
                                  background: `linear-gradient(to right, ${skill.color.includes('blue') ? '#3b82f6' : skill.color.includes('purple') ? '#a855f7' : skill.color.includes('green') ? '#10b981' : skill.color.includes('pink') ? '#ec4899' : '#f97316'}, ${skill.color.includes('blue') ? '#60a5fa' : skill.color.includes('purple') ? '#c084fc' : skill.color.includes('green') ? '#34d399' : skill.color.includes('pink') ? '#f472b6' : '#fb923c'})`
                                }}
                              ></motion.div>
                            </div>
                          </div>
                          
                          {/* Check mark */}
                          <FaCheckCircle className="text-green-500 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Decorative Elements */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/10 backdrop-blur-sm border border-purple-500/30 rounded-full">
              <FaCheckCircle className="text-purple-400" />
              <span className="text-gray-300 text-sm sm:text-base">
                Always Learning, Always Creating
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;







import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  PaintBrushIcon,
  PencilSquareIcon,
  VideoCameraIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive and modern web applications using the latest technologies.',
      icon: CodeBracketIcon,
    },
    {
      title: 'UI/UX Designing',
      description: 'Designing intuitive and beautiful user interfaces with a focus on user experience.',
      icon: PaintBrushIcon,
    },
    {
      title: 'Content Writing',
      description: 'Crafting engaging and SEO-optimized content for web and digital platforms.',
      icon: PencilSquareIcon,
    },
    {
      title: 'Video Editing',
      description: 'Professional video editing and post-production services.',
      icon: VideoCameraIcon,
    },
    {
      title: 'Entrance Test Mentoring',
      description: 'Guiding students through university entrance tests with personalized strategies.',
      icon: AcademicCapIcon,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Services</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group hover:bg-primary-light transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-secondary group-hover:text-secondary-light transition-colors duration-300" />
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 
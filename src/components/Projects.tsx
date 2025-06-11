import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Lexora App',
      status: 'Almost Complete',
      description: 'A mobile-first app designed to revolutionize the way people interact with [purpose]. Features include [key features]. Web version coming soon!',
      tags: ['Mobile App', 'React Native', 'Firebase'],
      image: '/path-to-lexora-image.jpg', // You'll need to add actual images
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="aspect-w-16 aspect-h-9 bg-primary-light">
                    {/* Add actual image here */}
                    <div className="w-full h-48 bg-primary-light flex items-center justify-center">
                      <span className="text-gray-400">Project Image</span>
                    </div>
                  </div>
                  {project.status && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-sm rounded-full bg-secondary text-white">
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-primary-light text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="btn btn-outline w-full">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
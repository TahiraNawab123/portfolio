import React from 'react';
import { motion } from 'framer-motion';

const Blogs: React.FC = () => {
  const blogs = [
    {
      title: 'The Future of AI in Pakistan',
      date: 'March 15, 2024',
      excerpt: "Exploring the potential impact of artificial intelligence on Pakistan's technological landscape...",
      image: '/path-to-blog-image.jpg',
      readTime: '5 min read',
      category: 'Technology',
    },
    {
      title: 'Building Accessible Web Applications',
      date: 'March 10, 2024',
      excerpt: 'A comprehensive guide to creating inclusive and accessible web experiences for all users...',
      image: '/path-to-blog-image.jpg',
      readTime: '7 min read',
      category: 'Web Development',
    },
    {
      title: 'The Art of UI/UX Design',
      date: 'March 5, 2024',
      excerpt: 'Understanding the principles of user interface and experience design in modern applications...',
      image: '/path-to-blog-image.jpg',
      readTime: '6 min read',
      category: 'Design',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="blogs" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Latest Blog Posts</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="card group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="aspect-w-16 aspect-h-9 bg-primary">
                    <div className="w-full h-48 bg-primary flex items-center justify-center">
                      <span className="text-gray-400">Blog Image</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary text-white">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{blog.excerpt}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline w-full"
                >
                  Read More
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              View All Blogs
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs; 
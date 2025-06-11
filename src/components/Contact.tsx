import React from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  LinkIcon,
  CodeBracketIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: EnvelopeIcon,
      href: 'mailto:tahira.nawab.dev@gmail.com',
      text: 'tahira.nawab.dev@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: LinkIcon,
      href: 'https://linkedin.com/in/tahira-nawab',
      text: 'linkedin.com/in/tahira-nawab',
    },
    {
      name: 'GitHub',
      icon: CodeBracketIcon,
      href: 'https://github.com/Tahira_Nawab123',
      text: 'github.com/Tahira_Nawab123',
    },
    {
      name: 'Instagram',
      icon: PhotoIcon,
      href: 'https://instagram.com/tahira_n123',
      text: 'instagram.com/tahira_n123',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Let's Connect</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:bg-primary-light transition-colors duration-300"
              >
                <div className="flex items-center">
                  <link.icon className="h-6 w-6 text-secondary group-hover:text-secondary-light transition-colors duration-300" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{link.name}</h3>
                    <p className="text-gray-400">{link.text}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center py-8 border-t border-gray-800"
          >
            <p className="text-gray-400">
              © 2025 Tahira Nawab | All Rights Reserved
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 
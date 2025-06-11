import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const skills = {
    technical: [
      'Programming: C++, Python, Java, HTML, CSS, Git & GitHub, CLI, VS Code',
      'Cloud & DevOps: AWS Cloud Practitioner (Certified), Microsoft Azure (Learning Path)',
      'UI/UX Tools: Figma (Basic), Responsive Design, Accessibility Standards, Canva(Expert)',
      'Prompt Engineering & AI Tools',
      'CMS and SEO: Web Content Writing, UI Copywriting',
    ],
    soft: [
      'Strong communication and presentation skills',
      'Effective team collaboration and leadership',
      'Rapid learning and adaptability',
      'Strategic thinking and problem-solving',
      'Creative writing and detail-oriented mindset',
      'Ownership and initiative in all projects',
    ],
    interests: [
      'Book reading & learning psychology',
      'Hiking, nature walks, and outdoor activities',
      'Gaming',
      'Public speaking & motivational mentoring',
      'Volunteering & social impact work',
      'Exploring new tech trends and AI tools',
    ],
  };

  const tabs = [
    { id: 'technical', label: 'Technical Skills' },
    { id: 'soft', label: 'Soft Skills' },
    { id: 'interests', label: 'Personal Interests' },
  ];

  return (
    <section id="skills" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills & Interests</h2>

          {/* Tabs */}
          <div className="flex justify-center space-x-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'bg-secondary text-white'
                    : 'bg-primary text-gray-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skills Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills[activeTab as keyof typeof skills].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card"
              >
                <p className="text-gray-300">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
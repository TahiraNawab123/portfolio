import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const education = [
    {
      degree: 'BS Software Engineering',
      institution: 'Information Technology University (ITU), Lahore',
      period: '2023 – Present',
    },
    {
      degree: 'Intermediate – Pre-Engineering',
      institution: 'Punjab Group of Colleges',
      period: '2021 – 2023',
    },
    {
      degree: 'Matric – Computer Science',
      institution: 'LDA School System',
      period: '2019 – 2021',
    },
  ];

  return (
    <section id="about" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Introduction */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a passionate Software Engineering student at ITU, Lahore, dedicated to serving my country through innovative digital solutions and impactful ideas.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in technology is driven by a desire to create meaningful solutions that can make a difference in people's lives. I believe in the power of technology to transform society and am committed to using my skills to contribute to Pakistan's digital future.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-secondary"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
                  <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-secondary">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../../constants';
import * as Icons from 'lucide-react';

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Mastered Skills</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => {
            const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 group hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600 group-hover:scale-110 transition-transform">
                    <IconComponent size={24} />
                  </div>
                  <span className="text-sm font-mono font-bold text-primary-600">{skill.level}%</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary-600 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

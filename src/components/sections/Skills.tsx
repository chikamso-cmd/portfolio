import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../../constants';
import * as Icons from 'lucide-react';

export const Skills = () => {
  const categories = ['Languages', 'Frameworks & Libraries', 'Tools & Platforms'] as const;

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-4">Toolkit</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Skills that ship work</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            A practical stack for building polished, resilient products from the first component to production.
          </p>
          <div className="w-20 h-1.5 bg-primary-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => {
            const categorySkills = SKILLS.filter((skill) => skill.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.12 }}
                className="glass rounded-2xl p-6 md:p-7 border-t-4 border-t-primary-500"
              >
                <div className="mb-7">
                  <div>
                    <h3 className="text-xl font-bold">{category}</h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => {
                    const IconComponent = (Icons as any)[skill.icon] || Icons.Code;

                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:bg-primary-100 hover:text-primary-700 dark:hover:bg-primary-900/40 dark:hover:text-primary-300"
                      >
                        <IconComponent size={16} className="text-primary-600 dark:text-primary-400" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

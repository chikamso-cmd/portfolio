import { motion } from 'motion/react';
import { SKILLS } from '../../constants';
import { SectionHeader } from '../ui/SectionHeader';
import { getIcon } from '../ui/icons';

const CATEGORIES = ['Languages', 'Frameworks & Libraries', 'Tools & Platforms'] as const;

export const Skills = () => {
  return (
    <section id="skills" className="section-padding border-y border-zinc-200 bg-zinc-50/60 dark:border-zinc-900 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Toolkit"
          title="Skills that ship work"
          description="A practical stack for building polished, resilient products from the first component to production."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CATEGORIES.map((category, categoryIndex) => {
            const categorySkills = SKILLS.filter((skill) => skill.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="surface p-7"
              >
                <div className="mb-6 flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{category}</h3>
                  <span className="font-mono text-xs text-zinc-400">{String(categorySkills.length).padStart(2, '0')}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => {
                    const IconComponent = getIcon(skill.icon);

                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-primary-300 hover:text-primary-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-primary-700 dark:hover:text-primary-300"
                      >
                        <IconComponent size={14} className="text-zinc-400" />
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

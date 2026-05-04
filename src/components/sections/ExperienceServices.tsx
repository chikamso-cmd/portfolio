import React from 'react';
import { motion } from 'motion/react';
import { SERVICES, EXPERIENCE } from '../../constants';
import { Card } from '../ui/Card';
import * as Icons from 'lucide-react';

export const ExperienceServices = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Expertise & Experience</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Icons.Zap className="text-primary-600" /> What I Can Do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => {
                const IconComponent = (Icons as any)[service.iconName] || Icons.Layout;
                return (
                  <Card key={service.id} className="p-6" delay={index * 0.1}>
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600 w-fit mb-4">
                      <IconComponent size={24} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {service.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Career Path */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Icons.Briefcase className="text-primary-600" /> Career Path
            </h3>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pl-10 relative"
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary-600 border-4 border-slate-50 dark:border-slate-900 z-10" />
                  <div className="mb-1 flex flex-wrap items-center gap-x-4">
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <span className="text-sm font-semibold text-primary-600 bg-primary-100 dark:bg-primary-900/30 px-2 py-0.5 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">{exp.company}</p>
                  <p className="text-slate-600 dark:text-slate-400">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

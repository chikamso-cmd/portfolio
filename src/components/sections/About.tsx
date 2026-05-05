import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/Card';
import { User, Code, Rocket } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 italic">
              Passionate about crafting pixel-perfect web experiences.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              I am a dedicated Frontend Developer with a strong foundation in modern web technologies. 
              My journey in web development started with a curiosity about how things work on the internet, 
              which quickly evolved into a passion for building beautiful and functional user interfaces.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              I focus on performance, clean UI, and exceptional user experience. I believe that every detail 
              matters, and I strive to write clean, maintainable code that solves real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600">
                  <User size={20} />
                </div>
                <span className="font-medium text-sm">Age: 28</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600">
                  <Rocket size={20} />
                </div>
                <span className="font-medium text-sm">Experience: 3+ Years</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6" delay={0.1}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 shrink-0">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Technical Excellence</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Proficient in building complex SPAs using React, TypeScript, and state management libraries.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6" delay={0.2}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 shrink-0">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Performance Focus</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Committed to optimizing load times and ensuring smooth animations for the best user experience.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

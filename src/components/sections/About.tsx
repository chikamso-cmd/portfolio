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
              Passionate about crafting pixel-perfect, high-performance web experiences.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              I am a dedicated Frontend Developer with a strong foundation in modern web technologies.
              My journey began with curiosity about how the web works and grew into a focus on building
              delightful, accessible interfaces that scale with real user needs.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              I prioritize fast load times, intuitive interactions, and clean, maintainable code. I use
              component-driven architecture, automated testing, and type-safe tooling to deliver reliable
              experiences that are easy to iterate on.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              My toolchain includes Git and GitHub for version control, CI/CD pipelines for continuous
              delivery, and deployments to platforms like Vercel, Netlify, and Render. I work with package
              managers such as npm, yarn, and bun, and I use analytics and optimization tools like PostHog
              alongside Lighthouse and other performance profilers to measure and improve real-user
              experience. Cross-browser compatibility and progressive enhancement are standard practices
              in my workflow.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              I enjoy collaborating closely with designers, product managers, and backend engineers,
              participating in code reviews and mentoring teammates to raise the bar for quality and
              consistency. I'm always learning and open to new tools and patterns that make products
              faster, more accessible, and more enjoyable to use.
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

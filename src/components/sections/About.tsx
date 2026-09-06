import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/Card';
import { User, Code, Rocket } from 'lucide-react';

export const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white">
            About Me
          </h2>
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
              Passionate about crafting pixel-perfect, high-performance web
              experiences.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              I am a results-driven Frontend Developer specializing in modern
              web technologies. I am passionate about engineering
              high-performance, accessible, and scalable user interfaces that
              directly address user needs and drive business value.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              My development philosophy centers on delivering optimal load
              times, intuitive interactions, and highly maintainable code. I
              leverage component-driven architecture, type-safe tooling, and
              frameworks like Next.js to build reliable, robust applications
              that support rapid iteration.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              My technical toolchain encompasses precise version control
              (Git/GitHub), automated CI/CD pipelines, and seamless deployments
              across platforms such as Vercel, Netlify, and Render. I am
              proficient with modern package managers (npm, Yarn, Bun) and
              actively utilize analytics and performance profiling
              tools—including PostHog and Lighthouse—to continuously measure and
              optimize the real-world user experience. Cross-browser
              compatibility and progressive enhancement remain foundational to
              my workflow.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              I thrive in cross-functional environments, collaborating closely
              with designers, product managers, and backend engineers. By
              actively participating in code reviews and sharing knowledge with
              peers, I consistently strive to elevate team standards for quality
              and codebase consistency. I remain committed to continuous
              learning, readily adopting emerging tools and architectural
              patterns to build faster, more inclusive digital products.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {/* <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600">
                  <User size={20} />
                </div>
                <span className="font-medium text-sm">Age: 28</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600">
                  <Rocket size={20} />
                </div>
                <span className="font-medium text-sm">
                  Experience: 3+ Years
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-0 overflow-hidden" delay={0}>
              <img
                loading="lazy"
                src="/Nelson.jpg"
                alt="Nelson"
                className="w-full h-96 sm:h-full md:h-80 lg:h-96 object-cover shadow-md"
              />
            </Card>
            <Card className="p-6" delay={0.1}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 shrink-0">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Technical Excellence
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Proficient in building complex SPAs using React, TypeScript,
                    and state management libraries.
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
                    Committed to optimizing load times and ensuring smooth
                    animations for the best user experience.
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

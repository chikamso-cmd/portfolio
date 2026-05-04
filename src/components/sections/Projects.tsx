import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../../constants';
import { Card } from '../ui/Card';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Project } from '../../types';

const CATEGORIES = ['All', 'React', 'Fullstack', 'API-based', 'UI/UX'];

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Work</h2>
            <div className="w-20 h-1.5 bg-primary-600 rounded-full" />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number; key?: React.Key }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative glass rounded-3xl overflow-hidden"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={project.githubUrl}
              className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
              title="GitHub Repo"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 line-clamp-2 md:line-clamp-none">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

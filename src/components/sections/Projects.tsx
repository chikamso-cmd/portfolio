import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../../constants';
import { SectionHeader } from '../ui/SectionHeader';
import { ArrowUpRight, ChevronDown, Github } from 'lucide-react';
import { Project } from '../../types';

const CATEGORIES = ['All', 'React', 'Next.js', 'Fullstack', 'API-based', 'UI/UX'];

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Selected work"
          title="Featured Work"
          description="Production apps and products I've designed, engineered, and shipped."
        >
          <div className="flex flex-wrap gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1 dark:border-zinc-800 dark:bg-zinc-900">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'text-white dark:text-zinc-900'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {filter === cat && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-full bg-zinc-900 dark:bg-white"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            ))}
          </div>
        </SectionHeader>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="py-16 text-center text-zinc-500">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number; key?: React.Key }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasRepo = project.githubUrl && project.githubUrl !== '#';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group surface flex flex-col overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5 dark:hover:border-zinc-700 dark:hover:shadow-black/30"
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-16/10 overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800"
        aria-label={`Open ${project.title} live site`}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </a>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">{project.category}</span>
          <div className="flex gap-1">
            {hasRepo && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code`}
                className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <Github size={16} />
              </a>
            )}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <h3 className="mb-2 font-display text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-expanded={isExpanded}
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-md text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          {isExpanded ? 'Show less' : 'Technical details'}
          <ChevronDown size={15} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-3 border-t border-zinc-200 pt-4 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                {project.keyTechnicalContributions.map((contribution) => (
                  <li key={contribution} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

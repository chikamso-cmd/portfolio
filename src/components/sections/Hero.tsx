import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { Button, buttonClasses } from '../ui/Button';
import { WorkCarousel } from '../ui/WorkCarousel';
import { EXPERIENCE, PROJECTS } from '../../constants';

const STATS = [
  { value: '3+', label: 'Years experience' },
  { value: `${PROJECTS.length}+`, label: 'Projects shipped' },
  { value: `${EXPERIENCE.length}`, label: 'Teams & clients' },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-16">
      {/* Background */}
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 -z-10 h-125 w-225 -translate-x-1/2 rounded-full bg-primary-500/15 blur-3xl dark:bg-primary-500/10" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div
            {...fadeUp(0)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mb-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl xl:text-7xl"
          >
            Building digital{' '}
            <span className="bg-linear-to-r from-primary-600 to-violet-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-violet-400">
              experiences
            </span>{' '}
            that matter.
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mb-10 max-w-xl text-lg text-zinc-600 text-balance dark:text-zinc-400 md:text-xl">
            Hi, I&apos;m <span className="font-semibold text-zinc-900 dark:text-zinc-100">Nwafor God&apos;spower Chikamso</span>, a
            Frontend Developer who builds fast, accessible, and user-friendly web applications that help businesses grow.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              rightIcon={ArrowRight}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View my work
            </Button>
            <a
            
              href="/Nwafor_Godspower_Chikamso_Frontend_Engineer_CV.pdf"
              download="Nwafor_Godspower_Chikamso_Frontend_Engineer_CV.pdf"
              className={buttonClasses('outline', 'lg')}
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.dl {...fadeUp(0.4)} className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight">{stat.value}</dd>
                <dd className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-xl lg:max-w-none"
        >
          <WorkCarousel />
        </motion.div>
      </div>
    </section>
  );
};

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, LucideCircleQuestionMark,  } from 'lucide-react';
import { PROJECTS } from '../../constants';

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 60;

export const WorkCarousel = () => {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const project = PROJECTS[index];

  const paginate = useCallback((step: number) => {
    setSlide(([i]) => [(i + step + PROJECTS.length) % PROJECTS.length, step]);
  }, []);

  const goTo = (target: number) => setSlide(([i]) => [target, target > i ? 1 : -1]);

  // Warm the browser cache so slides don't flash empty while their screenshot loads.
  useEffect(() => {
    PROJECTS.forEach((p) => {
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      img.src = p.image;
    });
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setTimeout(() => paginate(1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, reduceMotion, paginate]);

  const offset = reduceMotion ? 0 : 40;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') paginate(1);
        if (e.key === 'ArrowLeft') paginate(-1);
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected work"
    >
      {/* Soft glow behind the card */}
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-tr from-primary-500/20 via-violet-500/10 to-transparent blur-2xl" aria-hidden="true" />

      <div className="surface overflow-hidden rounded-3xl shadow-2xl shadow-zinc-900/10 dark:shadow-black/40">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <span className="font-mono text-[11px] text-zinc-500" aria-live="polite">
            {String(index + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
          </span>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.article
              key={project.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * offset }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -offset }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
                else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
              }}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${PROJECTS.length}: ${project.title}`}
              className="cursor-grab active:cursor-grabbing"
            >
              <div className="relative aspect-video overflow-hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  draggable={false}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top select-none"
                />
                <span className="absolute left-4 top-4 rounded-full bg-zinc-950/70 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white transition-transform hover:scale-105 dark:bg-white dark:text-zinc-900"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <div className="flex gap-3 rounded-2xl bg-primary-50 p-4 dark:bg-primary-950/40">
                  <LucideCircleQuestionMark size={18} className="mt-0.5 shrink-0 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">
                      How I can help you
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">{project.clientValue}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-4 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800">
          <div className="flex flex-1 gap-1.5">
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${p.title}`}
                aria-current={i === index}
                className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800"
              >
                {i === index ? (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-y-0 left-0 rounded-full bg-zinc-900 dark:bg-white"
                    initial={{ width: paused || reduceMotion ? '100%' : '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: paused || reduceMotion ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }}
                  />
                ) : (
                  <span className="absolute inset-0 rounded-full transition-colors group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700" />
                )}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { motion } from 'motion/react';
import { SERVICES, EXPERIENCE } from '../../constants';
import { SectionHeader } from '../ui/SectionHeader';
import { buttonClasses } from '../ui/Button';
import { Download, Layout } from 'lucide-react';
import { getIcon } from '../ui/icons';

// Newest roles first: sort by the last year mentioned in the period, then by entry order.
const latestYear = (period: string) => Math.max(...(period.match(/\d{4}/g) ?? ['0']).map(Number));
const SORTED_EXPERIENCE = [...EXPERIENCE].sort(
  (a, b) => latestYear(b.period) - latestYear(a.period) || Number(b.id) - Number(a.id)
);

const initials = (name: string) =>
  name
    .replace(/[^A-Za-z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

export const ExperienceServices = () => {
  return (
    <section id="experience" className="section-padding border-y border-zinc-200 bg-zinc-50/60 dark:border-zinc-900 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Expertise */}
        <SectionHeader
          eyebrow="Expertise"
          title="What I bring to your team"
          description="End-to-end frontend engineering, from the first component to a fast, reliable production release."
        />

        <div className="grid gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const IconComponent = getIcon(service.iconName, Layout);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative flex flex-col bg-white p-7 transition-colors hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-900 transition-colors group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white dark:border-zinc-800 dark:text-zinc-100">
                    <IconComponent size={20} />
                  </div>
                  <span className="font-mono text-xs text-zinc-400">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold tracking-tight">{service.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Experience */}
        <div className="mt-28 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Experience"
              title="Career path"
              description="Roles where I've shipped production interfaces alongside designers, product managers, and backend engineers."
            />
            <div className="-mt-6 flex flex-wrap gap-3">
              <a
                href="/Nwafor_Godspower_Chikamso_Frontend_Engineer_CV.pdf"
                download="Nwafor_Godspower_Chikamso_Frontend_Engineer_CV.pdf"
                className={buttonClasses('primary', 'md')}
              >
                <Download className="h-4 w-4" />
                Download résumé
              </a>
              <a href="#contact" className={buttonClasses('outline', 'md')}>
                Work with me
              </a>
            </div>
          </div>

          <ol className="relative border-l border-zinc-200 dark:border-zinc-800">
            {SORTED_EXPERIENCE.map((exp, index) => (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative pb-10 pl-8 last:pb-0 md:pl-10"
              >
                <span
                  className={`absolute -left-1.25 top-6 h-2.5 w-2.5 rounded-full ring-4 ring-zinc-50 dark:ring-zinc-950 ${
                    index === 0 ? 'bg-primary-500' : 'bg-zinc-300 dark:bg-zinc-700'
                  }`}
                  aria-hidden="true"
                />
                <div className="surface p-6 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-900 font-display text-sm font-bold text-white dark:bg-white dark:text-zinc-900">
                        {initials(exp.company)}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold leading-tight tracking-tight">{exp.role}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {exp.company}
                          {exp.employmentType && (
                            <>
                              <span className="mx-2 text-zinc-300 dark:text-zinc-700">•</span>
                              {exp.employmentType}
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-zinc-200 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                      {exp.period.trim()}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

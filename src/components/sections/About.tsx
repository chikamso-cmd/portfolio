import { motion } from 'motion/react';
import { Code, MapPin, Rocket, Users } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

const HIGHLIGHTS = [
  {
    Icon: Code,
    title: 'Technical Excellence',
    body: 'Complex SPAs with React, TypeScript, and modern state management.',
  },
  {
    Icon: Rocket,
    title: 'Performance Focus',
    body: 'Fast load times and smooth interactions, measured and optimized.',
  },
  {
    Icon: Users,
    title: 'Team Player',
    body: 'Close collaboration with design, product, and backend engineers.',
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md lg:sticky lg:top-28"
        >
          <div className="surface overflow-hidden rounded-3xl p-2">
            <img
              loading="lazy"
              src="/Nelson.jpg"
              alt="Portrait of Nwafor God'spower Chikamso"
              className="aspect-4/5 w-full rounded-[1.25rem] object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl px-5 py-4 shadow-xl shadow-zinc-900/10 dark:shadow-black/40">
            <div>
              <p className="font-display text-2xl font-bold">3+ years</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">building for the web</p>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              <MapPin size={15} /> Lagos, Nigeria
            </div>
          </div>
        </motion.div>

        <div>
          <SectionHeader
            eyebrow="About me"
            title="Crafting pixel-perfect, high-performance web experiences."
          />

          <div className="-mt-4 space-y-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
            <p>
              I am a results-driven Frontend Developer specializing in modern web technologies. I am passionate about
              engineering high-performance, accessible, and scalable user interfaces that directly address user needs and
              drive business value.
            </p>
            <p>
              My development philosophy centers on delivering optimal load times, intuitive interactions, and highly
              maintainable code. I leverage component-driven architecture, type-safe tooling, and frameworks like Next.js
              to build reliable, robust applications that support rapid iteration.
            </p>
            <p>
              My toolchain spans Git/GitHub, automated CI/CD pipelines, and deployments across Vercel, Netlify, and Render.
              I work with npm, Yarn, and Bun, and use analytics and profiling tools such as PostHog and Lighthouse to
              continuously measure and optimize the real-world user experience.
            </p>
            <p>
              I thrive in cross-functional environments, actively participate in code reviews, and stay committed to
              continuous learning, adopting emerging tools and patterns to build faster, more inclusive digital products.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map(({ Icon, title, body }, i) => (
              <Card key={title} className="p-5" delay={i * 0.08}>
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                  <Icon size={18} />
                </div>
                <h3 className="mb-1 text-sm font-semibold">{title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

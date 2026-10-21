import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  children?: React.ReactNode;
}

export const SectionHeader = ({ eyebrow, title, description, align = 'left', children }: SectionHeaderProps) => {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-14 flex flex-col gap-6 ${centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}
    >
      <div className={`max-w-2xl ${centered ? 'mx-auto' : ''}`}>
        <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-5xl">{title}</h2>
        {description && (
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 text-balance">{description}</p>
        )}
      </div>
      {children}
    </motion.div>
  );
};

import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { LucideIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: Variant;
  size?: Size;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
}

const baseStyles =
  'group inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-sm',
  secondary:
    'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700',
  outline:
    'border border-zinc-300 text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-900',
  ghost: 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

/** Shared class list so links (e.g. downloads) can look like buttons. */
export const buttonClasses = (variant: Variant = 'primary', size: Size = 'md', className = '') =>
  `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', leftIcon: LeftIcon, rightIcon: RightIcon, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={buttonClasses(variant, size, className)}
        {...props}
      >
        {LeftIcon && <LeftIcon className="w-4 h-4" />}
        {children as React.ReactNode}
        {RightIcon && <RightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
      </motion.button>
    );
  }
);

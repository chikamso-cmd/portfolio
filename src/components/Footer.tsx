import { ArrowUp } from 'lucide-react';

const LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 px-6 py-10 dark:border-zinc-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold">Nwafor God&apos;spower Chikamso</p>
          <p className="text-sm text-zinc-500">© {currentYear} · Crafted with precision and care.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#"
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
};

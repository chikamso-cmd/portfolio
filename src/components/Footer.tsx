import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-2xl font-display font-bold text-primary-600 mb-2">
            DevPortfolio
          </p>
          <p className="text-slate-500 text-sm">
            © {currentYear} Created with precision and care.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">
            About
          </a>
          <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">
            Projects
          </a>
          <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">
            Experience
          </a>
          <a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-sm">
          Built with <Heart size={14} className="text-red-500 fill-red-500" /> and React
        </div>
      </div>
    </footer>
  );
};

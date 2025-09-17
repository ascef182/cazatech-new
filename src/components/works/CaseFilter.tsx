'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface CaseFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CaseFilter = ({ categories, activeCategory, onCategoryChange }: CaseFilterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      <Button
        variant={activeCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('all')}
        className={`${
          activeCategory === 'all'
            ? 'bg-primary text-primary-foreground'
            : 'hover:bg-accent hover:text-accent-foreground'
        }`}
      >
        Todos os Cases
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category)}
          className={`${
            activeCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-accent hover:text-accent-foreground'
          }`}
        >
          {category}
        </Button>
      ))}
    </motion.div>
  );
};

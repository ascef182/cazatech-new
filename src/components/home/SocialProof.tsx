'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SocialProofProps {
  customerCount: number;
  className?: string;
}

export const SocialProof = ({ 
  customerCount = 50, 
  className = '' 
}: SocialProofProps) => {
  const avatars = [
    { src: '/images/testimonial.jpeg', alt: 'Cliente 1', fallback: 'C1' },
    { src: '/images/testimonial.jpeg', alt: 'Cliente 2', fallback: 'C2' },
    { src: '/images/testimonial.jpeg', alt: 'Cliente 3', fallback: 'C3' },
    { src: '/images/testimonial.jpeg', alt: 'Cliente 4', fallback: 'C4' },
    { src: '/images/testimonial.jpeg', alt: 'Cliente 5', fallback: 'C5' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`flex items-center gap-4 ${className}`}
    >
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <Avatar key={index} className="w-8 h-8 border-2 border-white">
            <AvatarImage src={avatar.src} alt={avatar.alt} />
            <AvatarFallback className="bg-purple-600 text-white text-xs">
              {avatar.fallback}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="text-white/80 text-sm">
        <span className="font-semibold text-white">+{customerCount} empresas</span>
        <br />
        <span>já automatizaram com a CazaTech</span>
      </div>
    </motion.div>
  );
};

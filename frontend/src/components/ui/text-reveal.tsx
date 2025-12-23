'use client';

import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  blur?: number;
  delay?: number;
  duration?: number;
  from?: 'top' | 'bottom';
  split?: 'word' | 'letter';
}

export const TextReveal = ({
  children,
  className,
  blur = 10,
  delay = 0.05,
  duration = 0.8,
  from = 'bottom',
  split = 'word',
}: TextRevealProps) => {
  const segments =
    split === 'word' ? children.split(' ') : children.split('');

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="inline-block"
    >
      {segments.map((c, index) => (
        <motion.span
          key={`${c}-${index}`}
          variants={{
            hidden: {
              opacity: 0,
              y: from === 'bottom' ? '50%' : '-50%',
              filter: `blur(${blur}px)`,
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            },
          }}
          transition={{
            delay: index * delay,
            duration,
            ease: [0.18, 0.89, 0.82, 1.04],
          }}
          className={cn(
            'inline-block leading-none',
            split === 'word' ? 'mr-[0.25em]' : '',
            className
          )}
        >
          {c === ' ' ? '\u00A0' : c}
        </motion.span>
      ))}

      {/* accessibility */}
      <span className="sr-only">{children}</span>
    </motion.div>
  );
};

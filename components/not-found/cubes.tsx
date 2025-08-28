'use client';

import type React from 'react';
import { cn } from '@/lib/utils';

type CubeProps = {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
};

function Cube({ className, style, delay = 0 }: CubeProps) {
  return (
    <div
      aria-hidden='true'
      className={cn(
        // cube body
        'absolute size-16 border border-black/50 bg-white md:size-24',
        'rotate-[18deg] shadow-[0_10px_30px_rgba(0,0,0,0.08)]',
        className,
      )}
      style={{
        animation: 'float 6.5s ease-in-out infinite',
        animationDelay: `${delay}s`,
        ...style,
      }}
    >
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#ffffff_60%,#e5e7eb_60%)] opacity-90' />
      <div className='-right-1 -bottom-1 pointer-events-none absolute size-full translate-x-1 translate-y-1 border border-black/20' />
    </div>
  );
}

export function FloatCubesHero() {
  return (
    <div
      aria-hidden='true'
      className='relative h-[38vh] border-b bg-neutral-50 md:h-[48vh]'
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(0,0,0,0.12) 0 1px, transparent 1px 40px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.12) 0 1px, transparent 1px 40px)',
        backgroundSize: '40px 40px, 40px 40px',
        backgroundPosition: '0 0, 20px 20px',
      }}
    >
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(18deg); }
          50% { transform: translateY(-16px) rotate(18deg); }
          100% { transform: translateY(0) rotate(18deg); }
        }
      `}</style>

      {/* Cubes placed around the hero */}
      <Cube delay={0.1} style={{ left: '8%', top: '48%' }} />
      <Cube delay={0.6} style={{ left: '34%', top: '10%' }} />
      <Cube delay={0.3} style={{ left: '58%', top: '32%' }} />
      <Cube delay={0.9} style={{ right: '10%', top: '6%' }} />
    </div>
  );
}

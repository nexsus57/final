import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className = '' }: AnimatedSectionProps) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

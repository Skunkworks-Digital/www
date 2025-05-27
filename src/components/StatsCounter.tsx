import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  count: number;
  label: string;
  suffix?: string;
  inView: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ count, label, suffix = '', inView }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const countingRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (inView) {
      // Clear any existing interval
      if (countingRef.current) {
        clearInterval(countingRef.current);
      }
      
      // Reset to 0
      setCurrentCount(0);
      
      const duration = 2000; // 2 seconds
      const totalSteps = 50; // More steps for smoother animation
      const stepValue = count / totalSteps;
      const stepTime = duration / totalSteps;
      
      let currentStep = 0;
      
      countingRef.current = setInterval(() => {
        currentStep++;
        
        if (currentStep >= totalSteps) {
          setCurrentCount(count);
          if (countingRef.current) {
            clearInterval(countingRef.current);
          }
        } else {
          const newValue = Math.min(Math.floor(stepValue * currentStep), count);
          setCurrentCount(newValue);
        }
      }, stepTime);
    } else {
      // Reset when out of view
      setCurrentCount(0);
      if (countingRef.current) {
        clearInterval(countingRef.current);
      }
    }
    
    return () => {
      if (countingRef.current) {
        clearInterval(countingRef.current);
      }
    };
  }, [count, inView]);
  
  return (
    <div className="tile text-center">
      <div className="text-5xl font-light text-blue-600 mb-4">
        {currentCount}{suffix}
      </div>
      <div className="text-lg text-[color:var(--text-secondary)]">{label}</div>
    </div>
  );
};

const StatsCounter: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  
  return (
    <section ref={ref} className="py-16 bg-[color:var(--bg-primary)]">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-normal mb-4">Our Impact At A Glance</h2>
          <p className="max-w-2xl mx-auto text-[color:var(--text-secondary)]">
            Since 2020, we've helped businesses achieve measurable results through strategic digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem count={250} label="Successful Projects" inView={inView} />
          <StatItem count={92} label="Client Retention Rate" suffix="%" inView={inView} />
          <StatItem count={37} label="Avg. Conversion Rate Increase" suffix="%" inView={inView} />
          <StatItem count={12} label="Industries Served" inView={inView} />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
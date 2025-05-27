import React, { useEffect, useState } from 'react';
import { CircleDot } from 'lucide-react';

interface LoadingOverlayProps {
  loading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ loading }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Delay hiding the overlay to allow the exit animation to complete
      const timer = setTimeout(() => {
        setHidden(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [loading]);
  
  if (hidden) return null;

  return (
    <div 
      className={`fixed inset-0 bg-[color:var(--bg-primary)] flex items-center justify-center z-[9999] transition-opacity duration-500 ${
        loading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center">
        <CircleDot className="w-16 h-16 text-blue-600 animate-pulse" />
        <div className="mt-4 text-2xl font-light text-[color:var(--text-primary)]">
          Skunkworks Digital
        </div>
        <div className="mt-8 relative w-48 h-1 bg-gray-200 rounded overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-blue-600 rounded animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
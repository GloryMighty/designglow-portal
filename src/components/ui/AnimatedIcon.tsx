import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps extends MotionProps {
  Icon: LucideIcon;
  size?: number;
  className?: string;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  Icon, 
  size = 6, 
  className = '', 
  ...motionProps 
}) => {
  const defaultVariants = {
    initial: { 
      scale: 1, 
      rotate: 0,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    },
    hover: { 
      scale: 1.15, 
      rotate: 15,
      boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    }
  };

  return (
    <motion.div
      variants={defaultVariants}
      initial="initial"
      whileHover="hover"
      className={`inline-block p-3 bg-black/10 rounded-full ${className}`}
      {...motionProps}
    >
      <Icon className={`w-${size} h-${size} text-black`} />
    </motion.div>
  );
};

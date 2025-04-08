"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatisticsCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  color?: string;
}

export function StatisticsCard({
  title,
  value,
  suffix = "",
  prefix = "",
  icon,
  color = "from-primary to-primary/70"
}: StatisticsCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(value * progress);
      
      setCount(currentCount);
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [value]);

  return (
    <motion.div
      className="rounded-lg border bg-card p-5 shadow-sm flex flex-col h-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-muted-foreground text-sm">{title}</h3>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
      <div className="mt-1 flex items-baseline">
        <p className={`text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${color}`}>
          {prefix}{count}{suffix}
        </p>
      </div>
    </motion.div>
  );
}

interface BarChartProps {
  title: string;
  data: {
    label: string;
    value: number;
  }[];
  maxValue?: number;
  color?: string;
}

export function BarChart({
  title,
  data,
  maxValue,
  color = "from-primary to-primary/80"
}: BarChartProps) {
  const max = maxValue || Math.max(...data.map(item => item.value));
  
  return (
    <motion.div
      className="rounded-lg border bg-card p-5 shadow-sm flex flex-col h-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <h3 className="font-medium text-muted-foreground text-sm mb-4">{title}</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center text-sm">
              <span>{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>
            <div className="h-2 bg-secondary rounded overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${color}`}
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / max) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 
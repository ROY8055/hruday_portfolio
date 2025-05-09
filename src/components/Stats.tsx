import React, { useState, useEffect } from 'react';
import { Briefcase, Users, Award, Star } from 'lucide-react';

const statsData = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    value: 500,
    label: 'Clients Helped',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-600" />,
    value: 85,
    label: 'Success Rate',
    suffix: '%'
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    value: 7,
    label: 'Years Experience',
  },
  {
    icon: <Star className="h-8 w-8 text-blue-600" />,
    value: 4.9,
    label: 'Client Rating',
    suffix: '/5'
  },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      statsData.forEach((stat, index) => {
        const duration = 2000; // 2 seconds animation
        const steps = 60;
        const stepValue = stat.value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += stepValue;
          if (current > stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Number(current.toFixed(1));
            return newCounts;
          });
        }, duration / steps);
        
        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {counts[index]}{stat.suffix || ''}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
import React from 'react';
import { FileSearch, MessageCircle, PenTool, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <FileSearch className="h-8 w-8 text-white" />,
    title: 'Initial Assessment',
    description: 'We begin with a thorough assessment of your career goals, skills, and experience to create a customized plan.',
    color: 'bg-blue-600',
  },
  {
    icon: <PenTool className="h-8 w-8 text-white" />,
    title: 'Strategy Development',
    description: 'Based on your assessment, I develop a personalized strategy to help you achieve your career objectives.',
    color: 'bg-teal-600',
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-white" />,
    title: 'Implementation & Coaching',
    description: 'We put the strategy into action with ongoing coaching, feedback, and adjustments as needed.',
    color: 'bg-amber-500',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: 'Success & Follow-up',
    description: 'After achieving your immediate goals, we\'ll establish a plan for continued career growth and success.',
    color: 'bg-indigo-600',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology to help you achieve your career goals
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute h-0.5 bg-gray-200 top-24 left-0 right-0 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="md:hidden h-8 w-0.5 bg-gray-200 my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
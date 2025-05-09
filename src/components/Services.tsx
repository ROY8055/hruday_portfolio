import React from 'react';
import { FileText, Users, MessageSquare, Award, Briefcase, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    title: 'Resume & LinkedIn Optimization',
    description: 'Get a professionally crafted resume and LinkedIn profile that highlights your strengths and catches recruiters\' attention.',
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    title: 'Interview Preparation',
    description: 'Comprehensive mock interviews with personalized feedback to help you ace even the toughest interviews.',
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Career Transition Guidance',
    description: 'Strategic guidance for professionals looking to pivot careers or enter new industries successfully.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-600" />,
    title: 'Job Search Strategy',
    description: 'Develop a targeted job search plan with proven techniques to land interviews at your dream companies.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: 'Salary Negotiation',
    description: 'Learn proven techniques to negotiate the best compensation package and benefits for your new role.',
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: 'Executive Coaching',
    description: 'Specialized coaching for senior leaders and executives to advance their careers to the next level.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive career services tailored to help you reach your professional goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
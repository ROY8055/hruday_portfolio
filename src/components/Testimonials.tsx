import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emma Rodriguez',
    role: 'Software Engineer at Google',
    avatar: 'https://dochub.com/hruday-kalluri/2GQ1NXoKy5xe5OLKDkW6bx/python-cisco-pdf',
    content: 'Working with this career coach completely transformed my job search. They helped me revamp my resume and LinkedIn, which led to multiple interviews and ultimately landing my dream role at Google. The interview preparation was invaluable!',
    rating: 5,
  },
  {
    name: 'Michael Johnson',
    role: 'Marketing Director at Adobe',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    content: 'After struggling with my career transition for months, I found exactly the guidance I needed. The personalized strategy and ongoing support made all the difference. I successfully pivoted from finance to marketing and couldn\'t be happier.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Product Manager at Airbnb',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    content: 'The salary negotiation coaching alone was worth the investment! I was able to secure a compensation package that was 25% higher than the initial offer. Beyond that, the career guidance helped me find clarity in my professional path.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    role: 'UX Designer at Microsoft',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    content: 'I was stuck in my career for years before getting this expert help. The resume redesign and portfolio advice completely transformed my job prospects. Within weeks I had multiple interviews and ultimately landed a position at Microsoft.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Get current testimonial and the next one for desktop view
  const current = testimonials[currentIndex];
  const next = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what my clients have to say about their career transformation journeys
          </p>
        </div>
        
        {/* Mobile Testimonials (1 at a time) */}
        <div className="lg:hidden">
          <div className="relative bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <img 
                src={current.avatar} 
                alt={current.name} 
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-900">{current.name}</h3>
                <p className="text-gray-600 text-sm">{current.role}</p>
                <div className="flex mt-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic mb-4">"{current.content}"</blockquote>
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Desktop Testimonials (2 at a time) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src={current.avatar} 
                  alt={current.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{current.name}</h3>
                  <p className="text-gray-600 text-sm">{current.role}</p>
                  <div className="flex mt-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">"{current.content}"</blockquote>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src={next.avatar} 
                  alt={next.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{next.name}</h3>
                  <p className="text-gray-600 text-sm">{next.role}</p>
                  <div className="flex mt-1">
                    {[...Array(next.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">"{next.content}"</blockquote>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
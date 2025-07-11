import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {

  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-semibold text-gray-900">Testimonials</h2>
      <p className="md:text-base text-gray-600 mt-3">
        Discover how our learners have transformed their careers and lives through inspiring stories of growth, success, and impact with our platform.
      </p>
      <div className="grid grid-cols-auto gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm text-left border border-gray-300 pb-6 rounded-xl bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-100">
              <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className="text-lg font-semibold text-gray-800">{testimonial.name}</h1>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-5"
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-gray-600 mt-5 leading-relaxed">{testimonial.feedback}</p>
            </div>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition px-5 underline underline-offset-2">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;

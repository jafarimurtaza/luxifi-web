"use client";

import { TestimonialCalendarSlider } from "./TestimonialCalendarSlider";

// Example of how to use the Calendar Testimonial Slider
// You can replace TestimonialsSlider with this component in your pages

export function CalendarTestimonialExample() {
  return (
    <div>
      {/* Your existing calendar testimonial slider */}
      <TestimonialCalendarSlider />

      {/* Optional: Add some additional content or spacing */}
      <div className="py-8" />
    </div>
  );
}

// To use this in your homepage or any other page, simply import and use:
// import { CalendarTestimonialExample } from "./components/HomeMain/Testimonial/CalendarTestimonialExample"
//
// Then replace:
// <TestimonialsSlider />
//
// With:
// <CalendarTestimonialExample />
//
// Or use the component directly:
// <TestimonialCalendarSlider />

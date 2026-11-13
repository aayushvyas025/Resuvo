import { Zap } from "lucide-react";
import { testimonials } from "../../constant/content";

function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className=" mt-24 flex flex-col items-start px-6 md:px-16 lg:px-24 text-sm max-w-6xl mx-auto"
    >
      <div class="flex items-center mr-auto gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
        <Zap className="size-4 text-indigo-600" />
        <span>Testimonials</span>
      </div>
      <h1 className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-slate-500 text-transparent bg-clip-text mt-4">
        Don't just take our words
      </h1>
      <p class="text-slate-500 mt-4 max-w-2xl text-base">
        Hear what our users say about us. We're always looking for ways to
        improve. If you have a positive experience with us, leave a review.
      </p>
      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        { 
          testimonials.map((testimonial) => 
            <div className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1">
          <div class="flex items-center justify-between">
            <div class="flex gap-1">
                {testimonial.icon}
            </div>
            <p>{testimonial.date}</p>
          </div>
          <p>
            {testimonial.review}
          </p>
          <div className="flex items-center gap-2 pt-3">
            <img
              class="h-8 w-8 rounded-full"
              src={testimonial.image}
              alt="Richard Nelson"
              />
            <p className="font-medium text-gray-800">{testimonial.user}</p>
          </div>
        </div>
    ) }
      </div>
    </section>
  );
}

export default TestimonialSection;

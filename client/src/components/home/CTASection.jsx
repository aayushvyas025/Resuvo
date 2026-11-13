import { Contact, MailBadge } from "lucide-react";

function CTASection() {
  return (
   
<section
  id="cta"
  className="w-full max-w-5xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-10 text-gray-800"
>
  <span className="inline-block px-3 py-1 text-xs font-medium border border-gray-300 rounded-full">
    Reach Out To Us
  </span>

  <h1 className="text-3xl sm:text-4xl font-bold text-left mt-5">
    We'd Love to Hear From You.
  </h1>

  <p className="text-gray-500 text-sm sm:text-base mt-4 leading-7">
    Have questions or need assistance? We're here to help.
    Or simply reach out to us at{" "}
    <a
      href="mailto:aayush25vyas@gmail.com"
      className="text-indigo-600 font-medium hover:underline"
    >
      aayush25vyas@gmail.com
    </a>
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

    {/* Email Support */}
    <div className="border border-slate-200 p-6 sm:p-8 rounded-2xl hover:bg-indigo-50/50 hover:border-indigo-200 transition-all duration-300">
      <MailBadge className="text-indigo-600 bg-indigo-100 p-2.5 rounded-full size-11" />

      <p className="text-lg font-bold mt-5">
        Email Support
      </p>

      <p className="text-gray-500 text-sm mt-2 mb-5 leading-6">
        Have a question or need help? Drop us an email and we'll get back to you.
      </p>

      <a
        href="mailto:aayush25vyas@gmail.com"
        className="text-indigo-600 font-semibold text-sm hover:underline break-all"
      >
        aayush25vyas@gmail.com
      </a>
    </div>

    {/* Contact Support */}
    <div className="border border-slate-200 p-6 sm:p-8 rounded-2xl hover:bg-indigo-50/50 hover:border-indigo-200 transition-all duration-300">
      <Contact className="text-indigo-600 bg-indigo-100 p-2.5 rounded-full size-11" />

      <p className="text-lg font-bold mt-5">
        Call Us Directly
      </p>

      <p className="text-gray-500 text-sm mt-2 mb-5 leading-6">
        Need direct assistance? Reach out to us during our working hours.
      </p>

      <a
        href="tel:+91964066282"
        className="text-indigo-600 font-semibold text-sm hover:underline"
      >
        +91 964066282
      </a>
    </div>

  </div>
</section>

  );
}

export default CTASection;

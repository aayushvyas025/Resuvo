import { carrierOptions } from "../../constant/content";

function AudienceSection() {
  return (
    <section className="mt-14 w-full py-12 text-center">
      <h2 className="text-3xl font-semibold text-gray-700">
        Built for Every Career Journey
      </h2>

      <p className="max-w-2xl mx-auto text-base text-gray-700 mt-5">
        Whether you're starting your career or exploring new opportunities,
        Resuvo helps you present your professional story with confidence.
      </p>

      <div
        className="max-w-4xl mx-auto flex flex-wrap justify-center
       items-center gap-8 md:gap-16 mt-10 text-gray-400"
      >
        {carrierOptions.map((option) => (
          <div className="flex items-center gap-2" key={option.id}>
            {option.icon}
            <span className="font-semibold text-slate-500">{option.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AudienceSection;

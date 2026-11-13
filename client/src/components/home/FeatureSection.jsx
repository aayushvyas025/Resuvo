import { features } from "../../constant/content";

function FeatureSection() {
  return (
    <section
      id="features"
      className="mt-10 w-full py-20 px-6 flex flex-col items-center"
    >
      <div className="text-center mx-auto">
        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-50 text-base text-slate-800">
          Our Features
        </span>
        <h1 className="text-4xl md:text-5xl font-medium text-slate-900 mt-6">
          Build Your Resume. Shape Your Future.
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 max-w-[530px] mx-auto">
          Create professional, personalized resumes effortlessly with AI-powered
          tools, beautiful templates, and intuitive customization designed to
          bring your career story to life.
        </p>
      </div>

      <div className="mt-10 grid border rounded-lg max-w-6xl mx-auto border-gray-200/70 grid-cols-1 divide-y divide-gray-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {features.map((feature) => (
          <div
            className="flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 p-8 pb-14"
            key={feature.id}
          >
            <div className="flex items-center gap-2 text-gray-500">
              {feature.icon}
              <h2 className="font-medium text-base text-indigo-500">
                {feature.title}
              </h2>
            </div>
            <p className="text-gray-600 text-sm/6 max-w-72">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;

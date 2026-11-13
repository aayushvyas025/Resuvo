import { MoveRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { companiesLogo, images } from "../../constant/content";
import React from "react";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
      <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-indigo-400 blur-[100px] opacity-30" />
      <div className="flex items-center mt-24">
        <div className="flex -space-x-3 pr-3">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.image}
              alt={image.title}
              className={`size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[${image.id}]`}
            />
          ))}
        </div>
        <div>
          <div className="flex ">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="size-4  text-indigo-500" />
              ))}
          </div>
          <p className="text-sm text-gray-700">Used by 10,000+ users</p>
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
        Build a resume that{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent text-nowrap">
          opens doors
        </span>{" "}
        to new opportunities.
      </h1>
      <p className="max-w-md text-center text-base my-7 text-md">
        Create a professional, personalized resume with AI-powered tools that
        help bring your skills and experience to life.
      </p>

      <div className="flex items-center" id="home">
        <Link
          to="/auth?state=register"
          className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-indigo-400 flex items-center transition-colors"
        >
          Get started
          <MoveRight className="size-8 px-2 transition-all duration-200 hover:translate-x-1" />
        </Link>
      </div>
      <p className="py-6 text-slate-600 mt-8 text-base">
        Trusting by leading brands, including
      </p>
      <div
        className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4"
        id="logo-container"
      >
        {companiesLogo.map((company, index) => (
          <React.Fragment key={index}>{company.logo}</React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;

import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

function PromotionalSection() {
  return (
    <section className="mt-20 mx-auto flex flex-col md:flex-row items-center justify-center text-sm border border-gray-200 rounded-2xl max-w-6xl w-[calc(100%-1rem)] bg-white p-2">
      <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-800">
          Create your resume.
          <br />
          Take the next step.
        </h2>

        <p className="max-w-xl text-gray-500 mt-4 leading-7">
          Your next career opportunity deserves a great first impression. Build
          a professional resume with AI-powered assistance, customize it your
          way, and showcase your potential.
        </p>

        <div className="flex items-center mt-6">
          <Link
            to={"/auth?state=register"}
            className="group flex items-center gap-2 px-7 py-2.5 active:scale-95 transition-all duration-500 border-1 border-slate-300 rounded-xl hover:bg-slate-100 hover:text-indigo-700"
          >
            Explore Features
            <MoveRight className="size-4 hover:translate-x-1 " />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PromotionalSection;

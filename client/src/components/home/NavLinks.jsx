import React from "react";

function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800 text-[1rem] px-2">
      <a href="#" className="hover:text-indigo-600 transition">
        Home
      </a>
      <a href="#features" className="hover:text-indigo-600 transition">
        Features
      </a>
      <a href="#testimonials" className="hover:text-indigo-600 transition">
        Testimonials
      </a>
      <a href="#cta" className="hover:text-indigo-600 transition">
        Contact
      </a>
    </div>
  );
}

export default NavLinks;

import { Link } from "lucide-react";
import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer class="mt-5 px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
      <div class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div class="md:max-w-96">
          <Logo />
          <p class="mt-6 text-sm">
           Resuvo makes resume building simple with AI-powered tools, professional templates, and effortless customization. Create a resume that reflects your skills, experience, and career aspirations.
          </p>
        </div>
        <div class="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 class="font-semibold mb-5 text-gray-800">Company</h2>
            <ul class="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#features">features</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div class="text-sm space-y-2">
              <p>+91-964066282</p>
              <p>aayush25vyas@email.com</p>
            </div>
          </div>
        </div>
      </div>
      <p class="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2024 © <a href="#">Resuvo</a>. All Right Reserved.
      </p>
    </footer>
  );
}

export default Footer;

import Logo from "./Logo";

function Footer() {
  return (
    <footer className="mt-5 px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500  bg-gradient-to-b from-indigo-50/70 to-white">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <Logo />
          <p className="mt-6 text-sm">
           Resuvo makes resume building simple with AI-powered tools, professional templates, and effortless customization. Create a resume that reflects your skills, experience, and career aspirations.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
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
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91-964066282</p>
              <p>aayush25vyas@email.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2024 © <a href="#">Resuvo</a>. All Right Reserved.
      </p>
    </footer>
  );
}

export default Footer;

import { Menu } from "lucide-react";

function HamburgerMenu({ openMenu, setOpenMenu }) {
  return (
    <>
      <button
        onClick={() => setOpenMenu(true)}
        className="md:hidden active:scale-90 transition"
      >
        <Menu className="size-6" />
      </button>

      <div
        className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${openMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <a href="#" className="text-white">
          Home
        </a>
        <a href="#features" className="text-white">
          Features
        </a>
        <a href="#testimonials" className="text-white">
          Testimonials
        </a>
        <a href="#cta" className="text-white">
          Contact
        </a>
        <button
          onClick={() => setOpenMenu(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md flex"
        >
          X
        </button>
      </div>
    </>
  );
}

export default HamburgerMenu;

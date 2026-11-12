import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ActionBtns from "./ActionBtns";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="z-50 flex items-center justify-evenly text-sm">
        <Logo />
        <NavLinks />
        <ActionBtns />
      </nav>
    </>
  );
}

export default Navbar;

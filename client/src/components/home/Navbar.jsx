import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ActionBtns from "./ActionBtns";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="z-50 flex items-center justify-evenly text-sm">
        <Logo />
        <NavLinks />
        <ActionBtns />
        <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </nav>
    </>
  );
}

export default Navbar;

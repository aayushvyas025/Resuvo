import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return <>
        <nav className="z-50 flex items-center justify-between text-sm">
          <Logo /> 
          <NavLinks />
        </nav>
     </>;
}

export default Navbar;

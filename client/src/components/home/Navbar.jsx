import { useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return <>
        <nav className="z-50 flex items-center text-sm">
          <Logo />
        </nav>
     </>;
}

export default Navbar;

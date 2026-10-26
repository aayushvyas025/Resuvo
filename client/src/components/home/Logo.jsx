import React from "react";
import appLogo from "../../assets/app-logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      href="#"
      aria-label="Resuvo home"
      className="inline-flex min-w-0 items-center gap-2 sm:gap-3"
    >
      <div className="flex justify-between gap-2 p-2">
        <img
          src={appLogo}
          className="size-10 min-w-0 object-contain sm:size-12 lg:size-16"
          alt="Resuvo logo"
        />
        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold text-slate-900 sm:text-2xl lg:text-4xl">Resuvo</h1>
          <p className="text-xs text-slate-500 sm:text-sm">AI-Powered Resume Builder</p>
        </div>
      </div>
    </Link>
  );
}

export default Logo;

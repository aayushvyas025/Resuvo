import { Link } from "react-router-dom";

function ActionBtns() {
  return (
    <div className="flex gap-2 p-3">
      <Link
        to="/auth"
        className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white"
      >
        Get started
      </Link>
      <Link
        to="/auth"
        className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
      >
        Login
      </Link>
    </div>
  );
}

export default ActionBtns;

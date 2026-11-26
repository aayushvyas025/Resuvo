import { Sparkles } from "lucide-react";

function FormSectionHeader({ title, subtitle }) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <button className="self-start inline-flex items-center gap-2 px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors disabled:opacity-50">
        <Sparkles className="size-5" /> AI Enhance
      </button>
    </div>
  );
}

export default FormSectionHeader;

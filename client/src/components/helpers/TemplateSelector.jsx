import { Layout } from "lucide-react";
import { useState } from "react";
import TemplateOptions from "./TemplateOptions";

function TemplateSelector({ selectedTemplate, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-indigo-600 bg-gradient-to-br from-indigo-50 to-indigo-100 ring-indigo-100 ring-indigo-300 hover:ring transition-all px-3 py-2 rounded-lg"
      >
        <Layout size={14} />
        <span className="max-sm:hidden">Template</span>
      </button>
      {isOpen && (
        <TemplateOptions
          onChange={onChange}
          setIsOpen={setIsOpen}
          selectedTemplate={selectedTemplate}
        />
      )}
    </div>
  );
}

export default TemplateSelector;

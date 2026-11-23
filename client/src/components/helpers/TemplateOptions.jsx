import { Check } from "lucide-react";
import { templateCollection } from "../../constant/content";

function TemplateOptions({ onClick, setIsOpen, selectedTemplate }) {
  return (
    <div className="absolute top-full w-xs p-3 mt-2 space-y-3 z-10 bg-white rounded-md border border-gray-200 shadow-sm">
      {templateCollection.map((template) => (
        <div
          key={template.id}
          onClick={() => {
            onchange(template.id);
            setIsOpen(false);
          }}
          className={`relative p-3 border rounded-md cursor-pointer transition-all ${selectedTemplate === template.id ? "border-indigo-400 bg-indigo-100" : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"}`}
        >
          {selectedTemplate === template.id && (
            <div className="absolute top-2 right-2">
              <div className="size-5 bg-blue-400 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>

            </div>
          )}
          <div className="space-y-1">
              <h4 className="font-medium text-gray-800">{template.name}</h4>
              <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic">{template.preview}</div>
             </div>
        </div>
      ))}
    </div>
  );
}

export default TemplateOptions;

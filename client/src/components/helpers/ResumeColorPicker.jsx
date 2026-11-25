import { Palette } from "lucide-react";
import { useState } from "react";
import PickerOptions from "./PickerOptions";

function ResumeColorPicker({ selectedColor, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-1 text-sm text-indigo-600 bg-gradient-to-br from-indigo-50 to-indigo-100 ring-indigo-300 hover:ring transition-all px-3 py-2 rounded-lg"
      >
        <Palette size={16} />
        <span className="max-sm:hidden">Accent</span>
      </button>
      {isOpen && (
        <PickerOptions selectedColor={selectedColor} onChange={onChange} />
      )}
    </div>
  );
}

export default ResumeColorPicker;

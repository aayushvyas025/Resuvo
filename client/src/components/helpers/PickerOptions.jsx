import { CircleCheck } from "lucide-react";
import { colors } from "../../constant/content";

function PickerOptions({ selectedColor, onChange }) {
  return (
    <div className="grid grid-cols-4 w-60 gap-2 absolute top-full left-0 right-0 p-3 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-md">
      {colors.map((color) => (
        <div
          key={color.value}
          onClick={() => {
            onChange(color.value);
          }}
          className="relative cursor-pointer group"
        >
          <div
            className="w-12 h-12 rounded-full border-2 border-transparent group-hover:border-black/25 transition-colors"
            style={{ backgroundColor: color.value }}
          >
            {selectedColor === color.value && (
              <div className="absolute top-0 left-0 right-0 bottom-4.5 flex items-center justify-center">
                <CircleCheck className={`size-8 mt-3 ${selectedColor === "#1F2937" ?"text-white": "text-gray-800"} font-bold`} />
              </div>
            )}
            <p className="text-xs text-gray-100 text-center mt-3 font-semibold">{color.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PickerOptions;

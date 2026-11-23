import { ChevronLeft, ChevronRight } from "lucide-react";
import TemplateSelector from "../helpers/TemplateSelector";
import ResumeColorPicker from "../helpers/ResumeColorPicker";

function SectionNavigation({
  sectionIndex,
  handleSectionNavigate,
  sections,
  resumeData,
  handleChangeTemplate,
}) {
  return (
    <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
      <div className="flex justify-between items-center mb-4 py-1 gap-2">
        <TemplateSelector
          selectedTemplate={resumeData.template}
          onChange={handleChangeTemplate}
        />
        <ResumeColorPicker />
      </div>
      <div className="flex items-center">
        {sectionIndex !== 0 && (
          <button
            onClick={() =>
              handleSectionNavigate((prevIndex) => Math.max(prevIndex - 1, 0))
            }
            className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all"
            disabled={sectionIndex === 0}
          >
            <ChevronLeft className="size-4" /> Previous
          </button>
        )}
        <button
          onClick={() =>
            handleSectionNavigate((prevIndex) =>
              Math.min(prevIndex + 1, sections.length - 1),
            )
          }
          className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${sectionIndex === sections.length - 1 && "opacity-50"}`}
          disabled={sectionIndex === sections.length - 1}
        >
          Next <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

export default SectionNavigation;

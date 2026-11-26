import { Sparkles } from "lucide-react";
import ResumeTextArea from "../helpers/ResumeTextArea";

function ProfessionalSummaryForm({ data, onChange }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center gap-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Professional Summary
          </h3>
          <p className="text-sm text-gray-500">
            Add summary for your resume here
          </p>
        </div>
        <button className="self-start inline-flex items-center gap-2 px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors disabled:opacity-50">
          <Sparkles className="size-5" /> AI Enhance
        </button>
      </div>
      <ResumeTextArea
        value={data || ""}
        onChange={(e) => onChange(e.target.value)}
        instructions={
          "Tip: Keep it concise (3-4 sentences) and focus on your most relevant achievements and skills."
        }
      />
    </div>
  );
}

export default ProfessionalSummaryForm;

import { Sparkles } from "lucide-react";
import ResumeTextArea from "../helpers/ResumeTextArea";

function ProfessionalSummaryForm({ data, onChange, handleSummaryChange }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col flex-start gap-2">
        <h3 className="text-lg font-semibold text-gray-900">
          Professional Summary
        </h3>
        <p className="text-sm text-gray-500">
          Add summary for your resume here
        </p>
        <button className="self-start inline-flex items-center gap-2 px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors disabled:opacity-50">
          <Sparkles className="size-5" /> AI Enhance
        </button>
      </div>
      <ResumeTextArea
        value={data || ""}
        onChange={() => onChange((e) => e.target.value)}
        instructions={
          "Tip: Keep it concise (3-4 sentences) and focus on your most relevant achievements and skills."
        }
      />
    </div>
  );
}

export default ProfessionalSummaryForm;

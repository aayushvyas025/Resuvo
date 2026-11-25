import { Sparkles } from "lucide-react";

function ProfessionalSummaryForm({ data, onChange, handleDataChange }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Professional Summary
          </h3>
          <p className="text-sm text-gray-500">
            Add summary for your resume here
          </p>
          <button className="flex items-center gap-2 px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors disabled:opacity-50">
            <Sparkles className="size-5" /> AI Enhance
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalSummaryForm;

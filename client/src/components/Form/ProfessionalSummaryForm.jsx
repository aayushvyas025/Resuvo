import { Sparkles } from "lucide-react";
import ResumeTextArea from "../helpers/ResumeTextArea";
import FormSectionHeader from "../helpers/FormSectionHeader";

function ProfessionalSummaryForm({ data, onChange }) {
  return (
    <div className="space-y-4">
      <FormSectionHeader
        title={"Professional Summary"}
        subtitle={"Add summary for your resume here"}
        icon={Sparkles}
        btn={"AI Enhance"}
      />
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

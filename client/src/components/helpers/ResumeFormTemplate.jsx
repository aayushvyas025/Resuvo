import { Briefcase } from "lucide-react";

function ResumeFormTemplate({ title, subtitle }) {
  return (
    <div className="text-center py-8 text-gray-500">
      <Briefcase className="h-12 w-12 mx-auto mb-3 text-gray-300" />
      <p>{title}</p>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
}

export default ResumeFormTemplate;

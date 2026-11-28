import { GraduationCap } from "lucide-react";
import FormSectionHeader from "../helpers/FormSectionHeader";
import ResumeFormTemplate from "../helpers/ResumeFormTemplate";

function EducationForm({ data, onChange }) {
  function addEducation() {
    const newEducationData = {
      _id: "",
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };

    onChange([...data, newEducationData]);
  }

  function updateEducation(index, field, value) {
    const updateEduData = [...data];
    updateEduData[index] = { ...updateEduData, [field]: value };
    onChange(updateEduData);
  }

  function deleteEducation(index) {
    const updatedEducation = data.map((_, idx) => idx !== index);
    onChange(updatedEducation);
  }

  return (
    <div className="space-y-6">
      <FormSectionHeader
        title={"Education"}
        subtitle={"Add your education details"}
        icon={GraduationCap}
        btn={"Add Education"}
        onClick={addEducation}
      />
      {data.length === 0 ? <ResumeFormTemplate /> : <div> </div>}
    </div>
  );
}

export default EducationForm;

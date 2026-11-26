import PersonalInfoForm from "../Form/PersonalInfoForm";
import ProfessionalSummaryForm from "../Form/ProfessionalSummaryForm";

function ResumeSections({
  section,
  data,
  handleChangeResumeData,
  removeBackground,
  handleRemoveBackground,
}) {
  return (
    <div className="space-y-6">
      {section.id === "personal" && (
        <PersonalInfoForm
          data={data.personal_info}
          onChange={(data) =>
            handleChangeResumeData((prev) => ({ ...prev, personal_info: data }))
          }
          removeBackground={removeBackground}
          setRemoveBackground={handleRemoveBackground}
        />
      )}
      {section.id === "summary" && <ProfessionalSummaryForm  
         data={data.professional_summary}
         handleSummaryChange={(data) => handleChangeResumeData((prev) => ({...prev, professional_summary:data}))}
       />}
    </div>
  );
}

export default ResumeSections;

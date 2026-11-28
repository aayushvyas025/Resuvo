import EducationForm from "../Form/EducationForm";
import PersonalInfoForm from "../Form/PersonalInfoForm";
import ProfessionalSummaryForm from "../Form/ProfessionalSummaryForm";
import UserExperienceForm from "../Form/UserExperienceForm";

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
      {section.id === "summary" && (
        <ProfessionalSummaryForm
          data={data.professional_summary}
          onChange={(data) =>
            handleChangeResumeData((prev) => ({
              ...prev,
              professional_summary: data,
            }))
          }
        />
      )}

      {section.id === "experience" && (
        <UserExperienceForm
          data={data.experience}
          onChange={(data) =>
            handleChangeResumeData((prev) => ({ ...prev, experience: data }))
          }
        />
      )}

      {section.id === "education" && (
        <EducationForm
          data={data.education}
          onChange={(data) =>
            handleChangeResumeData((prev) => ({ ...prev, education: data }))
          }
        />
      )}
    </div>
  );
}

export default ResumeSections;

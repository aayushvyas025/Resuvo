import PersonalInfoForm from "../Form/PersonalInfoForm";

function ResumeSections({
  section,
  personalInfo,
  handleChangeResumeData,
  removeBackground,
  handleRemoveBackground,
}) {
  return (
    <div className="space-y-6">
      {section.id === "personal" && (
        <PersonalInfoForm
          data={personalInfo}
          onChange={(data) =>
            handleChangeResumeData((prev) => ({ ...prev, personal_info: data }))
          }
          removeBackground={removeBackground}
          setRemoveBackground={handleRemoveBackground}
        />
      )}
    </div>
  );
}

export default ResumeSections;

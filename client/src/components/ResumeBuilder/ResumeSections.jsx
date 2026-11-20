import PersonalInfoForm from "../Form/PersonalInfoForm";

function ResumeSections({ section }) {
  return (
    <div className="space-y-6">
      {section.id === "personal" && <PersonalInfoForm />}
    </div>
  );
}

export default ResumeSections;

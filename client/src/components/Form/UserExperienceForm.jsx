import { PlusIcon } from "lucide-react";
import FormSectionHeader from "../helpers/FormSectionHeader";

function UserExperienceForm({ data, onChange }) {
  return (
    <div className="space-y-6">
      <FormSectionHeader
        title=" Professional Experience"
        subtitle={"Add your job experience"}
        icon={PlusIcon}
        btn={"Add Experience"}
      />
    </div>
  );
}

export default UserExperienceForm;

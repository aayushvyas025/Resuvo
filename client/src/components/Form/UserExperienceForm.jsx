import { PlusIcon, Sparkles, Trash2 } from "lucide-react";
import FormSectionHeader from "../helpers/FormSectionHeader";
import ExperienceTemplate from "../helpers/ExperienceTemplate";

function UserExperienceForm({ data, onChange }) {
  function addExperience() {
    const newExperience = {
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      description: "",
      is_current: false,
    };

    onChange([...data, newExperience]);
  }

  function removeExperience(index) {
    const updatedData = data.filter((_, idx) => idx !== index);
    onChange(updatedData);
  }

  function updateExperience(index, field, value) {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  }

  return (
    <div className="space-y-6">
      <FormSectionHeader
        title=" Professional Experience"
        subtitle={"Add your job experience"}
        icon={PlusIcon}
        btn={"Add Experience"}
        onClick={addExperience}
      />

      {data.length === 0 ? (
        <ExperienceTemplate />
      ) : (
        <div className="space-y-4">
          {data.map((experience, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-center">
                <h4>Experience #{idx + 1}</h4>
                <button
                  onClick={() => removeExperience(idx)}
                  className="text-red-500 hover:text-red-700 transition-colors hover:bg-slate-200 rounded-full p-2"
                >
                  <Trash2 className="size-5" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={experience.company || ""}
                  placeholder="Company Name"
                  className="px-3 py-2 text-sm rounded-lg"
                  onChange={(e) =>
                    updateExperience(idx, "company", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={experience.position || ""}
                  placeholder="Job Title"
                  className="px-3 py-2 text-sm rounded-lg"
                  onChange={(e) =>
                    updateExperience(idx, "position", e.target.value)
                  }
                />

                <input
                  type="month"
                  value={experience.start_date || ""}
                  className="px-3 py-2 text-sm rounded-lg"
                  onChange={(e) =>
                    updateExperience(idx, "start_date", e.target.value)
                  }
                />
                <input
                  type="month"
                  value={experience.end_date || ""}
                  disabled={experience.is_current}
                  className="px-3 py-2 text-sm rounded-lg disabled:bg-gray-100"
                  onChange={(e) =>
                    updateExperience(idx, "end_date", e.target.value)
                  }
                />
                <label className="flex gap-1">
                  <input
                    type="checkbox"
                    checked={experience.is_current || false}
                    onChange={(e) =>
                      updateExperience(
                        idx,
                        "is_current",
                        e.target.checked ? true : false,
                      )
                    }
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="mx-1 text-sm text-gray-700">
                    Currently working here
                  </span>
                </label>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700">
                    Job Description
                  </label>
                  <button className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors disabled:opacity-50">
                    <Sparkles className="h-3 w-3" />
                    Enhance with AI
                  </button>
                </div>
                <textarea
                  value={experience.description || ""}
                  rows={4}
                  className="w-full text-sm px-3 py-2 rounded-lg resize-none"
                  placeholder="Describe your key responsibilities and achievements..."
                  onChange={(e) =>
                    updateExperience(idx, "description", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserExperienceForm;

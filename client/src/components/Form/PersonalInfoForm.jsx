import { User } from "lucide-react";
import { personalInfoFormFields } from "../../constant/content";
import ResumeFormInput from "../helpers/ResumeFormInput";

function PersonalInfoForm({
  data,
  onChange,
  removeBackground,
  setRemoveBackground,
}) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">
        Personal Information
      </h3>
      <p className="text-small text-gray-600">
        Get Started with Personal Information
      </p>
      <div className="flex items-center gap-2">
        <label htmlFor="profile-image">
          {data.image ? (
            <img
              src={
                typeof data.image === "string"
                  ? data.image
                  : URL.createObjectURL(data.image)
              }
              alt="user-image"
              className="w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300"
            />
          ) : (
            <div className="inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer">
              <User className="size-10 p-2.5 border rounded-full" />
              Upload User Image
            </div>
          )}
        </label>
        <input
          id="profile-image"
          type="file"
          accept="image/jpeg, image/png"
          className="hidden"
          onChange={(e) => handleChange("image", e.target.files[0])}
        />
        {typeof data.image === "object" && (
          <div className="flex flex-col gap-1 pl-4 text-sm">
            <p>Remove Background</p>
            <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setRemoveBackground((prev) => !prev)}
                checked={removeBackground}
              />
              <div className="w-9 h-5 bg-slate-300 rounded-full peer peer-checked:bg-indigo-600 transition-colors duration-200"></div>
              <span className="dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-4"></span>
            </label>
          </div>
        )}
      </div>
      {personalInfoFormFields.map((field) => {
        const Icon = field.icon;
        return (
          <div key={field.key} className="space-y-1 mt-5">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Icon className="size-5" />
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <ResumeFormInput
              type={field.type}
              value={data[field.key] || ""}
              placeholder={`Enter your ${field.label.toLowerCase()}`}
              onChange={(e) => handleChange(field.key, e.target.value)}
              required={field.required}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PersonalInfoForm;

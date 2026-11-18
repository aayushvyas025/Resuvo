import { XIcon } from "lucide-react";
import ResumeUploadInput from "../helpers/ResumeUploadInput";

function ResumeBuilderForm({
  modalTitle,
  submitLabel,
  resumeTitle,
  onTitleChange,
  onSubmit,
  onClose,
  isUploadMode,
  onFileChange,
  resumeFile,
}) {
  return (
    <form
      onSubmit={onSubmit}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
    >
      <div
        className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6 "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{modalTitle}</h2>
        <input
          value={resumeTitle}
          type="text"
          placeholder="Enter Resume Title"
          className="w-full px-4 py-2 mb-4 focus:border-indigo-600 ring-indigo-600"
          onChange={onTitleChange}
          required
        />
        {isUploadMode && (
          <ResumeUploadInput name={resumeFile?.name} onChange={onFileChange} />
        )}
        <button className="text-center w-full text-white bg-indigo-400 p-2 rounded-md hover:bg-indigo-600">
          {submitLabel}
        </button>
          <XIcon className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" onClick={onClose} />
      </div>
    </form>
  );
}

export default ResumeBuilderForm;

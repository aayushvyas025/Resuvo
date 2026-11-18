import { XIcon } from "lucide-react";

function ResumeBuilderForm({
  title,
  text,
  formTitle,
  handleCloseForm,
  handleOnChange,
  handleFormSubmit,
  closeModal,
  uploadType=false
}) {
  return (
    <form
      onSubmit={handleFormSubmit}
      onClick={closeModal}
      className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
    >
      <div
        className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6 "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <input
          value={formTitle}
          type="text"
          placeholder="Enter Resume Title"
          className="w-full px-4 py-2 mb-4 focus:border-indigo-600 ring-indigo-600"
          onChange={handleOnChange}
          required
        />
        <button className="text-center w-full text-white bg-indigo-400 p-2 rounded-md hover:bg-indigo-600">
          {text}
        </button>
        <XIcon
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
          onClick={handleCloseForm}
        />
      </div>
    </form>
  );
}

export default ResumeBuilderForm;

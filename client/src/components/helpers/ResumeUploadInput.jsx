import { UploadCloud } from "lucide-react";

function ResumeUploadInput({ name, onChange }) {
    
  return (
    <div>
      <label htmlFor="resume-input" className="text-sm text-slate-700 block">
        Select Resume File
        <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-indigo-500 hover:text-indigo-700 cursor-pointer transition-colors duration-500 ease-in-out">
          {name ? (
            <p className="text-indigo-700">{name}</p>
          ) : (
            <>
              <UploadCloud className="size-12 stroke-1" />
              <p>Upload Resume</p>
            </>
          )}
        </div>
      </label>
      <input
        type="file"
        id="resume-input"
        accept=".pdf"
        hidden
        onChange={onChange}
      />
    </div>
  );
}

export default ResumeUploadInput;

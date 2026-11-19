import { FilePenLineIcon, PencilIcon, TrashIcon } from "lucide-react";

function UsersResumeChip({
  title,
  baseColor,
  updatedAt,
  onClick,
  handleEdit,
  handleDelete,
}) {
  return (
    <button
      className="relative w-full sm:max-w-36 p-4 pb-4 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
        borderColor: `${baseColor + "40"}`,
      }}
      onClick={onClick}
    >
      <FilePenLineIcon
        className={`size-6  group-hover:scale-105 transition-all`}
        style={{ color: baseColor }}
      />
      <p className="text-sm text-slate-600 group-hover:scale-105 transition-all px-2 text-center pb-2">
        {title}
      </p>
      <p
        className="absolute -bottom-2.5 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center pb-4 font-semibold"
        style={{ color: baseColor + "90" }}
      >
        Updated on {new Date(updatedAt).toLocaleDateString()}
      </p>
      <div
        onClick={(e) => e.preventDefault()}
        className="absolute top-1 right-1 group-hover:flex items-center hidden"
      >
        <TrashIcon
          className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
          onClick={handleDelete}
        />
        <PencilIcon
          className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
          onClick={handleEdit}
        />
      </div>
    </button>
  );
}

export default UsersResumeChip;

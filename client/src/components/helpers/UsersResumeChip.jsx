import { FilePenLineIcon, PencilIcon, TrashIcon } from "lucide-react";
import { Link } from "react-router-dom";

function UsersResumeChip({
  title,
  baseColor,
  updatedAt,
  href,
  handleEdit,
  handleDelete,
}) {
  return (
    <div
      className="relative w-full sm:max-w-36 rounded-lg border group
                 hover:shadow-lg transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
        borderColor: `${baseColor + "40"}`,
      }}
    >
      <Link
        to={href}
        className="flex flex-col items-center justify-center gap-2 p-4 pb-4"
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
      </Link>
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-1 right-1 group-hover:flex items-center hidden"
      >
        <button
          type="button"
          aria-label="Delete resume"
          onClick={handleDelete}
          className="p-1.5 hover:bg-white/50 rounded text-slate-700"
        >
          <TrashIcon className="size-4" />
        </button>

        <button
          type="button"
          aria-label="Edit resume"
          onClick={handleEdit}
          className="p-1.5 hover:bg-white/50 rounded text-slate-700"
        >
          <PencilIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}

export default UsersResumeChip;

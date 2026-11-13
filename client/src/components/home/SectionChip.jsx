import { Zap } from "lucide-react";

function SectionChip({ title }) {
  return (
    <div class="flex items-center mr-auto gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
      <Zap className="size-4 text-indigo-600" />
      <span>{title}</span>
    </div>
  );
}

export default SectionChip;

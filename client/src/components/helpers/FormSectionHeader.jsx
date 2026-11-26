function FormSectionHeader({ title, subtitle, onClick, icon: Icon, btn }) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors disabled:opacity-50"
      >
        <Icon className="size-5" /> {btn}
      </button>
    </div>
  );
}

export default FormSectionHeader;

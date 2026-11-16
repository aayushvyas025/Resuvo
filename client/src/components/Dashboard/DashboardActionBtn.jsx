function DashboardActionBtn({ onClick, icon: Icon, text }) {
  return (
    <button
      onClick={onClick}
      className="w-full p-2 bg-white sm:max-w-36 flex flex-col items-center justify-center rounded-lg gap-2 text-slate gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <Icon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from indigo-300 to-indigo-500 text-white rounded-full" />

      <p className="text-sm group-hover:text-indigo-600 transaction-all">
        {text}
      </p>
    </button>
  );
}

export default DashboardActionBtn;

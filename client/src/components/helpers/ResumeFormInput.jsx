function ResumeFormInput({ type, onChange, value, placeholder, required }) {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors text-sm"
      required={required}
    />
  );
}

export default ResumeFormInput;

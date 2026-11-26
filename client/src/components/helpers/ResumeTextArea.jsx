function ResumeTextArea({ value, onChange, instructions }) {
  return (
    <div className="mt-6">
      <textarea
        value={value}
        onChange={onChange}
        rows={7}
        placeholder="Write a compelling professional summary that highlights your key strength and career objectives..."
        className="w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 outline-none transition-colors resize-none"
      />
      {instructions && (
        <p className="text-sm text-gray-500 max-w-4/5 mx-auto text-center">
          {instructions}{" "}
        </p>
      )}
    </div>
  );
}

export default ResumeTextArea;

import HorizontalRule from "../helpers/HorizontalRule";

function ProgressBar({ width }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
      <HorizontalRule
        style={"absolute top-0 left-0 right-0 border-2 border-gray-200"}
      />
      <HorizontalRule
        style={
          "absolute top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 border-none transition-all duration-2000"
        }
        customStyle={{
          width: width,
        }}
      />
    </div>
  );
}

export default ProgressBar;

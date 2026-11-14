import { EyeIcon, EyeOff } from "lucide-react";

function Input({
  type = "text",
  onChange,
  value,
  placeholder,
  icon,
  passwordField = false,
  showPassword,
  handleShowPassword
}) {
  return (
    <div className="flex items-center max-w-md w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 p-1">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-base w-full h-full"
        onChange={onChange}
        value={value}
        required
      />
      {passwordField && (
        <div className="p-1 hover:cursor-pointer" onClick={handleShowPassword}>
          {showPassword ? (
            <EyeIcon className="text-slate-500" />
          ) : (
            <EyeOff className="text-slate-500" />
          )}
        </div>
      )}
    </div>
  );
}

export default Input;

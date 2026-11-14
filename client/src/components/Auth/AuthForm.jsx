import { useState } from "react";
import Input from "../helpers/Input";
import { Lock, Mail, User } from "lucide-react";

function AuthForm() {
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");
  const [formState, setFormState] = useState(urlState || "signin");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="max-w-xl w-full text-center border border-indigo-300/60 rounded-2xl px-8 bg-white"
      onSubmit={handleSubmit}
    >
      <h1 className="text-gray-900 text-3xl mt-10 font-medium">
        {formState === "signin" ? "Login" : "Sign Up"}
      </h1>
      <p className="text-gray-600 text-md mt-2 mb-4">
        Please {formState === "signin" ? "sign in" : "sign up"} to continue
      </p>
      <div className="flex  flex-col items-center justify-center gap-2 p-2">
        {formState !== "signin" && (
          <Input
            type="text"
            value={formData.name}
            placeholder={"Name"}
            icon={<User className="text-indigo-600 size-6" />}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        )}
        <Input
          type="email"
          value={formData.email}
          placeholder={"Email"}
          icon={<Mail className="text-indigo-600 size-6" />}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input
          type={showPassword ? "text" : "password"}
          value={formData.password}
          placeholder={"Password"}
          icon={<Lock className="text-indigo-600 size-6" />}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          passwordField={true}
          showPassword={showPassword}
          handleShowPassword={() => setShowPassword(!showPassword)}
        />
        <div className="mt-3 w-96 text-start text-indigo-500">
          <a className="text-base" href="#">
            Forgot password ?
          </a>
        </div>

        <button
          type="submit"
          className="mt-2 max-w-sm w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
        >
          {formState === "signin" ? "Login" : "Sing Up"}
        </button>
        <p className="text-gray-500 text-sm mt-2 mb-11">
          {formState === "signin" ? "Don’t" : "Already"} have an account?{" "}
          <button
            className="text-indigo-500"
            type="button"
            onClick={() =>
              setFormState(formState === "signin" ? "register" : "signin")
            }
          >
            {formState === "signin" ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </form>
  );
}

export default AuthForm;

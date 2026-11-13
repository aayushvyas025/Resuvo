import React, { useState } from "react";
import Input from "../helpers/Input";
import { Mail, User } from "lucide-react";

function AuthForm() {
  const [formState, setFormState] = useState("login");
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
      className="max-w-2xl w-full text-center border border-indigo-300/60 rounded-2xl px-8 bg-white"
      onSubmit={handleSubmit}
    >
      <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
      <p className="text-gray-600 text-md mt-2 mb-4">
        Please sign in to continue
      </p>
      <div className="flex  flex-col items-center justify-center gap-4 p-2">

      {formState !== "login" && (
          <Input
          type="text"
          value={formData.name}
          placeholder={"Name"}
          icon={<User className="text-indigo-600 size-6" />}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
    )}
       <Input
          type="text"
          value={formData.name}
          placeholder={"Name"}
          icon={<Mail className="text-indigo-600 size-6" />}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
    </div>
    </form>
  );
}

export default AuthForm;

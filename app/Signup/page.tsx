'use client'
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface SignupInput {
  email?: string;       //Auth
  username: string;
  password: string;
}

export default function () {
  const navigate = useRouter();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    username: "",
  });

  async function sendRequest() {
    navigate.push("/");
  }

  return (
    <div className="h-screen font-dm-sans flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full sm:w-auto lg:w-2/5">
        <div className="font-semibold font-dm-sans text-xl lg:text-3xl mb-4 text-center">
         Create an account
        </div>
          <LabelledInput
            label="Email"
            placeholder="user12@email"
            onChange={(e) =>
              setPostInputs((c) => ({ ...c, email: e.target.value }))
            }
          />
        
        <LabelledInput
          label="Username"
          placeholder="Enter username"
          onChange={(e) =>
            setPostInputs((c) => ({ ...c, username: e.target.value }))
          }
        />
        <LabelledInput
          label="Password"
          type="password"
          placeholder=""
          onChange={(e) =>
            setPostInputs((c) => ({ ...c, password: e.target.value }))
          }
        />
        <button
          type="button"
          onClick={sendRequest}
          className="w-full mt-4 bg-indigo-700 hover:bg-indigo-600 text-white font-bold rounded-lg px-4 py-2 focus:outline-none"
        >
       Sign up
        </button>
        <div className="text-center mt-3">
              Already have an account?{" "}
              <span
                role="button"
                onClick={() => navigate.push("/Auth")}
                className="underline cursor-pointer"
              >
                Login
              </span>
          
        </div>
      </div>
    </div>
  );
}

interface LabelledInputProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type = "text",
}: LabelledInputProps) {
  return (
    <div className="mb-3">
      <label className="font-bold text-lg lg:text-2xl">{label}</label>
      <input
        type={type}
        className="w-full h-12 px-4 py-2.5 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 dark:bg-slate-950 dark:border-gray-600 dark:placeholder-slate-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:bg-white focus:text-black"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

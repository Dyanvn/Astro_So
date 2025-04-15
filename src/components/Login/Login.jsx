"use client";
import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import PhoneInput from "./PhoneInput";
import PasswordInput from "./PasswordInput";
import RememberForgot from "./RememberForgot";
import LoginButton from "./LoginButton";
import RegisterPrompt from "./RegisterPrompt";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    phone: "",
    password: "",
  });

  const validate = () => {
    const newErrors = {
      phone: phone.length < 10 ? "Phone number must be at least 10 digits" : "",
      password:
        password.length < 8 ? "Password must be at least 8 characters" : "",
    };
    setErrors(newErrors);

    if (!newErrors.phone && !newErrors.password) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1500);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
  };

  return (
    <main className="flex flex-col justify-center items-center p-4 w-screen text-white bg-[url(/SUBg.jpg)] min-h-[screen]">
      <div className="flex flex-col mt-20 items-center w-full max-w-[555px]">
        <LoginHeader />
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          <PhoneInput phone={phone} setPhone={setPhone} error={errors.phone} />
          <PasswordInput
            password={password}
            setPassword={setPassword}
            error={errors.password}
          />
          <RememberForgot remember={remember} setRemember={setRemember} />
          <LoginButton isSubmitting={isSubmitting} />
        </form>
        <div className="mb-10">
        <RegisterPrompt />
        </div>
      </div>
    </main>
  );
};

export default Login;

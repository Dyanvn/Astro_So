"use client";
import React, { useState } from "react";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import ErrorMessage from "./ErrorMessage";

const SignUp = () => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    }
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen w-full bg-[url('/SUBg.jpg')] font-sans text-white py-8 px-4">
      <div className="max-w-[600px] mx-auto">
        <FormHeader />

        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          <div className="flex gap-[16px] bg-[#131114]  rounded-[10px] p-[20px] border-[1px] border-[#2D2C2E]">
            <span className="text-[16px] text-[#B7B5B5]">+84</span>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Phone number"
              className="bg-transparent flex-1 outline-none text-[16px]"
            />
          </div>
          {errors.phone && <ErrorMessage message={errors.phone} />}

          <FormInput
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Full Name"
          />
          {errors.name && <ErrorMessage message={errors.name} />}

          <PasswordInput
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Password"
          />
          {errors.password && <ErrorMessage message={errors.password} />}

          <PasswordInput
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <ErrorMessage message={errors.confirmPassword} />
          )}

          <FormInput
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Email (optional)"
          />

          <div className="flex items-center gap-[8px] mb-8">
            <input
              type="checkbox"
              id="terms"
              checked={formData.termsAccepted}
              onChange={(e) =>
                handleInputChange("termsAccepted", e.target.checked)
              }
              className="w-5 h-5 bg-[#131114]  border-[1px] border-[#2D2C2E] rounded-[4px]"
            />
            <label htmlFor="terms" className="text-[16px]">
              I agree to the Terms of Service
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#2D2C2E] text-white font-semibold py-[20px] px-[40px] rounded-full text-[18px] tracking-[1.8px] transform transition-transform duration-200 hover:scale-[1.02]"
          >
            Sign Up
          </button>
        </form>

        <footer className="flex justify-center items-center gap-[16px] mt-8">
          <p className="text-[#999999] text-[18px]">Already have an account?</p>
          <a href="/login" className="text-white text-[18px] hover:underline">
            Login now
          </a>
        </footer>
      </div>
    </main>
  );
};

export default SignUp;

import React from "react";

const RememberForgot = ({ remember, setRemember }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <label className="flex gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          className="w-5 h-5 rounded bg-neutral-900 border-stone-400"
          checked={remember}
          onChange={(event) => setRemember(event.target.checked)}
        />
        <span className="text-base tracking-widest">Remember login</span>
      </label>
      <a
        href="#"
        className="text-base tracking-widest opacity-80"
        onClick={(e) => e.preventDefault()}
      >
        Forgot password?
      </a>
    </div>
  );
};

export default RememberForgot;

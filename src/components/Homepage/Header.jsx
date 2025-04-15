"use client";
import React from "react";

export const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-start pr-4 w-full font-semibold text-center bg-fuchsia-900 max-md:max-w-full">
      <div className="flex my-auto text-3xl leading-loose text-fuchsia-50 tracking-[3.2px]">
        <img
          src="/AstroIcon.png"
          alt="Astro Logo"
          className="object-contain shrink-0 ml-auto max-w-full aspect-[1.51] w-[101px]"
        />
        <h1 className="self-start border border-none basis-auto">ASTRO SỐ</h1>
      </div>
      <nav className="flex gap-3 items-start my-auto text-xl leading-3 text-white tracking-[2px] max-md:max-w-full">
        <div className="flex gap-4">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            Giới thiệu
          </a>
          <a
            href="#"
            className=""
          >
            Thần số học
          </a>
          <a href="#" className="">
            Chiêm tinh học
          </a>
          <a href="#" className="">
            Hướng dẫn
          </a>
          <a href="/signup" className="">
            Đăng nhập
          </a>
        </div>
      </nav>
    </header>
  );
};

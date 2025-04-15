"use client";
import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ArticlesSection } from "./ArticlesSection";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;

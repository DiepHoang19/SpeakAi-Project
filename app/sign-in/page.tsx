"use client";
import Register from "@/src/components/page/account/register";
import SignIn from "@/src/components/page/account/sign-in";

import React, { useState } from "react";

function page() {
  const tabs = [
    {
      name: "SignIn",
      code: "sign-in",
    },
    {
      name: "Register",
      code: "register",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].code);

  return (
    <div className="">
      <div className="mt-16 p-4 grid sm:grid-cols-2 grid-cols-1 mx-auto lg:w-6xl">
        <div className="lg:w-lg w-full mx-auto bg-[#190b37] border border-[#291650] rounded-[16px] shadow-sm sm:p-8">
          <div className="mb-4">
            <h5 className="font-[600] text-[30px] mb-2">
              {activeTab === "sign-in" ? "Sign In" : "Create Account"}
            </h5>
            <p className="text-sm">
              {activeTab === "sign-in"
                ? "Enter your credentials to access your account"
                : "Fill out the form to create your account"}
            </p>
          </div>

          <div className="mt-8 mb-8 bg-[#4b2f8d] max-w-screen-lg mx-auto rounded-[10px]">
            <div className="px-1 py-1">
              <nav className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.code}
                    onClick={() => setActiveTab(tab.code)}
                    className={`rounded-[10px] px-3 py-2 flex items-center justify-center gap-2 text-sm font-medium w-full text-center ${
                      activeTab === tab.code
                        ? "bg-[#010005] text-white cursor-pointer"
                        : "text-white  cursor-pointer"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          {activeTab === "sign-in" ? <SignIn /> : <Register />}
          {/* <div className="mt-4 border-t border-gray-300 ư-full" /> */}
        </div>
        <div>
          <h3 className="text-white text-4xl font-bold">
            Improve Your Speaking Skills with SpeakAl
          </h3>
          <p className="text-white text-lg mt-4">
            Practice speaking, get instant feedback, and track your progress
            with our advanced Al language coach.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;

"use client";
import {
  ArrowLeftIcon,
  ChatBubbleBottomCenterIcon,
  CheckCircleIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Practice() {
  const tabs = [
    {
      name: "Pronunciation",
      code: "Pronunciation",
      current: true,
      icon: <MicrophoneIcon className="w-4 h-4" />,
    },
    {
      name: "Conversation",
      code: "Conversation",
      current: true,
      icon: <ChatBubbleBottomCenterIcon className="w-4 h-4" />,
    },
    {
      name: "Grammar",
      code: "Grammar",
      current: true,
      icon: <CheckCircleIcon className="w-4 h-4" />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].code);
  const router = useRouter();

  return (
    <>
      <div className="mt-[10rem] p-2 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4 ">
          <ArrowLeftIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => router.push("/")}
          />
          <p className="text-xs text-white ">Back</p>
          <p className="text-2xl font-[600] text-white">Speaking Practice</p>
        </div>
        <p className="text-sm text-white mt-2">
          Perfect your pronunciation and speaking skills with real-time AI
          feedback. Choose an exercise type below to get started.
        </p>
        <div className="mt-10 bg-[#4b2f8d] max-w-screen-lg mx-auto rounded-[10px]">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {tabs.map((tab) => (
                <div className="flex items-center">
                  {tab.icon}
                  <option key={tab.code} value={tab.code}>
                    {tab.name}
                  </option>
                </div>
              ))}
            </select>
          </div>
          <div className="hidden sm:block px-2 py-2">
            <nav className="flex space-x-4 ">
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
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-lg p-4 mx-auto bg-[#190b37] border border-[#291650] rounded-[16px] shadow-sm sm:p-8 ">
          <h5 className="mb-2 text-xl font-[600] text-white">
            Pronunciation Practice
          </h5>
          <p className="mb-5 text-base text-white text-[14px]">
            Practice your pronunciation with our Al feedback system. Speak
            clearly into your microphone, and our Al will analyze your speech
            patterns to provide you with detailed feedback.
          </p>

          <div className="border bg-[#201041] border-[#291650] mb-4 rounded-[16px] p-4">
            <h5 className="mb-2 text-sm text-white">Your exercise:</h5>
            <p className="mb-5 text-white text-lg italic">
              "How much wood would a woodchuck chuck if a woodchuck could chuck
              wood?"
            </p>
          </div>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 cursor-pointer">
            <a className="w-full sm:w-auto bg-[#8861ea] focus:ring-4 focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 ">
              <div className="text-left flex items-center gap-2">
                <MicrophoneIcon className="w-4 h-4" />
                <div className="text-xs">Start Recording</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="max-w-screen-lg p-4 mx-auto bg-[#190b37] border border-[#291650] rounded-[16px] shadow-sm sm:p-8 ">
          <div className="flex items-center gap-4">
            <SpeakerWaveIcon className="w-6 h-6 text-[#7c57d7]" />
            <h5 className="mb-2 text-xl font-[600] text-white">
              Example Pronunciation
            </h5>
          </div>
          <p className="mb-5 text-base text-gray-500 sm:text-lg ">
            Listen to a native speaker pronounce the exercise phrase to help you
            with your practice.
          </p>

          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 cursor-pointer">
            <a className="w-full sm:w-auto bg-black border border-[#291650] focus:ring-4 focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 ">
              <div className="text-left flex items-center gap-2">
                <SpeakerWaveIcon className="w-4 h-4 " />
                <div className="text-xs">Play Audio Sample</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Practice;

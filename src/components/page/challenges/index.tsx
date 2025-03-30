"use client";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import React from "react";
import ChallengeStats from "./components/challenge-stats";
import WeeklyAchievement from "./components/weekly-achievement";
import {
  ArrowTrendingUpIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import ConvertstationStaterts from "./components/daily-challenges/convertstation-staterts";
import BusinesPresentation from "./components/daily-challenges/busines-presentation";
import PublicSpeech from "./components/monthly-challenges/public-speech";
import DebateChallenge from "./components/monthly-challenges/debate-challenge";
import TravelDialogue from "./components/weekly-challenges/travel-dialogue";
import Storytelling from "./components/weekly-challenges/storytelling";

function Challenges() {
  const router = useRouter();
  return (
    <>
      <div className="mt-[10rem] max-w-screen-2xl mx-auto sm:p-2 p-6">
        <div className="flex items-center gap-4 ">
          <ArrowLeftIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => router.push("/")}
          />
          <p className="text-xs text-white ">Back</p>
          <p className="text-2xl font-[600] text-white">Language Challenges</p>
        </div>
        <p className="text-sm text-white mt-2">
          Take on time-limited speaking challenges to test your skills, earn
          points, and compete with other learners.
        </p>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-4 grid grid-cols-1 sm:grid-cols-[30%_70%] gap-4 p-6">
        <ChallengeStats />
        <WeeklyAchievement />
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <ClockIcon className="w-6 h-6 text-[#7452c9]" />
            <h3 className="font-bold text-xl">Daily Challenges</h3>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-6 p-6">
        <ConvertstationStaterts />
        <BusinesPresentation />
      </div>
      <div>
        <div className="mt-4 max-w-screen-2xl mx-auto gap-4 p-6">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-6 h-6 text-[#7452c9]" />
            <h3 className="font-bold text-xl">Weekly Challenges</h3>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto mt-4 grid sm:grid-cols-2 grid-cols-1 gap-6 p-6">
          <TravelDialogue />
          <Storytelling />
        </div>
      </div>
      <div>
        <div className="max-w-screen-2xl mx-auto gap-4 p-6">
          <div className="flex items-center space-x-2">
            <ArrowTrendingUpIcon className="w-6 h-6 text-[#7452c9]" />
            <h3 className="font-bold text-xl">Monthly Challenges</h3>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-6 p-6">
          <PublicSpeech />
          <DebateChallenge />
        </div>
      </div>
    </>
  );
}

export default Challenges;

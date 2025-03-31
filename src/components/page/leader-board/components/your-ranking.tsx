"use client";
import { StarIcon, UserIcon } from "@heroicons/react/24/outline";
import React from "react";

function YourRanking() {
  return (
    <div className="mt-6">
      <div className="bg-[#0b041c] border border-[#291a4e] rounded-[16px] shadow-sm p-6">
        <div className="mt-4 flex items-center">
          <div className="bg-[#372267] rounded-full p-4 w-20 h-20 flex items-center justify-center">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.15 16.5V18.6"
                stroke="#7a57d4"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.15002 22H17.15V21C17.15 19.9 16.25 19 15.15 19H9.15002C8.05002 19 7.15002 19.9 7.15002 21V22V22Z"
                stroke="#7a57d4"
                strokeWidth={1.5}
                strokeMiterlimit={10}
              />
              <path
                d="M6.15002 22H18.15"
                stroke="#7a57d4"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z"
                stroke="#7a57d4"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.46998 11.65C4.71998 11.41 4.05998 10.97 3.53998 10.45C2.63998 9.44998 2.03998 8.24998 2.03998 6.84998C2.03998 5.44998 3.13998 4.34998 4.53998 4.34998H5.18998C4.98998 4.80998 4.88998 5.31998 4.88998 5.84998V8.84998C4.88998 9.84998 5.09998 10.79 5.46998 11.65Z"
                stroke="#7a57d4"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.53 11.65C19.28 11.41 19.94 10.97 20.46 10.45C21.36 9.44998 21.96 8.24998 21.96 6.84998C21.96 5.44998 20.86 4.34998 19.46 4.34998H18.81C19.01 4.80998 19.11 5.31998 19.11 5.84998V8.84998C19.11 9.84998 18.9 10.79 18.53 11.65Z"
                stroke="#7a57d4"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="ml-4 w-full">
            <p className="text-[#d1cde1] text-lg font-bold">Your Ranking</p>
            <div className="flex items-center justify-between">
              <p className="text-[#d1cde1] text-[15px] font-[600]">
                You're currently ranked #24 out of 1,254 learners. Keep
                practicing to climb the ranks!
              </p>
              <button
                type="button"
                className="text-white flex items-center gap-2 cursor-pointer bg-[#8861ea] hover:bg-[#8861ea] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2s"
              >
                <UserIcon className="w-4 h-4 text-white" />
                View Your Profile
              </button>
            </div>
            <p className="text-[#d1cde1] text-xs">
              25 more points to reach the next tier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourRanking;

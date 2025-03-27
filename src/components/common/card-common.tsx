import React from "react";

function CardCommon({ children }: any) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
}

export default CardCommon;

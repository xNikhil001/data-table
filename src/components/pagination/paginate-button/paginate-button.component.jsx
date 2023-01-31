import React from "react";

export default function PaginateButton({text,onClickHandler}) {
  return (
    <button
      className="px-4 py-1 border-[2px] border-blue-500 rounded-md uppercase font-semibold"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
}

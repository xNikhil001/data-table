import React from "react";

export default function SelectButton({onSelectHandler,total}) {
  return (
    <select className="border-[2px] outline-0 border-blue-500 rounded-md py-1 uppercase font-semibold ml-4" onChange={onSelectHandler} value={total}>
      {[10, 25, 50, 100].map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
  );
}

import React from "react";

export default function SearchBox({onChangeHandler,placeholder}) {
  return (
    <div className="my-8">
      <input
        type="search"
        onChange={onChangeHandler}
        className="px-4 py-2 border-2 border-blue-500 rounded-sm outline-0"
        placeholder={placeholder}
      />
    </div>
  );
}

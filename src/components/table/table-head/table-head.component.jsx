import React from "react";

export default function TableHead({reverse}) {
  return (
    <thead className="bg-gray-400">
      <tr>
        <th className="flex p-4">
          ID
          <span className="text-green-700 font-bold cursor-pointer" onClick={reverse}>
            ^
          </span>
        </th>
        <th className="p-4">LOGO</th>
        <th className="p-4">TITLE</th>
      </tr>
    </thead>
  );
}

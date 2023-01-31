import React from "react";

export default function TableHead({reverse}) {
  return (
    <thead>
      <tr>
        <th>
          <span>ID</span>
          <span className="text-green-700 font-bold cursor-pointer" onClick={reverse}>
            ^
          </span>
        </th>
        <th>LOGO</th>
        <th>TITLE</th>
      </tr>
    </thead>
  );
}

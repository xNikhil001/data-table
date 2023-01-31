import React from "react";

export default function TableBodyRow({ post: { id, url, title } }) {
  return (
    <tr key={id} className="border-b-[1px] border-b-gray even:bg-gray-200">
      <td className="p-4">{id}</td>
      <td className="p-4">
        <img src={url} alt="Image" width="30px" height="30px" />
      </td>
      <td className="p-4">{title}</td>
    </tr>
  );
}

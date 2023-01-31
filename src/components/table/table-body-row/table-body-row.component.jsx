import React from "react";

export default function TableBodyRow({ post: { id, url, title } }) {
  return (
    <tr key={id} className="border-b-[1px] border-b-gray even:bg-gray-300 odd:bg-gray-200">
      <td>{id}</td>
      <td>
        <img src={url} alt="Image" width="40px" height="40px" />
      </td>
      <td>{title}</td>
    </tr>
  );
}

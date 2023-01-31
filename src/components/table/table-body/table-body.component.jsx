import React from "react";
import TableBodyRow from "../table-body-row/table-body-row.component";

export default function TableBody({filteredPosts,page,total}) {
  return (
    <tbody>
      {filteredPosts.slice(page * total - total, page * total).map((post) => (
        <TableBodyRow key={post.id} post={post} />
      ))}
    </tbody>
  );
}

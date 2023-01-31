import React from "react";
import TableBody from "./table-body/table-body.component";
import TableHead from "./table-head/table-head.component";

export default function Table({ filteredPosts, reverse,page,total }) {
  return (
    <table border="0" className="max-w-[800px] w-full mx-auto">
      <TableHead reverse={reverse} />
      <TableBody filteredPosts={filteredPosts} page={page} total={total} />
    </table>
  );
}

import React from "react";
import PaginateButton from "@/components/pagination/paginate-button/paginate-button.component";
import SelectButton from "@/components/pagination/select-button/select-button.component";

export default function Pagination({nextButton,prevButton,totalPages,onSelectHandler,page,total}) {
  return (
    <div className="my-4 flex align-center">
      <PaginateButton onClickHandler={prevButton} text="prev" />
      <span style={{ color: "blue", padding: "5px" }}>
        {page} of {totalPages}
      </span>
      <PaginateButton onClickHandler={nextButton} text="next" />
      <SelectButton
        onSelectHandler={onSelectHandler}
        total={total}
      />
    </div>
  );
}

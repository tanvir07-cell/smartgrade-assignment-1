import React from "react";
import ShowStudentList from "./ShowStudentList";

const ShowStudent = () => {
  return (
    <div className="mx-auto max-w-[848px] overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="p-5 text-left text-sm font-semibold uppercase md:min-w-[110px] md:text-xl">
              ID
            </th>
            <th className="p-5 text-left text-sm font-semibold md:text-xl">
              Name
            </th>
            <th className="p-5 text-sm font-semibold md:text-xl">Scores</th>
            <th className="p-5 text-sm font-semibold md:text-xl">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <ShowStudentList />
        </tbody>
      </table>
    </div>
  );
};

export default ShowStudent;

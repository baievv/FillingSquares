import React, { useEffect, useState } from "react";
import "./square-table.css";
import createTable from "../create-table";

const SquareTable = (props) => {
  const [cellSet, setCellSet] = useState();
  const [exTable, setExTable] = useState();

  let sizeTable = props.tableSize;

  const trHeight = { height: `${650 / props.tableSize}px` };

  function changeSet(value) {
    if (!cellSet.has(value)) {
      cellSet.add(value);
    } else {
      cellSet.delete(value);
    }
  }

  const onMouseOver = (e) => {
    console.log(e.target.id);
    let cellColor = e.target.style.backgroundColor;
    if (cellColor != "blue") {
      e.target.style.backgroundColor = "blue";
    } else e.target.style.backgroundColor = "white";
    changeSet(e.target.id);
    console.log(cellSet);
  };

  // useEffect(() => {
  //   setCellSet(new Set());
  // }, []);

  useEffect(() => {
    console.log("Change");
    setExTable(createTable(props.tableSize, trHeight));
    setCellSet(new Set());
  }, [sizeTable]);

  return (
    <div className="table-place">
      <table className="square-table">
        <tbody className="square-table-body" onMouseOver={onMouseOver}>
          {exTable}
        </tbody>
      </table>
    </div>
  );
};

export default SquareTable;
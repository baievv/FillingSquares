import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "./square-panel.css";
import SquareTable from "../square-table";
import SquareData from "../square-data";

const SquarePanel = (props) => {
  // const [size, setSize] = useState(props.squareSize);
  const [table, setTable] = useState(null);

  const newTable = (table1) => {
    setTable(table1);
  };

  // useEffect(() => {
  //   setSize(props.squareSize);
  // }, [props.squareSize]);

  return (
    <Box className="square-box-panel">
      <SquareTable tableSize={props.squareSize} newTable={newTable} />
      <SquareData newData={table} />
    </Box>
  );
};

export default SquarePanel;

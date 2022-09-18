import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./square-panel.css";
import SquareTable from "../square-table";
import SquareData from "../square-data";

const SquarePanel = (props) => {
  const [mainTable, setMainTable] = useState([]);

  const setChange = (newTable) => {
    setMainTable(newTable);
  };

   return (
    <Box className="square-box-panel">
      <SquareTable tableSize={props.squareSize} setChange={setChange} />
      <SquareData newData={mainTable}/>
    </Box>
  );
};

export default SquarePanel;

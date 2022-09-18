import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "./square-panel.css";
import SquareTable from "../square-table";
import SquareData from "../square-data";

const SquarePanel = (props) => {
  const [filledSet, setFilledSet] = useState();

  const setChange = (set) => {
    console.log('Incoming set -', set);
    setFilledSet(set);
  };

  useEffect(() => {
    console.log("use effect", filledSet);
  }, [filledSet]);

  return (
    <Box className="square-box-panel">
      <SquareTable tableSize={props.squareSize} setChange={setChange} />
      <SquareData/>
    </Box>
  );
};

export default SquarePanel;

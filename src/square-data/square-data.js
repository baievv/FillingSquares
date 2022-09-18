import React from "react";
import "./square-data.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const SquareData = (props) => {
  
  function getFilled(data) {
    let arr = [];
    data.map((row) => {
      row.map((cell) => {
        if (cell.color == "blue") {
          arr.push(cell);
        }
      });
    });
    return arr;
  }

  const items = getFilled(props.newData);
  return (
    <div className="data-panel">
      <div>
        <h2>Hover squares</h2>
        <Box
          sx={{
            width: "100%",
            height: 620,
            maxWidth: 190,
            bgcolor: "white",
          }}>
          {items.map((item) => (
            <Button
              variant="contained"
              sx={{
                width: "90%",
                height: 16,
                fontSize: "10px",
                maxWidth: 180,
              }}>
              Row {item.idx} Col {item.idy}
            </Button>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default SquareData;

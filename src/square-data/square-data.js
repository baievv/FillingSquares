import React from "react";
import "./square-data.css";
import Box from "@mui/material/Box";

const SquareData = (props) => {

  const data=props.newData;

  console.log('SqData- ', data);

  return (
    <div className="data-panel">
      <div>
        <h2>Hover squares</h2>
        <Box
          sx={{
            width: "100%",
            height: 620,
            maxWidth: 190,
            bgcolor: "background.paper",
          }}>
        </Box>
      </div>
    </div>
  );
};
export default SquareData;

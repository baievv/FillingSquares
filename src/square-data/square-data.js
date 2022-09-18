import React, { useEffect, useState } from "react";
import "./square-data.css";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import Box from "@mui/material/Box";

const SquareData = (props) => {

  const data=props.newData;
  
  console.log('SqData- ', data);


  function renderRow(prop) {
    const { index, style } = prop;
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Item ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
  }

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
          <FixedSizeList
            height={610}
            width={190}
            itemSize={46}
            itemCount={200}
            overscanCount={5}>
            {renderRow}
          </FixedSizeList>
        </Box>
      </div>
    </div>
  );
};
export default SquareData;

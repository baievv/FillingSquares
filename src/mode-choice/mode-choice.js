import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./mode-choice.css";

const ModeChoice = (props) => {
  const [modes, setModes] = useState([]);
  const [modeVariant, setModeVariant] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const handleChange = (e) => {
    setModeVariant(e.target.value);
  };

  const onClick = () => {
    props.onChoice(modeVariant);
    console.clear();//delete
  };

  useEffect(() => {
    async function fn() {
      await fetch("http://demo7919674.mockable.io")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setModes(Array.from(data));
          setFetchError(null);
        })
        .catch((err) => {
          setFetchError(err);
        });
    }
    fn();
  }, []);

  return (
    <>
      <Box className="mode-choice">
        <FormControl
          className="mode-input"
          variant="standard"
          sx={{ m: 1, minWidth: 240 }}>
          <InputLabel id="demo-simple-select-label">Pick Mode</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            className="mode-select"
            id="simple-select"
            value={modeVariant}
            label="Mode"
            onChange={handleChange}
            sx={{ mb: 1 }}>
            {modes.map((item) => {
              return (
                <MenuItem key={item.name} value={item.field}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          className="start-button"
          variant="contained"
          onClick={onClick}
          sx={{ minWidth: 120 }}>
          START
        </Button>
      </Box>
    </>
  );
};

export default ModeChoice;

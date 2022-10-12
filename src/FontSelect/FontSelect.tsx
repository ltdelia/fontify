import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const fontList = [
  {
    id: 1,
    font: "Arial",
  },
  {
    id: 2,
    font: "Arial Black",
  },
  {
    id: 3,
    font: "Comic Sans MS",
  },
  {
    id: 4,
    font: "Courier New",
  },
  {
    id: 5,
    font: "Georgia",
  },
  {
    id: 6,
    font: "Impact",
  },
  {
    id: 7,
    font: "Lucida Console",
  },
  {
    id: 8,
    font: "Lucida Sans Unicode",
  },
  {
    id: 9,
    font: "Palatino Linotype",
  },
  {
    id: 10,
    font: "Tahoma",
  },
  {
    id: 11,
    font: "Times New Roman",
  },
  {
    id: 12,
    font: "Trebuchet MS",
  },
  {
    id: 13,
    font: "Verdana",
  },
  {
    id: 14,
    font: "MS Sans Serif",
  },
  {
    id: 15,
    font: "MS Serif",
  },
];

type Props = {
    font: string,
    updateFont: (a: string) => void
};

export default function FontSelect({font, updateFont}: Props) {

  const handleChange = (event: SelectChangeEvent) => {
    updateFont(event.target.value as string);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Font</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={font}
            label="Font"
            onChange={handleChange}
          >
            {fontList.map((fontItem) => (
              <MenuItem value={fontItem.font}>{fontItem.font}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

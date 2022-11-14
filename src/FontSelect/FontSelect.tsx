import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import fonts from '../data/fonts';

type Props = {
    font: string,
    updateFont: (a: string) => void
};

type Font = {
  id: number,
  font: string
};

const fontList: Font[] = fonts;

export default function FontSelect({font, updateFont}: Props) {

  const handleChange = (event: SelectChangeEvent) => {
    updateFont(event.target.value as string);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">font-family</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={font}
            label="Font"
            onChange={handleChange}
          >
            {fontList.map((fontItem: Font) => (
              <MenuItem value={fontItem.font}>{fontItem.font}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

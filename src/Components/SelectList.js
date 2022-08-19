import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { helpHttp } from "../Helpers/HelpHttp";
import { useForm } from "../Hooks/useForm";

export const SelectList = ({ title, form, handleChange, handleBlur, api }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    helpHttp()
      .get(api)
      .then((res) => {
        if (!res.err) {
          setData(res);
        } else {
        }
      });
  }, [api]);

  return (
    <div>
      <InputLabel id="select-label">{title}</InputLabel>
      <FormControl fullWidth>
        <Select
          labelId="select-label"
          id="Slug"
          name="Slug"
          value={form.Slug}
          onChange={handleChange}
          onBlur={handleBlur}
          size="small"
        >
          <MenuItem value="0">Eliege un Pais...</MenuItem>
          {data &&
            data.map((item) => (
              <MenuItem key={item.Slug} value={item.Slug}>
                {item.Country}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

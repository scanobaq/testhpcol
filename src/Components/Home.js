import { Grid } from "@mui/material";
import React from "react";
import { CaseCovidLis } from "./CaseCovidLis";
import { Globalcases } from "./Globalcases";
import Navmenu from "./Navmenu";

export const Home = () => {
  return (
    <div>
      <Navmenu />
      <CaseCovidLis />
    </div>
  );
};

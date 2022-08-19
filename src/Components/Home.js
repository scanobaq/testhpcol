import React from "react";
import { Route, Routes } from "react-router-dom";
import { CaseCovidLis } from "./CaseCovidLis";
import Navmenu from "./Navmenu";
import { NewCase } from "./NewCase";

export const Home = () => {
  return (
    <>
      <Navmenu />
      <Routes>
        <Route path="/home/casecovidlis" element={<CaseCovidLis />} />
        <Route path="/home/newcase" element={<NewCase />} />
      </Routes>
    </>
  );
};

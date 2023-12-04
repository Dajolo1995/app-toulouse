import React from "react";
import { Route, Routes } from "react-router-dom";
import Router from "./Router";

const RouterMain = () => {
  const route = Router();

  console.log(route);

  return (
    <Routes>
      {route.map((item) => (
        <Route path={item.path} element={item.component}></Route>
      ))}
    </Routes>
  );
};

export default RouterMain;

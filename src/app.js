import React from "react";
import ReactDom from "react-dom";
import { City } from "./data";

const Template = (props) => {
  const newInfo = {
    town: "kisumu is a nice town",
    field: "nice landscapes",
  };
  return (
    <div>
      <h1> {props.data}</h1>
      <City item={newInfo} />
    </div>
  );
};
ReactDom.render(
<Template  data="react is easy"/>,
 document.getElementById("root"));

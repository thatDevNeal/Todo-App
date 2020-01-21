import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import Header from "../src/components/header/header.component";
import List from "../src/components/list/list.component";
import ListInput from "../src/components/list-input/list-input.component";

const App = () => {
  const [listState, setListState] = useState(JSON.parse(localStorage.getItem("listState")) || []);

  useEffect(() => {
    localStorage.setItem("listState", JSON.stringify(listState));
  }, [listState]);

  return (
    <>
      <Header />
      <ListInput listState={listState} setListState={setListState} />
      <List listState={listState} setListState={setListState} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

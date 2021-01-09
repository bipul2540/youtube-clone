import React, { useState } from "react";
import "./../style/App.css";
import { Route, Switch } from "react-router-dom";

//import component
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Sidebar2 from "./Sidebar2";
import Navbar2 from "./Navbar2";

function App() {
  const [isActive, setActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Navbar
        isActive={isActive}
        setActive={setActive}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Navbar2 isActive={isActive} />
      <Sidebar isActive={isActive} setActive={setActive} />
      <Sidebar2 />

      <Switch>
        <Route path="/">
          <Home isActive={isActive} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

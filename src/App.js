import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NewsList from "./components/NewsList";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function changeMode() {
    setDarkMode((x) => !x);
  }
  const [categori, setCategori] = useState("health");

  function click1() {
    setCategori("sports");
  }
  function click2() {
    setCategori("business");
  }
  function click3() {
    setCategori("health");
  }
  function click4() {
    setCategori("science");
  }

  return (
    <div
      className={`lg:h-screen h-full w-screen ${
        darkMode ? "bg-slate-700" : "bg-white"
      }`}
    >
      <Router>
        <Navbar
          darkMode={darkMode}
          changeMode={changeMode}
          click1={click1}
          click2={click2}
          click3={click3}
          click4={click4}
        />

        <Routes>
          <Route
            exact
            path="Nasty-News"
            element={
              <NewsList
                categori={categori}
                darkMode={darkMode}
                country={"in"}
              />
            }
          ></Route>

          <Route
            exact
            path="/USA"
            element={
              <NewsList
                categori={categori}
                darkMode={darkMode}
                country={"us"}
              />
            }
          ></Route>
          <Route
            exact
            path="/Canada"
            element={
              <NewsList
                categori={categori}
                darkMode={darkMode}
                country={"ca"}
              />
            }
          ></Route>
          <Route
            exact
            path="/UnitedKingdom"
            element={
              <NewsList
                categori={categori}
                darkMode={darkMode}
                country={"gb"}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

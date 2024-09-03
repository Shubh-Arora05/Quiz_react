import React, { useState } from "react";
import Border from "./Components/Border";
import "./App.css";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useContext } from "react";

import { ThemeContext } from "./Context/Context";

function App() {
  const { theme, change_theme } = useContext(ThemeContext);

  const [choose, setchoose] = useState(false);
  const [value, setvalue] = useState(true);

  return (
    <>
      <div className= {"full_body " + theme }>
        <h1 className="heading">Tic-Tac</h1>

        <h2 className="mode" onClick={() => change_theme()}>
          {theme === 'dark' ? <MdDarkMode /> : <CiLight />}
        </h2>

        {choose === false && (
          <div className="body">
            <h1>Choose First Icon </h1>

            <button onClick={() => setchoose(true)}>Icon X</button>

            <button
              onClick={() => {
                setvalue(false);
                setchoose(true);
              }}
            >
              Icon O
            </button>
          </div>
        )}

        {choose === true && (
          <div className="body">
            <Border value={value} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    function newWindowSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", newWindowSize);
    return () => {
      window.removeEventListener("resize", newWindowSize);
    };
  }, []);

  return (
    <div className="App">
      <h1>Current Window width is : {windowSize[0]}</h1>
      <h1>Current Window Height is :{windowSize[1]}</h1>
    </div>
  );
}

export default App;

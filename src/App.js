import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColor from "./NewColor";

function App({ colorsDefault }) {
  /*colors = [
    { name: "red", value: "#FF0000" },
    { name: "blue", value: "#0000FF" },
    { name: "green", value: "#00FF00" },
  ];*/
  const [colors, setColors] = useState(colorsDefault);
  /*const [colors, setColors] = useState(() => {
    const savedColors = localStorage.getItem("colors");
    return savedColors ? JSON.parse(savedColors) : [];
  });
  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);*/
  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };
  return (
    <div className="App">
      <Routes>
        <Route exact path="/colors" element={<ColorList colors={colors} />} />
        <Route
          exact
          path="/colors/new"
          element={<NewColor addColor={addColor} />}
        />
        <Route path="/colors/:color" element={<Color colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  );
}
App.defaultProps = {
  colorsDefault: [
    { name: "red", value: "#FF0000" },
    { name: "blue", value: "#0000FF" },
    { name: "green", value: "#00FF00" },
  ],
};
export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";

function App({ colors }) {
  /*colors = [
    { name: "red", value: "#FF0000" },
    { name: "blue", value: "#0000FF" },
    { name: "green", value: "#00FF00" },
  ];*/

  return (
    <div className="App">
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/:color" element={<Color />} />
      </Routes>
    </div>
  );
}
App.defaultProps = {
  colors: [
    { name: "red", value: "#FF0000" },
    { name: "blue", value: "#0000FF" },
    { name: "green", value: "#00FF00" },
  ],
};
export default App;

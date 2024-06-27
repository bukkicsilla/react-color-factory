import { Link } from "react-router-dom";
import "./styles.css";
const ColorList = ({ colors = [] }) => {
  return (
    <div className="container">
      <h1> Welcome to the Color Factory</h1>
      <Link to="/colors/new">Add a new color</Link>
      <hr />
      <h2>Available Colors:</h2>
      <ul>
        {/*colors.map((color) => (
          <Link to={color.name}>{color.name}</Link>
        ))*/}
        {colors.map((color, index) => (
          <li key={index}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ColorList;

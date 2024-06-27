import { Link } from "react-router-dom";
const ColorList = ({ colors = [] }) => {
  return (
    <div>
      <h1> Welcome to the Color Factory</h1>
      <div>
        <button>Add a Color</button>
      </div>
      <hr />
      <ul>
        {colors.map((color) => (
          <Link to={color.name}>{color.name}</Link>
        ))}
      </ul>
    </div>
  );
};
export default ColorList;

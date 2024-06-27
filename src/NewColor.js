import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const NewColor = ({ addColor }) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("#000000");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name, value });
    navigate("/colors");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="value">Color Value:</label>
          <input
            id="value"
            name="value"
            type="color"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default NewColor;

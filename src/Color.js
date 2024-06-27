import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import "./styles.css";

const Color = ({ colors }) => {
  const { color } = useParams();
  const selectedColor = colors.find((c) => c.name === color);

  if (!selectedColor) {
    return <Navigate to="/colors" />;
  }

  return (
    <div
      className="color-page"
      style={{ backgroundColor: selectedColor.value, height: "100vh" }}
    >
      <h1>This is {selectedColor.name}</h1>
      <p>Isn't it beautiful?</p>
      <Link to="/colors">Go back to the list</Link>
    </div>
  );
};

export default Color;

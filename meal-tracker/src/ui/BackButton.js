import React from "react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className="back-button left-action" onClick={() => navigate(-1)}>
      Back
    </button>
  );
};

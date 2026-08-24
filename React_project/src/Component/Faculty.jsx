import React, { useContext } from "react";
import { FacultyContext } from "../App";
import "../assets/card.css";

export default function Faculty() {
  const faculty = useContext(FacultyContext);

  return (
    <div className="faculty-card">
      <div className="faculty-image">
        <img
          src={faculty.image}
          alt={faculty.name}
        />
      </div>

      <div className="faculty-details">
        <h2>{faculty.name}</h2>

        <p>
          <strong>Email:</strong> {faculty.email}
        </p>

        <p>
          <strong>Contact:</strong> {faculty.contactno}
        </p>
      </div>
    </div>
  );
}
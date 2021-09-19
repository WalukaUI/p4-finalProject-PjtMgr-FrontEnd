import React, { useState } from "react";
import Editemployee from "./EditEmployee";

function EmployeeCard({ card, idx, deleteEmployee, updateEmployee }) {
  const [display, setDisplay] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  function toggleDisplay(e) {
    e.preventDefault();
    setUpdateData(card);
    setDisplay(!display);
  }

  return (
    <>
      <div
        className="card text-white bg-secondary mb-3 employeeCard"
        key={card.name + idx}
      >
        <Editemployee
          display={display}
          setDisplay={setDisplay}
          card={card}
          updateData={updateData}
          updateEmployee={updateEmployee}
          setUpdateData={setUpdateData}
        />
        <div className="card-header">{card.name}</div>
        <div className="card-body">
          <h6 className="card-title">Role: {card.role}</h6>
          <h6 className="card-title">
            Section: {card.section ? card.section : "N/A"}
          </h6>
          <p>Department: {card.department_id}</p>
          <p>City: {card.city_id}</p>
          <button className="btn btn-light" onClick={toggleDisplay}>
            Edit
          </button>
          <button
            className="btn btn-outline-warning"
            style={{ marginLeft: "10px" }}
            onClick={() => deleteEmployee(card.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default EmployeeCard;

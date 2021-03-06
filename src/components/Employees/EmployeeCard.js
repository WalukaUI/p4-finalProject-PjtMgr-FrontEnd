import React, { useState } from "react";
import Editemployee from "./EditEmployee";

function EmployeeCard({ card, idx, cities, depts, deleteEmployee, updateEmployee }) {
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
          depts={depts}
          cities={cities}
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
          <p>Department: {depts.map((c) => c.id === card.department_id? c.name:null)}</p>
          <p>City: {cities.map((c) => c.id === card.city_id? c.name:null)}</p>
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

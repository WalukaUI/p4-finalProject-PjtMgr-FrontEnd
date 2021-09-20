import React from "react";
import { Link } from "react-router-dom";

function DepartmentCard({ card }) {
  return (
    <>
      <div className="card text-white bg-secondary mb-3 dptcard">
        <div className="card-header">{card.name}</div>
        <div className="card-body">
          <h6 className="card-title">
            Department Manager: {card.dept_manager_name}
          </h6>

          <Link to={`/employees/${card.id}`} className="btn btn-warning">
            Employees
          </Link>
        </div>
      </div>
    </>
  );
}

export default DepartmentCard;

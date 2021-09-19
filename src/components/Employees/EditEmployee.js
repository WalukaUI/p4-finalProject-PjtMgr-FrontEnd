import React, { useState } from "react";
import "./EditEmployee.css";


function EditEmployee({display,setDisplay}) {
  

  return (
    <div>
      <div className={display  ? "formDiv":"hidden"}>
        <div>
          <button className="btn btn-outline-danger" onClick={()=>setDisplay(!display)}>
          Cancel
          </button>
        </div>
        <div className="display formDiv">
          <form>
            <label className="text-white">
              Name
              <input
                className="form-control form-control-sm"
                type="text"
                name="name"
              />
            </label>
            <label className="text-white">
              Section
              <input
                className="form-control form-control-sm"
                type="text"
                name="section"
              />
            </label>
            <label className="text-white">
              Role
              <input
                className="form-control form-control-sm"
                type="text"
                name="role"
              />
            </label>
            <label className="text-white">
              Department
              <select className="form-select" name="skill">
                <option value="select">Select</option>
                <option value="Allrounder">Allrounder</option>
                <option value="Batsman">Batsman</option>
                <option value="Bowler">Bowler</option>
              </select>
            </label>
            <label className="text-white">
              City
              <select className="form-select" name="team_id">
                <option value="select">Select</option>
                <option value="1">SL</option>
                <option value="2">IND</option>
                <option value="3">AUS</option>
                <option value="4">PAK</option>
              </select>
            </label>

            <div className="col-sm">
              <button className=" btn btn-success" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;

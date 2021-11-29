import React from "react";
import "./EditEmployee.css";

function EditEmployee({
  card,
  display,
  cities,
  depts,
  setDisplay,
  updateData,
  setUpdateData,
  updateEmployee,
}) {
  function updateEmpHandler(e) {
    e.preventDefault();
    updateEmployee(updateData, card.id);
    setDisplay(!display);
  }
  function togglePopup(e) {
    e.preventDefault();
    setDisplay(!display);
  }
  function handleChangeData(e) {
    e.preventDefault();
    let newData = { ...updateData, [e.target.name]: e.target.value };
    setUpdateData(newData);
  }
  if (!updateData) return null;
  const editEmp = updateData;

  return display ? (
    <>
      <div className="popup-box">
        <div className="popup-inner">
          <div className="formDiv div1">
            <form onSubmit={updateEmpHandler}>
              <h4>Update Employee Details</h4>
              <div className="form-group row employeeEditPopUp">
                <label>
                  Name
                  <input
                    name="name"
                    className="form-control form-control-sm"
                    value={editEmp.name}
                    onChange={handleChangeData}
                  />
                </label>
                <label>
                  Role
                  <input
                    name="role"
                    className="form-control form-control-sm"
                    value={editEmp.role}
                    onChange={handleChangeData}
                  />
                </label>
                <label>
                  Section
                  <input
                    name="section"
                    className="form-control form-control-sm"
                    value={editEmp.section}
                    placeholder="Section name"
                    onChange={handleChangeData}
                  />
                </label>

                <label>
                  Department
                  <select
                    className="form-select"
                    name="department_id"
                    value={editEmp.department_id}
                    aria-label="Default select example"
                    onChange={handleChangeData}
                  >
                    {depts.map((dpt)=>dpt.id===card.department_id?<option value={dpt.name}>{dpt.name}</option>:null )}
                    {depts.map((dpt)=>dpt.id!==card.department_id?<option value={dpt.name}>{dpt.name}</option>:null )}
                  </select>
                </label>
                <label>
                  City
                  <select
                    className="form-select"
                    name="city_id"
                    value={editEmp.city_id}
                    aria-label="Default select example"
                    onChange={handleChangeData}
                  >
                    {cities.map((cty)=>cty.id===card.city_id?<option value="1">{cty.name}</option>:null )}
                    {cities.map((cty)=>cty.id!==card.city_id?<option value="1">{cty.name}</option>:null )}
                  </select>
                </label>
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <button
                        className=" btn btn-success  formBtns"
                        type="submit"
                      >
                        Update Employee
                      </button>
                    </div>
                    <div className="col-sm">
                      <button
                        className="btn btn-danger  formBtns"
                        onClick={togglePopup}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="col-sm"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>{""}</div>
  );
}

export default EditEmployee;

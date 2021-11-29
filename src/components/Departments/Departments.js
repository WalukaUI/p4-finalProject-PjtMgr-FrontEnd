import Loading from "../LoadingAnimation/Loading";
import DepartmentCard from "./DepartmentCard"
import "./Departments.css";

function Departments({departments}) {

  return (
    <>

      {departments !== null ? (
        departments.map((card, idx) => {
          return (
            <DepartmentCard 
             key={card.name + idx}
             card={card}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Departments;

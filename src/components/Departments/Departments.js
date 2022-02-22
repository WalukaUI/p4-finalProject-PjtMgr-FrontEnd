import Loading from "../LoadingAnimation/Loading";
import DepartmentCard from "./DepartmentCard";
import "./Departments.css";
import PageHeading from "../PageHeadings";

function Departments({ departments }) {
  return (
    <>
      <PageHeading heading={"Departments of the Company"} />
      {departments !== null ? (
        departments.map((card, idx) => {
          return <DepartmentCard key={card.name + idx} card={card} />;
        })
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Departments;

import React from "react";

function PageHeading({ heading, colors = "black" }) {
  return (
    <div style={{ paddingLeft: "25%", width: "100%", color: colors }}>
      <h5>{heading}</h5>
    </div>
  );
}
export default PageHeading;

import React from "react";

function PhotoCredit() {
  return (
    <small style={{ width: "100%", fontSize: "0.5rem" }}>
      Photo by{" "}
      <a href="https://unsplash.com/@nordwood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        NordWood Themes
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/s/photos/business?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </a>
    </small>
  );
}
export default PhotoCredit;

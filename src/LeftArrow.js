import React from "react";

function SvgLeftArrow(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      fill="currentColor"
      className={"cw-svg-icon " + (props.className || "")}
    >
      <path d="M720.053 970.987L251.512 520.47 719.766 52.22l28.944 28.943-438.738 438.734L748.424 941.48z" />
    </svg>
  );
}

export default SvgLeftArrow;

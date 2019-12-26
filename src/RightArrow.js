import React from "react";

function SvgRightArrow(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      fill="currentColor"
      className={"cw-svg-icon " + (props.className || "")}
    >
      <path d="M642.174 504.594c7.99 7.241 7.897 17.58-.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" />
    </svg>
  );
}

export default SvgRightArrow;

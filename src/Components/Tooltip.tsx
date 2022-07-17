import React from "react";
import { HelpCircle } from "react-feather";

const Tooltip = (props: { text: string }) => {
  const { text } = props;
  return (
    <div className="tooltip2 px-2">
      <HelpCircle size={13} /> <span className="tooltiptext2 px-3">{text}</span>
    </div>
  );
};

export default Tooltip;

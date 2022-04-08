import "./styles.css";
import React, { useState } from "react";

const AvailableDaysButton: React.VFC<{ name: string }> = ({ name }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="circle-wrapper" onClick={handleClick}>
      <div className={active ? "name-wrapper-clicked" : "name-wrapper"}>
        <span className={active ? "clicked-dot" : "dot"}></span>
        {name}
      </div>
    </div>
  );
};

export default AvailableDaysButton;

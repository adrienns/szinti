import React, { useEffect, useState } from "react";
import "./TopBar.css";

const TEXTS = [
  "Személyes átvételi lehetőség Budapesten",
  "Ingyenes szallitas barhol 19 000ft felett",
];

const TopBar = () => {
  const [currentText, setCurrentText] = useState(0);

  const changeText = () => {
    const textlength = TEXTS.length;
    const nextState = (currentText + 1) % textlength;
    setCurrentText(nextState);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeText();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentText]);

  const text = TEXTS[currentText];
  return (
    <div>
      <span className="topbar-container">{text}</span>
    </div>
  );
};

export default TopBar;

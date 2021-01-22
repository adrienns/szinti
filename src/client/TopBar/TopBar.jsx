import React, { useEffect, useState } from "react";
import "./TopBar.css";
import { useTransition, animated } from "react-spring";

const TEXTS = ["Személyes átvételi !", "Ingyenes szállítás"];

// 19 000ft feletti rendelés esetén!
// lehetőség Budapesten

const TopBar = () => {
  const [currentIndex, setCurrentText] = useState(0);

  const changeText = () => {
    const textlength = TEXTS.length;
    const nextState = (currentIndex + 1) % textlength;
    setCurrentText(nextState);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeText();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const text = TEXTS[currentIndex];

  const transitions = useTransition(text, currentIndex, {
    config: { mass: 5, tension: 2000, friction: 200 },

    from: {
      opacity: 0,
      height: 0,
      // transform: "perspective(600px) rotateX(0deg)",
    },
    enter: {
      opacity: 1,
      x: 20,
      height: 15,
      transform: "perspective(600px) rotateX(360deg)",
    },
    leave: { opacity: 0, height: 0, x: 0, transform: "rotateX(0ddeg)" },
  });

  return (
    <div className="topbar-container">
      {transitions.map(({ currentIndex, props, key }) => (
        <animated.div className="topbar-text" key={key} style={{ ...props }}>
          {text}
        </animated.div>
      ))}
    </div>
  );
};

export default TopBar;

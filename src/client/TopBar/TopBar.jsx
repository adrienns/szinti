import "./TopBar.css";
import React from "react";
import { FormattedMessage } from "react-intl";

// const TEXTS = ["Free Shipping!", "Ingyenes szállítás"];

const TopBar = () => {
  // const [currentIndex, setCurrentText] = useState(0);

  // const changeText = () => {
  //   const textlength = TEXTS.length;
  //   const nextState = (currentIndex + 1) % textlength;
  //   setCurrentText(nextState);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     changeText();
  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  // const text = TEXTS[currentIndex];

  // const transitions = useTransition(text, currentIndex, {
  //   config: { mass: 5, tension: 2000, friction: 200 },

  //   from: {
  //     opacity: 0,
  //     height: 0,
  //     // transform: "perspective(600px) rotateX(0deg)",
  //   },
  //   enter: {
  //     opacity: 1,
  //     x: 20,
  //     height: 15,
  //     transform: "perspective(600px) rotateX(360deg)",
  //   },
  //   leave: { opacity: 0, height: 0, x: 0, transform: "rotateX(0ddeg)" },
  // });

  return (
    <div className="topbar-container">
      <span className="topbar-text">
        {" "}
        <FormattedMessage
          id="app.freeshippingover"
          defaultMessage="Free shipping over 19 000FT!"
        />
      </span>
    </div>
  );
};

export default TopBar;

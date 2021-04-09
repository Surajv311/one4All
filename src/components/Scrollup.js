import React from "react";
import ScrollToTop from "react-scroll-up";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const customStyle = {
  position: "fixed",
  bottom: 30,
  right: 10,
  cursor: "pointer",
  transitionDuration: "0.2s",
  transitionTimingFunction: "linear",
  transitionDelay: "0s",
};

const Scrollup = () => {
  return (
    <div>
      <ScrollToTop style={customStyle} showUnder={160}>
        <ArrowUpwardIcon style={{ fontSize: 35 }} />
      </ScrollToTop>
    </div>
  );
};

export default Scrollup;

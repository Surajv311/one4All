import React from "react";
import ScrollToTop from "react-scroll-up";

const Scrollup = () => {
  return (
    <div>
      <ScrollToTop showUnder={160}>
        <span>UP</span>
      </ScrollToTop>
    </div>
  );
};

export default Scrollup;

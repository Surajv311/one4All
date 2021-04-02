import React from "react";
import "../index.css";
const date = new Date();
const year = date.getFullYear();

const current_year = 2021;

function Footer() {
  return (
    <footer className="bottom font-serif">
      {
        <p>
          © {current_year}-{year}
          <a href="https://github.com/surajv311"> Suraj Verma</a>
        </p>
      }
    </footer>
  );
}

// export default Footer;
// var style = {
//   backgroundColor: "black",
//   borderTop: "1px solid #E7E7E7",
//   textAlign: "center",
//   padding: "20px",
//   position: "fixed",
//   left: "0",
//   bottom: "0",
//   height: "60px",
//   width: "100%",
// };

// var phantom = {
//   display: "block",
//   padding: "20px",
//   height: "40px",
//   width: "100%",
// };

// function Footer({ children }) {
//   return (
//     <div>
//       <div style={phantom} />
//       <div style={style}>{children}</div>
//     </div>
//   );
// }

export default Footer;

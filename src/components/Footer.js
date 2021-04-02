import React from "react";

const date = new Date();
const year = date.getFullYear();

const current_year = "2021";

function Footer() {
  return (
    <footer>
      {
        <p>
          ©{current_year}-{year}
          <a href="https://github.com/surajv311">Suraj Verma</a>
        </p>
      }
    </footer>
  );
}

export default Footer;

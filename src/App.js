import React, { useState, useEffect } from "react";
import Main from "./Main";
import Loading from "./components/Loading";

const App = () => {
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  });

  return <div>{isLoad == true ? <Loading /> : <Main />}</div>;
};

export default App;

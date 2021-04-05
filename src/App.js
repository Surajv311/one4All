import React, { useState, useEffect } from "react";
import Main from "./Main";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  return <div>{isLoading == true ? <Loading /> : <Main />}</div>;
};

export default App;

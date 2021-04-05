import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; // docs...
import "../Main.css";

const Loading = () => {
  return (
    <div className="loadclass">
      <Loader
        type="Plane"
        color="#642bff"
        secondaryColor="#29ffd4"
        radius={200}
        height={200}
        width={200}
        timeout={2000} //2 secs
        // visible={}
      />
    </div>
  );
};

export default Loading;

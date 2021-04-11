import React from "react";
import GithubCorner from "react-github-corner";
const Ribbon = () => {
  const size = 90;
  const direction = "right";
  const octoColor = "#ffffff";
  const bannerColor = "#363636";

  return (
    <div>
      <GithubCorner
        href="https://github.com/Surajv311/oneForAll_web"
        size={size}
        direction={direction}
        octoColor={octoColor}
        bannerColor={bannerColor}
      />
    </div>
  );
};

export default Ribbon;

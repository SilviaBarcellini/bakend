import React from "react";

import homeBtn from "./home.png";

export default {
  title: "homeBtn",
};

const image = {
  src: homeBtn,
  alt: "take-me-home",
};

export const homeImg = () => <img src={image.src} alt={image.alt} />;

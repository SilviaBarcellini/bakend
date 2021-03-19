import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HomeBtnProps } from "./homeBtn";
import homeBtn from "./home.png";

export default {
  title: "homeBtn",
  component: homeBtn,
} as Meta;

const image = {
  src: homeBtn,
  alt: "take-me-home",
};

export const homeImg = () => <img src={image.src} alt={image.alt} />;

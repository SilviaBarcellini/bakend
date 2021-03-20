import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import FavsIcon, { FavsIconProps } from "./favsBtn";

export default {
  title: "Common/favsIcon",
  component: FavsIcon,
} as Meta;

const Template: Story<FavsIconProps> = (args) => <FavsIcon {...args} />;

export const favsIcon = Template.bind({});
favsIcon.args = {
  imgSrc:
    "https://www.flaticon.com/svg/vstatic/svg/535/535234.svg?token=exp=1616181165~hmac=c49e0ab0e50bb652f6d47a7ba840fc0c",
};

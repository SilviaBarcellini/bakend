import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import HomeIcon, { HomeIconProps } from "./homeBtn";

export default {
  title: "Common/homeIcon",
  component: HomeIcon,
} as Meta;

const Template: Story<HomeIconProps> = (args) => <HomeIcon {...args} />;

export const homeIcon = Template.bind({});
homeIcon.args = {
  imgSrc: "https://image.flaticon.com/icons/png/128/1946/1946436.png",
};

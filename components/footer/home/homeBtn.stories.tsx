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
  imgSrc:
    "https://www.flaticon.com/svg/vstatic/svg/1946/1946436.svg?token=exp=1616271893~hmac=1ad26a501aec7b93543ee4b8794f94e4",
};

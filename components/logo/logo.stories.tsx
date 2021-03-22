import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Logo, { LogoProps } from "./logo";

export default {
  title: "Common/Logo",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const small = Template.bind({});
small.args = {
  logo: "bakend",
  size: "small",
};

export const big = Template.bind({});
big.args = {
  logo: "bakend",
  size: "big",
};

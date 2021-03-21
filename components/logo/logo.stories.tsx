import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Logo, { LogoProps } from "./logo";

export default {
  title: "Common/Logo",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Header = Template.bind({});
Header.args = {
  header: true,
  logo: "Bakend",
};

export const SplashPage = Template.bind({});
SplashPage.args = {
  header: false,
  logo: "Bakend",
};

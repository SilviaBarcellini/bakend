import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ThemeBtn, { ThemeBtnProps } from "./themeBtn";

export default {
  title: "Common/ThemeBtn",
  component: ThemeBtn,
} as Meta;

const Template: Story<ThemeBtnProps> = (args) => <ThemeBtn {...args} />;

export const light = Template.bind({});
light.args = {
  light: true,
  label: "☀️",
};

export const dark = Template.bind({});
dark.args = {
  light: false,
  label: "🌙",
};

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Welcome, { WelcomeProps } from "./welcome";

export default {
  title: "Common/Welcome",
  component: Welcome,
} as Meta;

const Template: Story<WelcomeProps> = (args) => <Welcome {...args} />;

export const sugars = Template.bind({});
sugars.args = {
  label: "Sugars 🍭",
};

export const liquids = Template.bind({});
liquids.args = {
  label: "Milk 🥛",
};

export const butter = Template.bind({});
butter.args = {
  label: "Butter 🧈",
};

export const eggs = Template.bind({});
eggs.args = {
  label: "Eggs 🍳",
};

export const go = Template.bind({});
go.args = {
  label: "Go!",
};

export const confirm = Template.bind({});
confirm.args = {
  label: "Confirm",
};

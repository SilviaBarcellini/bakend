import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Btn, { BtnProps } from "./btn";

export default {
  title: "Common/Btn",
  component: Btn,
} as Meta;

const Template: Story<BtnProps> = (args) => <Btn {...args} />;

export const calculate = Template.bind({});
calculate.args = {
  label: "Calculate >>>",
};

export const choices = Template.bind({});
choices.args = {
  label: "Today I Am Out Of ...",
};

export const discover = Template.bind({});
discover.args = {
  label: "Discover New Ingredients",
};

export const add = Template.bind({});
add.args = {
  label: "Add 💚",
};

export const go = Template.bind({});
go.args = {
  label: "Go!",
};

export const confirm = Template.bind({});
confirm.args = {
  label: "Confirm",
};

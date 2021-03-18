import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Btn, { BtnProps } from "./btn";

export default {
  title: "Components/Btn",
  component: Btn,
} as Meta;

const Template: Story<BtnProps> = (args) => <Btn {...args} />;

export const Calculate = Template.bind({});
Calculate.args = {
  label: "Calculate >>>",
};

export const Add = Template.bind({});
Add.args = {
  label: "Add 💚",
};

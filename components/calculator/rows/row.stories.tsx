import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Row, { RowProps } from "./row";

export default {
  title: "Common/Row",
  component: Row,
} as Meta;

const Template: Story<RowProps> = (args) => <Row {...args} />;

export const rowOne = Template.bind({});
rowOne.args = {
  option: "option 1",
};

export const rowTwo = Template.bind({});
rowTwo.args = {
  option: "option 2",
};

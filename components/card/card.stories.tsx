import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Card, { CardProps } from "./card";

export default {
  title: "Common/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const error = Template.bind({});
error.args = {
  status: "404",
  title: "oh nuts, no ingredients found!",
  image: "/ice-cream.svg",
};

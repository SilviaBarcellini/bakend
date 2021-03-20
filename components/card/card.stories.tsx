import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Card, { CardProps } from "./card";

export default {
  title: "Common/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const bananas = Template.bind({});
bananas.args = {
  title: "bananas",
  image: "https://image.flaticon.com/icons/png/128/2909/2909761.png",
};

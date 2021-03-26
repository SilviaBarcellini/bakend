import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AddFavs, { AddFavsProps } from "./addFavs";

export default {
  title: "Common/addFavs",
  component: AddFavs,
} as Meta;

const Template: Story<AddFavsProps> = (args) => <AddFavs {...args} />;

export const isFav = Template.bind({});
isFav.args = {
  isFav: true,
  image: "/heartf.svg",
};

export const addFav = Template.bind({});
addFav.args = {
  isFav: false,
  image: "/hearts.svg",
};

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AddFavs from "./addFavs";

export default {
  title: "Common/addFavs",
  component: AddFavs,
} as Meta;

const Template: Story = (args) => <AddFavs {...args} />;

export const isFav = Template.bind({});
isFav.args = {
  fav: true,
  /* image: "/liked.svg", */
};

export const addFav = Template.bind({});
addFav.args = {
  fav: false,
  /* image: "/like.svg", */
};

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import CardMain, { CardMainProps } from "./cardMain";
import { Ingredient } from "../../src/utils/api";

export default {
  title: "Common/CardMain",
  component: CardMain,
} as Meta;

const Template: Story<CardMainProps> = (args) => <CardMain {...args} />;

export const sugar = Template.bind({});
sugar.args = {
  name: "Sugar",
  image: "/sugar-cubes.svg",
  fat: 0,
  carbs: 98,
  protein: 0,
  family: "Sugars",
  vegan: true,
  vegetarian: true,
  glutenFree: false,
  dairyFree: true,
  nutsFree: true,
  soyFree: true,
};

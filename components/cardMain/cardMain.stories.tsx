import { Story, Meta } from "@storybook/react/types-6-0";
import CardMain, { CardMainProps } from "./cardMain";

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
  vegan: "true",
  vegetarian: "true",
  glutenFree: "true",
  dairyFree: "true",
  nutsFree: "true",
  soyFree: "true",
};

export const milk = Template.bind({});
milk.args = {
  name: "Milk",
  image: "/milk.svg",
  fat: 3.6,
  carbs: 3.4,
  protein: 3.8,
  family: "Liquids",
  vegan: "false",
  vegetarian: "false",
  glutenFree: "true",
  dairyFree: "false",
  nutsFree: "false",
  soyFree: "false",
};

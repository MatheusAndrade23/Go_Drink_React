import { HeaderMenu } from '.';

import { LinkComponent } from '../LinkComponent';

export default {
  title: 'HeaderMenu',
  component: HeaderMenu,
  args: {
    children: (
      <>
        <LinkComponent link="/" model="alternative">
          My Favorites
        </LinkComponent>
        <LinkComponent link="/" model="alternative">
          Alcoholic
        </LinkComponent>
        <LinkComponent link="/" model="alternative">
          Non Alcoholic
        </LinkComponent>
        <LinkComponent link="/" model="alternative">
          With Gin
        </LinkComponent>
        <LinkComponent link="/" model="alternative">
          With Vodka
        </LinkComponent>
        <LinkComponent link="/" model="alternative">
          With Bourbon
        </LinkComponent>
        <LinkComponent link="/" model="alternative">
          With Champagne
        </LinkComponent>
      </>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <HeaderMenu {...args} />;
};

import { SectionContainer } from '.';

import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <>
        <Heading>SectionContainer</Heading>
        <TextComponent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
          sunt pariatur tenetur ab commodi optio id atque facere doloribus sit
          repudiandae libero numquam est quidem! Architecto quia deleniti
          tempore unde.
        </TextComponent>
      </>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <SectionContainer {...args} />;
};

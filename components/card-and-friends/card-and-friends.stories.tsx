import { Story, Meta } from '@storybook/react';
import { CardAndFriends } from '../card-and-friends/card-and-friends.component';
import image1 from './assets/Top.png';
export default {
  title: 'Card&friends',
} as Meta;

const cardAndFriendsData = {
  image: image1,
  image_alt: 'Test',
  title: 'Test de carieră',
  description:
    'Acest test îți arată inclinația către tipuri de profesie. Analizând ce îți place să faci în viața de zi cu zi, testul îți  arată în ce domeniu ți-ar place să lucrezi.',
  caption_list: ['Tipul carierei potrivite', 'Descrierea tipului carierei'],
  caption_title: 'La ce să atragi atenția?',
  host_platform_link: 'dreamfoundation.eu',
  button_text: 'Ia testul',
  button_redirect_link: 'https://dreamfoundation.eu',
};

export const CardAndFriendsComponent: Story = () => {
  return <CardAndFriends {...cardAndFriendsData} />;
};

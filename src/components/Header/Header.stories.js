import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './';

const stories = storiesOf('Header', module);

stories.add('Default', () => {
  const story = <Header />;
  return story;
});

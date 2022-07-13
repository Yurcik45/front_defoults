import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { Text } from 'react-native'

import { StoryContainer } from '@rizna-components/storybook'

const createStory = () => (
  <StoryContainer>
    <Text>{'TEST STORIES'}</Text>
  </StoryContainer>
)

storiesOf('TEST', module)
  .addDecorator(withKnobs)
  .add('TEST', () => createStory())

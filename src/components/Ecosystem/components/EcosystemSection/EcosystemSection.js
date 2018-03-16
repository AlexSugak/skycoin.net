import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';

import { COLOR, COLORS } from 'config';
import * as content from 'components/Ecosystem/content';

import Illustrations from './components/Illustrations';
import Info from './components/Info';

const ContentItem = styled(Flex)`
  background-color: ${props => ((props.bg && COLOR[props.bg]) || (props.bg && COLORS[props.bg]) || 'transparent')};
  flex-direction: row-reverse;
`;

const Ecosystem = () => (
  <div>
    <Heading heavy as="h2" my={[4, 6]} fontSize={[6, 7]} width={[1, 2 / 3]}>
      <FormattedMessage id="ecosystem.heading" />
    </Heading>
    <SubHeading fontSize={2} my={[4, 6]}>
      <FormattedMessage id="ecosystem.subheading" />
    </SubHeading>

    <ContentItem bg="lightBlue" py={10} pr={[6, 7, 8]} pl={[6, 0, 8]} wrap>
      <Box width={[1, 3 / 5, 1 / 2]}>
        <Info heading="ecosystem.skycoin.heading" body="ecosystem.skycoin.body" />
      </Box>
      <Box width={[1, 2 / 5, 1 / 2]}>
        <Illustrations items={content.skycoin} />
      </Box>
    </ContentItem>

    <ContentItem py={10} pr={[6, 7, 8]} pl={[6, 0, 8]} wrap>
      <Box width={[1, 3 / 5, 1 / 2]}>
        <Info heading="ecosystem.skywire.heading" body="ecosystem.skywire.body" />
      </Box>
      <Box width={[1, 2 / 5, 1 / 2]}>
        <Illustrations items={content.skywire} />
      </Box>
    </ContentItem>

    <ContentItem bg="lightBlue" py={10} pr={[6, 7, 8]} pl={[6, 6, 8]} wrap>
      <Info heading="ecosystem.skyledger.heading" body="ecosystem.skyledger.body" />
    </ContentItem>

    <ContentItem py={10} pr={[6, 7, 8]} pl={[6, 0, 8]} wrap>
      <Box width={[1, 3 / 5, 1 / 2]}>
        <Info heading="ecosystem.experiments.heading" body="ecosystem.experiments.body" />
      </Box>
      <Box width={[1, 2 / 5, 1 / 2]}>
        <Illustrations items={content.experiments} />
      </Box>
    </ContentItem>

  </div>
);

export default Ecosystem;

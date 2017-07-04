import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Flag } from 'flag';

import { COLORS } from 'config';
import media from 'utils/media';
import Header from 'components/Header';
import Map from './components/Map';
import Introduction from './components/Introduction';
import Announcement from './components/Announcement';

const Hero = styled.div`
  background-image: linear-gradient(-110deg, ${COLORS.base}, ${COLORS.violet[4]});
  position: relative;
  height: 33rem;

  ${media.sm.css`
    height: 40rem;
  `}

  ${media.md.css`
    height: 48rem;
  `}
`;

const StyledFlex = styled(Flex)`
  height: 100%;
  z-index: 1;
`;

export default () => (
  <Hero>
    <Map />

    <StyledFlex column justify="space-between">
      <Box>
        <Header white />
      </Box>
      <Box>
        <Introduction />
      </Box>

      <Box>
        <Flag
          name="announcement"
          render={() => (
            <Announcement />
          )}
        />
      </Box>
    </StyledFlex>
  </Hero>
);

import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Container from 'components/Container';
import Navigation from 'components/Navigation';
import Text from 'components/Text';
import Logo from 'components/Logo';
import { COLOR } from 'config';
import media from 'utils/media';

import Languages from './components/Languages';
import Email from './components/Email';
import Social from './components/Social';

const COPYRIGHT = '© Skycoin.net 2018';

const Wrapper = styled.div`
  background: ${COLOR.dark};
`;

const FooterNavWrapper = styled(Flex)`
  flex-direction: column;
  
  ${media.sm.css`
    flex-direction: row;
    align-items: center;
  `}
`;

export default () => (
  <Wrapper>
    <Container>
      <FooterNavWrapper align="flex-start" justify="space-between" wrap pb={[8, 12]} pt={[8, 13]}>
        <Logo blueWhite />
        <Navigation white />
      </FooterNavWrapper>

      <Social />

      <Flex py={[6, 8]} wrap>
        <Box width={[1, 1, 1 / 3]}>
          <Text fontSize={[1, 1, 2]} color="gray.8" my={0} textAlign={['center', 'center', 'left']}>{COPYRIGHT}</Text>
        </Box>
        <Box width={[1, 1, 1 / 3]}>
          <Text fontSize={[1, 1, 2]} color="gray.8" my={0} textAlign="center">
            <Email />
          </Text>
        </Box>
        <Box width={[1, 1, 1 / 3]}>
          <Text as="div" fontSize={[0, 0, 1]} color="gray.8" my={0} heavy textAlign={['center', 'center', 'right']}>
            <Languages />
          </Text>
        </Box>
      </Flex>
    </Container>
  </Wrapper>
);

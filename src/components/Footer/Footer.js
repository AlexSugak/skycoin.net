import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Container from 'components/Container';
import Navigation from 'components/Navigation';
import Text from 'components/Text';
import Logo from 'components/Logo';
import { COLOR } from 'config';

import Languages from './components/Languages';
import Email from './components/Email';
import Social from './components/Social';

const COPYRIGHT = '© Skycoin.net 2018';

const Wrapper = styled.div`
  background: ${COLOR.dark};
`;

export default () => (
  <Wrapper>
    <Container>
      <Flex align="center" justify="space-between" wrap pb={[8, 10]} pt={[10, 12]}>
        <Logo blueWhite />
        <Navigation white />
      </Flex>

      <Social />

      <Flex py={[6, 8]}>
        <Box width={[1, 1 / 3]}>
          <Text fontSize={[1, 1, 2]} color="gray.8" my={0}>{COPYRIGHT}</Text>
        </Box>
        <Box width={[1, 1 / 3]}>
          <Text fontSize={[1, 1, 2]} color="gray.8" my={0} textAlign="center">
            <Email />
          </Text>
        </Box>
        <Box width={[1, 1 / 3]}>
          <Text as="div" fontSize={[0, 0, 1]} color="gray.8" my={0} heavy>
            <Languages />
          </Text>
        </Box>
      </Flex>
    </Container>
  </Wrapper>
);

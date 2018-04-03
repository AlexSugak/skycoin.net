import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Link from 'components/Link';
import Text from 'components/Text';
import { COLOR } from 'config';

import obelisk from './obelisk.svg';

const Graphic = styled.img.attrs({
  src: obelisk,
})`
  max-width: 100%;
  display: block;
`;

const Wrapper = styled.div`
  background: ${COLOR.lightGrey};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default () => (
  <Wrapper>
    <Container>
      <Flex py={[7, 8]} align="center">
        <Box width={[1 / 1, 3 / 5]} mr={[4, 6]}>
          <StyledLink href="https://www.skycoin.net/blog/statement/obelisk-the-skycoin-consensus-algorithm/" target="_blank">
            <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} color="black">
              <FormattedMessage id="home.network.heading" />
            </Heading>
            <SubHeading fontSize={2}>
              <FormattedMessage id="home.network.subheading" />
            </SubHeading>
          </StyledLink>
          <Text fontSize={2} mb={0} color="black">
            <FormattedHTMLMessage id="home.network.body" />
          </Text>
          <Text mt={4} color="base" big fontSize={2}>
            <StyledLink target="_blank" href={'/skycoin_whitepaper.pdf'}>
              <FormattedMessage id="home.about.whitepaper" />
            </StyledLink>
          </Text>
        </Box>

        <Box width={[0, 2 / 5]}>
          <Graphic />
        </Box>
      </Flex>
    </Container>
  </Wrapper>
);

import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { rem } from 'polished';

import Link from 'components/Link';
import { SPACE } from 'config';

import * as images from './images';

const socialLinks = [
  { to: '/', icon: images.medium },
  { to: 'https://twitter.com/skycoinproject', icon: images.twitter },
  { to: 'https://www.facebook.com/skycoinproject', icon: images.facebook },
  { to: 'https://www.instagram.com/skycoinproject/', icon: images.instagram },
  { to: 'https://github.com/skycoin/skycoin', icon: images.github },
  { to: '/', icon: images.q },
  { to: 'https://www.youtube.com/c/Skycoin', icon: images.youtube },
  { to: '/', icon: images.snapchat },
  { to: 'https://www.reddit.com/r/SkycoinProject', icon: images.reddit },
  { to: '/', icon: images.apple },
  { to: '/', icon: images.discord },
  { to: 'https://t.me/Skycoin', icon: images.telegram },
];

const Wrapper = styled(Flex)`
  border-top: 1px solid rgba(255, 255, 255, .12);
  border-bottom: 1px solid rgba(255, 255, 255, .12);
`;

const StyledLink = styled(Link)`
  margin-left: ${rem(SPACE[4])};
  margin-right: ${rem(SPACE[4])};
  
  &:hover {
    opacity: .75;
  }
`;

const SocialItem = ({ item }) => (
  <StyledLink to={item.to}>
    <img src={item.icon} alt="" />
  </StyledLink>
);

const Social = () => (
  <Wrapper align="center" justify="space-between" wrap py={[4, 6, 8]}>
    {socialLinks.map((item, i) => <SocialItem item={item} key={i} />)}
  </Wrapper>
);

export default Social;

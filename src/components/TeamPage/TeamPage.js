import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';

import media from 'utils/media';
import Header from 'components/Header';
import SubHeading from 'components/SubHeading';
import Heading from 'components/Heading';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Text from 'components/Text';
import SignUpSection from 'components/SignUpSection';

import { FONT_FAMILIES, FONT_SIZES } from 'config';
import { en, zh, ko, ru } from './content/bios';

import ArrowIcon from './expander.svg';
import bg from './bg.svg';

const Wrapper = styled.div`
  padding: 2em 0;
  background-color: ${props => (props.bg || 'inherited')};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
`;

const Img = styled.img`
  width: 100%;
`;

const Title = styled.strong`
  display: block;
  font-family: ${FONT_FAMILIES.sans};
  color: #92A4BA;
  font-size: 14px;
  margin: 0 0 1em;
  margin-top: 8px;
`;

const Bio = styled.p`
  font-family: ${FONT_FAMILIES.sans};
  line-height: 1.8;
  margin-top: 26px;
  font-size: 14px;
`;

const StyledBox = styled(Box) `
  display: flex;
  flex-direction: column;
`;

const BioSection = styled.section`
  margin-bottom: 3em;
`;

const localeList = { en, zh, ko, ru };

const getLocale = (locale) => {
  const language = localeList[locale];
  return language;
};

const SubheadingSeparator = styled.div`
  width: 20px;
  height: 1px;
  background-color: #92A4BA;
  margin-right: 12px;
  display: inline-block;
`;

const QuoteLine = styled.div`
  border: 1px solid #92A4BA;
  border-radius: 2px;
  width: 1px;
  background-color: #92A4BA;
`;

const Quote = styled.div`
  padding-left: 30px;
`;

const QuoteContainer = styled.div`
  display: flex;
  margin: ${rem(85)} 0;
`;

const Bg = styled(Flex) `
  background-image: url(${bg});
  
  height: ${rem(70)};

  ${media.sm.css`
    height: ${rem(340)};
  `}

  width: 100%;
  background-size: 100% auto;
  background-position-y: center;
  background-repeat: no-repeat;
`;

const FoundersHeading = styled(Heading) `
  text-transform: uppercase;
  text-align: center;
  font-size: ${rem(FONT_SIZES[2])};
  font-weight: bold;
  margin-bottom: ${rem(40)};
`;

const Person = styled(Box) `
`;

const PersonName = styled(Heading) `
  margin-top: ${rem(24)};
  font-size: ${rem(20)};
`;

const A = styled.a`
  opacity: ${props => (props.linkcolor ? 1 : 0.5)}; 
  cursor: pointer; 
  text-decoration: none;
`;

const Arrow = styled.img`
  margin-left: 12px;
  & path {
    fill: #0072FF;
  }

  transform: rotate(${props => (props.dir === 'down' ? '180deg ' : '0deg')});
  width: 12px;
  height: 12px;
`;

class Expander extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
    };
    this.toggleExpander = this.toggleExpander.bind(this);
  }
  toggleExpander() {
    this.setState({ ...this.state, collapsed: !this.state.collapsed });
  }
  render() {
    const { children, intl } = this.props;
    const { collapsed } = this.state;
    return (<div>
      {!collapsed && children}
      {collapsed && <A
        onClick={() => this.toggleExpander()}
      >
        <Text color="#0072FF" fontSize={12}>
          {getLocale(intl.locale).readBio}
          <Arrow dir="up" src={ArrowIcon} />
        </Text>
      </A>}
      {!collapsed && <A
        onClick={() => this.toggleExpander()}
      >
        <Text color="#0072FF" fontSize={12}>
          {getLocale(intl.locale).hide}
          <Arrow dir="down" src={ArrowIcon} />
        </Text>
      </A>}
    </div>);
  }
}

Expander.propTypes = {
  children: PropTypes.element.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

Expander.propTypes = {
  children: PropTypes.element.isRequired,
};

const BoldHeading = styled(Heading) `
  font-weight: bold;
`;

const FounderImg = styled(Img) `
`;

const TeamPage = ({ intl }) => (
  <div>
    <Helmet>
      <title>{getLocale(intl.locale).title}</title>
      <meta
        name="description"
        content={getLocale(intl.locale).description}
      />
    </Helmet>
    <Header border />
    <Bg mb={[0, rem(77)]} />
    <Container>
      <Wrapper>
        <BoldHeading
          as="h1"
          fontSize={[rem(FONT_SIZES[8]), rem(FONT_SIZES[8])]}
          color="#07172E"
          mb={[rem(6)]}
        >
          {getLocale(intl.locale).title}
        </BoldHeading>
        <SubHeading fontSize={[1, 1, 2]} color="gray.9" normal>
          <SubheadingSeparator />
          {getLocale(intl.locale).subtitle}
        </SubHeading>
        <QuoteContainer>
          <QuoteLine />
          <Quote>
            <Text style={{ margin: 0 }} fontSize={rem(FONT_SIZES[5])} color="#07172E">
              {getLocale(intl.locale).quote}
            </Text>
          </Quote>
        </QuoteContainer>

        <BioSection>
          <FoundersHeading
            as="h2"
            fontSize={[rem(FONT_SIZES[3]), rem(FONT_SIZES[3])]}
            color="#07172E"
            mb={[3, 5]}
          >
            {getLocale(intl.locale).founders.title}
          </FoundersHeading>
          <Flex wrap justify="center">
            {getLocale(intl.locale).founders.bios.map(({ name, picture, title, bio }, index) => (
              <Person key={index} width={[1, 1 / 3]}>
                <Flex column>
                  <StyledBox>
                    <ImageContainer>
                      {(picture && picture !== '') ?
                        /* eslint-disable */
                        <FounderImg src={require(`./content/images/${picture}`)} alt={`Picture of ${name}`} /> :
                        <FounderImg src={require("./content/images/default.png")} alt="Anonymous team member" />
                        /* eslint-disable */
                      }
                    </ImageContainer>
                  </StyledBox>
                  <StyledBox ml={4}>
                    <PersonName heavy as="h2" fontSize={[3, 4]} my={0}>{name}</PersonName>
                    {title && <Title>{title}</Title>}
                    {bio && <Expander intl={intl}><Bio>{bio}</Bio></Expander>}
                  </StyledBox>
                </Flex>
              </Person>
            ))}
          </Flex>
        </BioSection>
      </Wrapper>
    </Container>

    <Wrapper bg="#F4F9FF">
      <Container>
        <BioSection>
          <FoundersHeading
            as="h2"
            fontSize={[rem(FONT_SIZES[3]), rem(FONT_SIZES[3])]}
            color="#07172E"
            mb={[3, 5]}
          >
            {getLocale(intl.locale).investors.title}
          </FoundersHeading>
          <Flex wrap justify="center">
            {getLocale(intl.locale).investors.bios.map(({ name, picture, title, bio }, index) => (
              <Person key={index} width={[1, 1 / 4]}>
                <Flex column>
                  <StyledBox>
                    <ImageContainer>
                      {(picture && picture !== '') ?
                        /* eslint-disable */
                        <Img src={require(`./content/images/${picture}`)} alt={`Picture of ${name}`} /> :
                        <Img src={require("./content/images/default.png")} alt="Anonymous team member" />
                        /* eslint-disable */
                      }
                    </ImageContainer>
                  </StyledBox>
                  <StyledBox ml={4}>
                    <PersonName heavy as="h2" fontSize={[3, 4]} my={0}>{name}</PersonName>
                    {title && <Title>{title}</Title>}
                    {bio && <Expander intl={intl}><Bio>{bio}</Bio></Expander>}
                  </StyledBox>
                </Flex>
              </Person>
            ))}
          </Flex>
        </BioSection>
      </Container>
    </Wrapper>

    <Wrapper>
      <Container>
        <BioSection>
          <FoundersHeading
            as="h2"
            fontSize={[rem(FONT_SIZES[3]), rem(FONT_SIZES[3])]}
            color="#07172E"
            mb={[3, 5]}
          >
            {getLocale(intl.locale).west.title}
          </FoundersHeading>
          <Flex wrap justify="center">
            {getLocale(intl.locale).west.bios.map(({ name, picture, title, bio }, index) => (
              <Person key={index} width={[1, 1 / 4]}>
                <Flex column>
                  <StyledBox>
                    <ImageContainer>
                      {(picture && picture !== '') ?
                        /* eslint-disable */
                        <Img src={require(`./content/images/${picture}`)} alt={`Picture of ${name}`} /> :
                        <Img src={require("./content/images/default.png")} alt="Anonymous team member" />
                        /* eslint-disable */
                      }
                    </ImageContainer>
                  </StyledBox>
                  <StyledBox ml={4}>
                    <PersonName heavy as="h2" fontSize={[3, 4]} my={0}>{name}</PersonName>
                    {title && <Title>{title}</Title>}
                    {bio && <Expander intl={intl}><Bio>{bio}</Bio></Expander>}
                  </StyledBox>
                </Flex>
              </Person>
            ))}
          </Flex>
        </BioSection>
      </Container>
    </Wrapper>

    <SignUpSection />

    <Footer />
  </div>
);

TeamPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(TeamPage);

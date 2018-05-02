import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from 'components/Header';
import Footer from 'components/Footer';
import TopBanner from 'components/TopBanner';
import SignUpSection from 'components/SignUpSection';
import About from './components/About';
import Video from './components/Video';
import Features from './components/Features';


import banner from './CXO.svg';

const CXO = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'cxo.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'cxo.description' })}
      />
    </Helmet>

    <Header />
    <TopBanner src={banner} />
    <About />
    <Video />
    <Features />
    <SignUpSection />
    <Footer />
  </div>
);

CXO.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(CXO);

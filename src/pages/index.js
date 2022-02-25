import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import ExcitingFeatures from 'sections/exciting-features';
import WorkHard from 'sections/work-hard';
import UltimateFeatures from 'sections/ultimate-features';
import HappyCustomer from 'sections/happy-customer';
import Blog from 'sections/blog';
import SubscribeUs from 'sections/subscribe-us';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Launchart has 3 founders experienced in Web3 and NFT Trading"
          description="All Projects in Launchart have to Doxx and KYC themselves. We will not launch unknown projects."
        />
        <Banner />
        <Services />
        {/* <WorkHard /> */}
        <UltimateFeatures />
        <HappyCustomer />
        <Blog />
       
      </Layout>
    </ThemeProvider>
  );
}

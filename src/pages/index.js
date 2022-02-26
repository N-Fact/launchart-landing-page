import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import UltimateFeatures from 'sections/ultimate-features';
import Blog from 'sections/blog';

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
        <Blog />
       
      </Layout>
    </ThemeProvider>
  );
}

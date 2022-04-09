import React from 'react';
import {ThemeProvider} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import UltimateFeatures from 'sections/ultimate-features';
import Team from 'sections/team';
import Partners from "../sections/partners";
import Upcoming from "../sections/upcoming";

export default function IndexPage() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="LaunchArt | Your Launchpad In Avalanche"
                    description="All Projects in Launchart have to Doxx and KYC themselves. We will not launch unknown projects."
                />
                <Banner/>
                <Upcoming/>
                <Services/>
                {/* <WorkHard /> */}
                <UltimateFeatures/>
                <Team/>
                <Partners/>
            </Layout>
        </ThemeProvider>
    );
}

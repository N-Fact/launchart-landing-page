import React from 'react';
import {Box, Button, Container, jsx, ThemeProvider} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import UltimateFeatures from 'sections/ultimate-features';
import Team from 'sections/team';
import Partners from "../sections/partners";
import SectionHeading from "../components/section-heading";
import Feature from "../components/cards/feature";

export default function ArticlePage() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="LaunchArt | Package Details"
                    description="LaunchArt has three packages that are created based on your needs."
                />

                <Box sx={styles.article}>
                    <Container>
                        <h1>
                            Package Details
                        </h1>
                        <p>
                            LaunchArt has three packages that are created based on your needs.
                        </p>

                        <h2>
                            Package 1
                        </h2>
                        <p>
                            Suitable for experienced project teams.
                            In this package, LaunchArt expects team members to be fully experienced in Web3 and NFTs; also,
                            they've been into NFT projects before.
                        </p>
                        <strong>Requirements;</strong>
                        <ol>
                            <li>The roadmap should be ready.</li>
                            <li>The marketing plan should be ready with all of its aspects.</li>
                            <li>The project team must be experienced in community management.</li>
                        </ol>
                        <h2>
                            Package 2
                        </h2>
                        <p>
                            Suitable for experienced teams in Web3 and NFTs but seeking some help for community management.
                        </p>
                        <strong>
                            Requirements;
                        </strong>
                        <ol>
                            <li>The roadmap is in process.</li>
                            <li>The marketing plan should be ready with all of its aspects.</li>
                        </ol>

                        <h2>
                            Package 3
                        </h2>
                        <p>
                            Suitable for experienced teams in Web3 and NFTs but seeking help for Community Management and Marketing
                        </p>

                        <strong>
                            Requirements;
                        </strong>
                        <ol>
                            <li>The roadmap is in development.</li>
                            <li>Willing to collaborate with our teams on Marketing Strategies</li>
                            <li>Willing to collaborate with our teams for Community Management</li>
                        </ol>

                        <h2>LaunchArt Requirements</h2>
                        <p>
                            What we are expecting from projects which fill out the application form;
                        </p>

                        <ol>
                            <li>The artwork must be finished with all of its traits.</li>
                            <li>Project management must include the designer in the team.</li>
                            <li>A developer, who will communicate with our team about Website, Smart Contract & Generate should be included in the
                                team.
                            </li>
                            <li>A Team Member who will communicate with our team about Community Management should be included in the team.</li>
                            <li>A Team Member who will communicate with our team about Marketing Strategies should be included in the team.</li>
                            <li>Post sale period is as crucial as the pre-sale period for LaunchArt. We expect your post-sale plan to be as detailed
                                as your pre-sale plan from all applicant projects. As LaunchArt, we're keeping your %30 income from the mint in the
                                smart contract and giving you three installments in 3 months. We're calling it RugSafe & by making that, we aim to
                                protect the projects and investors by being a middleman.
                            </li>
                        </ol>

                        <p style={{textAlign: 'center', margin: '3rem auto 5rem auto'}}>
                            <Button variant="primary" onClick={(e) => {
                                e.preventDefault();
                                window.open('/appform', '_blank');
                            }}>Application Form</Button>
                        </p>
                    </Container>
                </Box>

            </Layout>
        </ThemeProvider>
    );
}

const styles = {
    article: {
        display: 'block',
        pt: '5rem',
    },
    heading: {
        marginBottom: [40],
        paddingTop: [20, 10],
        maxWidth: ['none', null, null, 565, null, 'none'],
        h2: {
            mt: '20px',
            fontSize: ['24px', '32px', '32px', '32px', '32px', '32px', '40px'],
        },
        P: {
            fontSize: ['16px', '16px', '16px', '16px', '14px', '16px'],
            maxWidth: [710],
            m: ['40px auto 50px'],
            //color:'rgba(52, 61, 72, 0.8)',
            color: 'textSecondary',
            textShadow: 'none',
            fontWeight: '600'
        },
    },
};
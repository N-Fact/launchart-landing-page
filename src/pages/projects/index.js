import React from 'react';
import {Box, Container, Image, jsx, ThemeProvider} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import data from "../../components/projects/projects.data";
import {getProjectData} from "../../components/projects/getProjectData";
import NextLink from "next/link";
import ListItem from "../../components/projects/listItem";

const upcomingData = data.map((entry) => {
    return getProjectData(entry);
});

let index = 0, project;

function Items(props) {
    index++;
    project = props.project;
    if (index > 2) {
        return <div className="list-item">
            <ListItem project={project}/>
        </div>;
    } else {
        return <div className="list-item list-item-big">
            <div key={project.key} sx={styles.projectCard}>
                <NextLink href={`/projects/${project.key}`}>
                    <a>
                        <Image src={`/projects/${project.key}-big.jpg`} alt={project?.title}/>
                    </a>
                </NextLink>
                <h3>{project.title}</h3>
                <p>
                    <span>Mint Date: </span>
                    <strong>{project.mintDateStr}</strong>
                </p>
                <p>
                    <span>Supply: </span>
                    <strong>{project.totalSupply}</strong>
                </p>
            </div>
        </div>;
    }
}

function Grid(props) {
    let index = 0;

    const firstRowItems =upcomingData.splice(0,2);
    const otherItems =upcomingData;
    console.log(firstRowItems.length);
    console.log(otherItems.length);


    return (
        <ul>za</ul>
    );

}

export default function IndexPage() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="LaunchArt | Your Launchpad In Avalanche"
                    description="All Projects in Launchart have to Doxx and KYC themselves. We will not launch unknown projects."
                />
                <Box sx={styles.projects}>
                    <Container>
                        <h1>Projects</h1>
                        <Box sx={styles.grid}>
                            <Grid/>
                        </Box>
                    </Container>
                </Box>

            </Layout>
        </ThemeProvider>
    );
}
const styles = {
    projects: {
        pt: '5rem',
    },
    grid: {
        gap: 10,
        display: ['grid', 'grid', 'grid', 'grid', 'grid'],
        gridTemplateColumns: [
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
        ],
        m: [0, 0, 0, '0 -15px', 0],
        '.slick-track': {
            mr: 'auto',
            ml: 'auto',
        }
    },
};
import React from 'react';
import {Box, Container, Image, jsx, ThemeProvider} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import data from "../../components/projects/projects.data";
import {getProjectData} from "../../components/projects/getProjectData";
import NextLink from "next/link";
import ListItem from "../../components/projects/listItem";
import stampUp from "../../assets/images/icons/stamp-up.svg";
import stampSold from "../../assets/images/icons/stamp-sold.svg";
import stampNew from "../../assets/images/icons/stamp-new.svg";

const upcomingData = data.map((entry) => {
    return getProjectData(entry);
});

function Grid() {
    const upcomingDataCopy = upcomingData.slice();
    const FirstItemData = upcomingDataCopy.splice(0, 2);
    const OtherData = upcomingDataCopy;

    const FirstItems = FirstItemData.map((project) =>
        <div key={project.key} className="list-item list-item-big">
            <div key={project.key} sx={styles.projectCard}>
                <NextLink href={`/projects/${project.key}`}>
                    <a className={'image ' + project.status}>
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
        </div>
    );

    const OtherItems = OtherData.map((project) =>
        <div key={project.key} className="list-item">
            <ListItem project={project}/>
        </div>
    );
    return (
        <div>
            <div className="first-items">{FirstItems}</div>
            <div className="other-items">{OtherItems}</div>
        </div>
    );
}

export default function IndexPage() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="NFT Projects | LaunchArt"
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
        '.first-items': {
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: [
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
                'repeat(2, 1fr)',
            ],
            m: '0 0 2rem 0',
            'a.image': {
                width: '100%',
                flex: 1,
                display: 'block',
                position: 'relative',
                borderRadius: "1rem",
                transition: 'all 0.2s',
                img: {
                    transition: 'all 0.2s',
                    borderRadius: "1rem",
                    width: '100%',
                    height: 'auto',
                    boxShadow: '0px 0px 5px #00000096',
                },
                '&:hover': {
                    transform: 'scale(1.035)',
                    img: {
                        boxShadow: '0px 0px 15px #00000096',
                    }
                },
                '&.upcoming, &.soldout, &.new': {
                    position: 'relative',
                    '&:before': {
                        content: "''",
                        position: 'absolute',
                        backgroundPosition: 'center center',
                        backgroundSize: '100%',
                        backgroundRepeat: 'no-repeat',
                        left: '-20px',
                        bottom: '-20px',
                        width: '110px',
                        height: '110px',
                        zIndex: 5,
                        transform: 'rotateZ(-20deg)',
                        filter: 'drop-shadow(1px 1px 0px #000000ff)',
                    }
                },
                '&.upcoming': {
                    '&:before': {
                        backgroundImage: `url(${stampUp})`,
                    },
                },
                '&.soldout': {
                    '&:before': {
                        backgroundImage: `url(${stampSold})`,
                    },
                },
                '&.new': {
                    '&:before': {
                        backgroundImage: `url(${stampNew})`,
                    },
                },
            },
            img: {
                borderRadius: "1rem",
                width: '100%',
                height: 'auto',
                boxShadow: '0px 0px 5px #00000096',
            },
        },
        '.other-items': {
            display: ['flex', 'grid', 'grid', 'grid', 'grid'],
            gap: '2rem',
            gridTemplateColumns: [
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
                'repeat(2, 1fr)',
                'repeat(3, 1fr)',
                'repeat(4, 1fr)',
            ],
            m: '0 0 4rem 0',
            flexDirection: 'column',
            alignItems: 'center',
            padding: ['0 1rem', 0, 0, 0, 0],
        },
    },
};
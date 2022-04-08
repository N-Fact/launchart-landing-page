/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Box, Container, Image} from 'theme-ui';
import SectionHeading from 'components/section-heading';
import NextLink from "next/link";

import kalao from 'assets/images/logos/kalao.svg';
import chainlink from 'assets/images/logos/chainlink.svg';

const data = [
    {
        id: 1,
        thumb: kalao,
        link: 'https://kalao.io',
        name: `Kalao Go`,
    },
    {
        id: 2,
        thumb: chainlink,
        link: 'https://chain.link',
        name: `Chainlink`,
    },
];

const Partners = () => {
    return (
        <Box as="section" id="team" sx={styles.section} variant="section.partners">
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    title="Partners"
                    description="We are honored to work with our partners."/>
                <Box sx={styles.grid}>
                    {data.map((post) => (
                        /*<BlogPost key={post.id} post={post}/>*/
                        <NextLink href={post.link} key={post.id}>
                            <a target="_blank">
                                <Image src={post.thumb} alt={post.title}/>
                            </a>
                        </NextLink>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Partners;

const styles = {
    title: {
        maxWidth: [300, 300, 660, 500, null, 'none'],
        h2: {
            fontSize: ['16px', '24px', '24px', '32px', null, null, '30px'],
        },
    },
    heading: {
        mt: [5],
        mb: [30, 30, 30, 50, 10],
        maxWidth: [300, 300, 660, 500, null, 'none'],
        h2: {
            fontSize: ['24px', '24px', '24px', '32px', null, null, '40px'],
        },
        p: {
            lineHeight: [1.48],
            maxWidth: [520],
            m: ['20px auto 40px'],
        },
    },
    grid: {
        p: '1rem 2rem 4rem 1rem',
        gap: 100,
        display: ['grid', 'grid', 'grid', 'grid', 'grid'],
        gridTemplateColumns: [
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
        ],
        m: [0, 0, 0, '0 -15px', 0],
        a: {
            background: '#fff',
            borderRadius: '20px',
            textAlign: 'center',
            p: '1rem 5rem'
        }
    },
};

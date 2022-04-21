/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Box, Button, Container} from 'theme-ui';
import Slider from 'react-slick';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';

import leeroy from 'assets/images/blog/leeroy-jenkins.png';
import uykusuz from 'assets/images/blog/uykusuz.png';
import aertas from 'assets/images/blog/aertas.png';

const data = [
    {
        id: 1,
        thumb: leeroy,
        commentCount: 15,
        link: 'https://twitter.com/imstuckstepbru',
        name: `LeeroyJenkins`,
        //title: `Chief Community Officer`,
        title: ``,
    },
    {
        id: 2,
        thumb: uykusuz,
        commentCount: 18,
        link: 'https://twitter.com/uykusztraderNFT',
        name: `UykusuzTraderNFT`,
        //title: `Chief Marketing Officer`,
        title: ``,
    },
    {
        id: 3,
        thumb: aertas,
        commentCount: 13,
        link: 'https://twitter.com/aertascom',
        name: `Aertas`,
        //title: `Chief Technology Officer`,
        title: ``,
    },
];

function SlickArrow({className, onClick, control}) {
    return (
        <Button
            variant="text"
            onClick={onClick}
            className={className}
            sx={styles.paginationButton}
        >
            {control === 'prev' ? (
                <BsArrowLeft size="32px"/>
            ) : (
                <BsArrowRight size="32px"/>
            )}
        </Button>
    );
}

const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SlickArrow control="next"/>,
    prevArrow: <SlickArrow control="prev"/>,
    responsive: [
        {
            breakpoint: 100000,
            settings: 'unslick',
        },
        // {
        //     breakpoint: 768,
        //     settings: {
        //         infinite: false,
        //         slidesToShow: 2,
        //         slidesToScroll: 1,
        //     },
        // },
        // {
        //     breakpoint: 767,
        //     settings: 'unslick',
        // },
    ],
};

const Team = () => {
    return (
        <Box as="section" id="team" sx={styles.section} variant="section.blog">
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    title="About us"
                    description="Our Motto; Stop being a consumer, be a producer. Give back to the community by helping and leading them"/>
                <SectionHeading
                    sx={styles.title}
                    title="Launchart has 3 co-founders experienced in Web3 and NFT Trading"
                    description=""/>
                <Slider sx={styles.grid} {...settings}>
                    {data?.map((post) => (
                        <BlogPost key={post.id} post={post}/>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};

export default Team;

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
        gap: 30,
        display: ['grid', 'grid', 'grid', 'grid', 'grid'],
        gridTemplateColumns: [
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
        ],
        m: [0, 0, 0, '0 -15px', 0],
    },
    paginationButton: {
        minHeight: '30px',
        padding: 0,
        position: 'absolute',
        bottom: '-60px',
        ':focus': {
            outline: '0 none',
        },
        svg: {
            transition: 'all 0.2s ease-in-out 0s',
        },
        '&.slick-disabled': {
            color: '#bbc7d7',
            svg: {
                transform: 'scale(0.8)',
            },
        },
        '&.slick-prev': {
            left: 'calc(50% - 16px)',
            transform: 'translateX(-50%)',
        },
        '&.slick-next': {
            transform: 'translateX(50%)',
            right: 'calc(50% - 16px)',
        },
    },
};

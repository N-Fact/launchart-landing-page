/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Box, Button, Container, Image} from 'theme-ui';
import Slider from 'react-slick';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import SectionHeading from 'components/section-heading';
import data from 'components/projects/projects.data';
import NextLink from "next/link";

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
        {
            breakpoint: 10000,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: 'unslick',
        },
    ],
};

const Upcoming = () => {
    return (
        <Box as="section" id="upcoming" sx={styles.section} variant="section.project">
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    title="Upcoming"
                    description=""/>
                <Slider sx={styles.grid} {...settings}>
                    {data?.map((project) => (
                        <div key={project.id} sx={styles.projectCard}>
                            <NextLink href={`projects/${project.key}`}>
                                <a target="_blank">
                                    <Image src={`/projects/${project.key}-big.jpg`} alt={project?.title}/>
                                </a>
                            </NextLink>
                        </div>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};

export default Upcoming;

const styles = {
    projectCard: {
        p: '2rem',
        img: {
            borderRadius: "1rem"
        }
    },
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
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(1, 1fr)',
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

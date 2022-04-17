/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Box, Button, Container, Image} from 'theme-ui';
import Slider from 'react-slick';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import SectionHeading from 'components/section-heading';
import data from 'components/projects/projects.data';
import NextLink from "next/link";
import {getProjectData} from '../components/projects/getProjectData';

import stampUp from "../assets/images/icons/stamp-up.svg";
import stampNew from "../assets/images/icons/stamp-new.svg";
import stampSold from "../assets/images/icons/stamp-sold.svg";

const upcomingData = data.filter(function (entry) {
    return entry.status === 'upcoming';
}).map((entry) => {
    return getProjectData(entry);
});

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
    slidesToShow: 2,
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
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                infinite: false,
                slidesToShow: 1,
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
    return upcomingData.length ? (
        <Box as="section" id="upcoming" sx={styles.section} variant="section.project">
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    title="Upcoming Launches"
                    description=""/>
                <Slider sx={styles.grid} {...settings}>
                    {upcomingData?.map((project) => (
                        <div key={project.key} sx={styles.projectCard}>
                            <NextLink href={`/projects/${project.key}`}>
                                <a className={project.status}>
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
                    ))}
                </Slider>
            </Container>
        </Box>
    ) : <></>;
};

export default Upcoming;

const styles = {
    projectCard: {
        p: '2rem',
        a: {
            display: 'block',
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
                    top: '-20px',
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
        'h2,h3,p': {
            display: 'block',
            p: '0',
            m: '5px 0',
        },
        'h2,h3': {
            m: '10px 0',
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
        gap: 10,
        display: ['grid', 'grid', 'grid', 'grid', 'grid'],
        gridTemplateColumns: [
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
        ],
        m: [0, 0, 0, '0 -15px', 0],
        '.slick-track': {
            mr: 'auto',
            ml: 'auto',
        }
    },
    paginationButton: {
        minHeight: '30px',
        padding: 0,
        position: 'absolute',
        bottom: 'auto',
        left: 'auto',
        ':focus': {
            outline: '0 none',
        },
        svg: {
            transition: 'all 0.2s ease-in-out 0s',
        },
        '&.slick-disabled': {
            color: 'muted',
            svg: {
                transform: 'scale(0.8)',
            },
        },
        '&.slick-prev': {
            //left: 'calc(50% - 16px)',
            //transform: 'translateX(-50%)',
            right: '6rem',
            top: '-2rem',
        },
        '&.slick-next': {
            //transform: 'translateX(50%)',
            //right: 'calc(50% - 16px)',
            right: '2rem',
            top: '-2rem',
        },
    },

};

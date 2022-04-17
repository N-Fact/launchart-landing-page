import React from 'react';
import data from 'components/projects/projects.data';
import NextLink from "next/link";
import {getProjectData} from '../../components/projects/getProjectData';
import ErrorPage from 'next/error'
import {Box, Button, Container, Image, jsx, ThemeProvider} from "theme-ui";
import theme from "../../theme";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Breadcrumb from "../../components/breadcrumb";
import ListItem from "../../components/projects/listItem";
import discord from 'assets/images/icons/social-discord.png';
import web from 'assets/images/icons/social-web.png';
import twitter from 'assets/images/icons/social-twitter.png';
import stampUp from "../../assets/images/icons/stamp-up.svg";
import stampSold from "../../assets/images/icons/stamp-sold.svg";
import stampNew from "../../assets/images/icons/stamp-new.svg";


const Project = ({slug}) => {
    // All Data
    const projectsData = data.map((entry) => {
        return getProjectData(entry);
    });

    // This Data
    let project = projectsData.filter(function (entry) {
        return entry.key === slug;
    });

    let index = 0,
        curIndex;
    projectsData.forEach(function (item) {
        if (slug === item.key) {
            curIndex = index;
            return;
        }
        index++;
    });
    let prev = '',
        next = '';
    if (curIndex === 0) {
        next = projectsData[curIndex + 1];
    } else if (curIndex === projectsData.length - 1) {
        prev = projectsData[curIndex - 1];
    } else {
        prev = projectsData[curIndex - 1];
        next = projectsData[curIndex + 1];
    }

    function NavItem(props) {
        if (props.item) {
            return <div className={props.dir}>
                <ListItem project={props.item}/>
            </div>;
        }
        return <div/>;
    }

    function Links(props) {
        const links = props.project.links;
        const listItems = links.map((link) =>
            <li key={link.key} className={link.key}>
                <a target="_blank" href={link.link}>{link.key}</a>
            </li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    // Record Found
    if (project.length) {
        project = project[0];
        return (
            <ThemeProvider theme={theme}>
                <Layout>
                    <SEO
                        title={project.title + " | LaunchArt"}
                        description={project.description.replace(/<[^>]+>/g, '').substring(0, 120)}
                    />
                    <Box sx={styles.project}>
                        <Container>
                            {/*<Breadcrumb>
                                <li><a href="\projects">Projects</a></li>
                                <li>{project.title}</li>
                            </Breadcrumb>*/}
                            <h1>{project.title}</h1>
                            <Box sx={styles.projectCard}>
                                <div className={'image ' + project.status}>
                                    <Image src={`/projects/${project.key}-big.jpg`} alt={project?.title}/>
                                </div>
                                <div className="desc">
                                    <p>
                                        <span>Mint Date: </span>
                                        <strong>{project.mintDateStr}</strong>
                                    </p>
                                    <p>
                                        <span>Mint Price: </span>
                                        <strong>{project.mintPrice}</strong>
                                    </p>
                                    <p>
                                        <span>Supply: </span>
                                        <strong>{project.totalSupply}</strong>
                                    </p>
                                    <p className="kyc">
                                        <strong>KYC Verified</strong>
                                    </p>
                                    <Box sx={styles.links}>
                                        <Links project={project}/>
                                    </Box>
                                    <div className="description">
                                        <p dangerouslySetInnerHTML={{__html: project.description}}/>
                                    </div>

                                </div>
                            </Box>
                            <Box sx={styles.hr}>
                                <hr/>
                            </Box>
                            <Box sx={styles.subNav}>
                                <div className="head">
                                    <h3>Other Projects</h3>
                                    <a href="/projects">All Projects</a>
                                </div>
                                <div className="navs">
                                    <NavItem item={prev} dir='prev'/>
                                    <NavItem item={next} dir='next'/>
                                </div>
                            </Box>
                        </Container>
                    </Box>
                </Layout>
            </ThemeProvider>
        );
    } else {
        // 404
        return <ErrorPage statusCode={404}/>
    }
}

Project.getInitialProps = (appContext) => {
    return {slug: appContext.query.slug}
}

export default Project

const styles = {
    project: {
        pt: '5rem',
        minHeight: [null, null, null, '85vh', '85vh', '85vh']
    },
    projectCard: {
        p: '0 0 2rem 0',
        display: [null, null, null, null, 'flex', 'flex'],
        alignItems: 'flex-start',
        '.image': {
            flex: 1,
            width: [null, null, null, null, '55%', '55%'],
            position: 'relative',
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
        img: {
            borderRadius: "1rem",
            width: '100%',
            height: 'auto',
            boxShadow: '0px 0px 5px #00000096',
        },
        '.desc': {
            flex: 1,
            p: ['1rem 0', '1rem 0', '1rem 0', '1rem 0', '0 0 0 3rem', '0 0 0 3rem'],
            'h2,h3,p': {
                display: 'block',
                p: '0',
                m: '5px 0',
            },
            'h2,h3': {
                m: '10px 0',
            },
            '.description': {
                p: "1rem 0 0 0"
            },
            '.kyc': {
                span: {},
                strong: {
                    m: '1rem 0 0 0',
                    p: '1px 35px 1px 15px',
                    position: 'relative',
                    display: 'inline-block',
                    borderRadius: '10px',
                    background: '#16982b',
                    '&:after': {
                        content: "''",
                        display: 'block',
                        position: 'absolute',
                        background: 'transparent',
                        top: '2px',
                        right: '13px',
                        width: '7px',
                        height: '13px',
                        borderRadius: 0,
                        border: 'solid #fff',
                        borderWidth: '0 2px 2px 0',
                        transform: 'rotate(45deg)',
                    },
                },
            }
        },
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
    subNav: {
        '.head': {
            display: 'flex',
            justifyContent: 'space-between',
            a: {
                color: 'link',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                }
            },
            'a,h3': {
                lineHeight: '20px',
                m: '0 0 1rem 0',
            }
        },
        '.navs': {
            display: 'flex',
            justifyContent: 'space-between',
            p: '1rem 0 3rem 0',
            '.prev,.next': {
                position: 'relative',
                transform: ['scale(.7)', 'scale(.8)', 'scale(.9)', 'none', 'none', 'none'],
                'a:after': {
                    position: 'absolute',
                    content: "''",
                    top: ['40px', '60px', '70px', '70px', '70px',],
                    left: '0',
                    width: '30px',
                    height: '30px',
                    transform: 'rotate(135deg)',
                    boxShadow: '10px 10px 0 #E74241, 10px 10px 0 #E74241, 10px 10px 0 #E74241, 10px 10px 0 #E74241',
                    transition: 'all 0.2s',
                },
            },
            '.prev': {
                'a': {
                    '&:hover': {
                        '&:after': {
                            left: '-10px',
                        }
                    }
                }
            },
            '.next': {
                'a:after': {
                    left: 'auto',
                    right: ['10px', 0, 0, 0, 0],
                    transform: 'rotate(-45deg)',
                },
                'a': {
                    '&:hover': {
                        '&:after': {
                            right: '-10px',
                        }
                    }
                }
            }
        }
    },
    hr: {
        'hr': {
            fontSize: '20px',
            position: 'relative',
            border: 0,
            height: '1.5em',
            '&:before': {
                content: "''",
                background: 'linear-gradient(to right, transparent, #E74241, transparent)',
                position: 'absolute',
                left: 0,
                top: '50%',
                width: '100%',
                height: '1px',
            }
        }
    },
    links: {
        ul: {
            listStyle: 'none',
            m: 0,
            p: '1rem 0',
            li: {
                display: 'inline-block',
                p: '0 1rem 0 0',
                position: 'relative',
                a: {
                    display: 'block',
                    textIndent: '-9999px',
                    height: '32px',
                    width: '32px',
                    whiteSpace: 'nowrap',
                    outline: 'none',
                    background: `url(${web}) no-repeat center center`,
                    backgroundSize: '24px',
                    transition: 'transform 0.2s',
                    filter: 'drop-shadow(0 0 2px #36363661)',
                    '&:hover': {
                        transform: 'scale(2)',
                    }
                },
                '&.discord': {
                    a: {
                        backgroundImage: `url(${discord})`,
                    }
                },
                '&.twitter': {
                    a: {
                        backgroundImage: `url(${twitter})`,
                    }
                }
            },
        },
    },
};

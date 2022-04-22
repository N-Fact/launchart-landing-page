/** @jsxRuntime classic */
/** @jsx jsx */
import {
    jsx,
    Box,
    Container,
    Heading,
    Text,
    Button,
} from 'theme-ui';
import {rgba} from 'polished';

import launchartBanner from 'assets/images/launchart-banner.svg';


const Banner = () => {
    return (
        <Box as="section" id="home" sx={styles.section}>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.content}>
                        <Heading as="h1">
                            Every story has a beginning.
                        </Heading>
                        <Text as="p">
                            Your story begins here. Launchart is the easiest way to launch your one-of-a-kind NFT
                            collection.
                        </Text>
                        <Box sx={styles.subscribe}>
                            <Button variant="primary" onClick={(e) => {
                                e.preventDefault();
                                window.open('/appform', '_blank');
                                //window.location.href = '/appform';
                            }}>Application Form</Button>
                        </Box>
                    </Box>
                    <Box as="figure" sx={styles.illustration}/>
                    {/* <Image src={banner} alt="banner" /> */}
                </Box>
                <Heading as="h2" sx={styles.slogan}>
                    First launchpad in Avalanche🔺 that only focuses on your needs.
                </Heading>

            </Container>
        </Box>
    );
};

export default Banner;

const styles = {
    section: {
        //backgroundColor:'rgba(252, 252, 252, 0.8)',
        //backgroundImage: 'url("/images/launchart-banner.svg")',
        backgroundImage: `url(${launchartBanner})`,
        backgroundPosition: ['50% 70%', '90% 70%', '90% 70%', '90% 70%', 'right center', 'right center'],
        backgroundSize: ['70%', '65%', '73%', '53%', '53%', '53%'],
        backgroundRepeat: 'no-repeat',
    },

    contentWrapper: {
        display: ['block', null, null, null, 'flex', 'flex'],
        gridTemplateColumns: ['1fr 1fr', null, null, null, '0.9fr 1.1fr'],
        gap: [0, 0, 0, 0, 10],
        alignItems: 'center',
        minHeight: ['80vh', '90vh', '90vh', '90vh', '90vh', '90vh', '90vh'],
        pt: ['70px', null, '60px', '70px', '25px', null, 0],
        textAlign: ['left', null, 'left'],
    },
    slogan: {
        textAlign: 'center',
        margin: '0',
        minHeight: ['20vh', '10vh', '10vh', '10vh', '10vh', '10vh', '10vh'],
        fontWeight: 600,
        fontSize: '22px',
    },
    content: {
        maxWidth: [null, null, null, '60%', '80%'],
        //margin: [null, null, null, '0 auto', 0],
        textAlign: [null, null, null, 'left', 'left'],
        marginTop: '5rem',
        marginBottom: '5rem',
        h1: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 600,
            fontSize: ['34px', '34px', '34px', '44px', '40px', '49px', '62px'],
            lineHeight: [1.26, 1.26, 1.11, 1.4, 1.11],
            textShadow: '2px 1px var(--theme-ui-colors-textShadow)',
            //textShadow: '0 0 3px #fff'
        },
        h2: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 300,
            fontSize: ['24px', '24px', '24px', '24px', '24px', '49px', '62px'],
            lineHeight: [1.26, 1.26, 1.11, 1.4, 1.11],
        },
        p: {
            color: 'text',
            maxWidth: [null, null, null, 'none', 450],
            fontSize: ['14px', null, '18px', 17, '16px', '15px', '18px'],
            lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
            mt: ['25px', null, null, null, 4],
            textShadow: '2px 1px var(--theme-ui-colors-textShadow)'
        },
    },

    subscribe: {
        alignItems: 'center',
        display: ['block', null, null, null, 'grid', 'flex'],
        gridTemplateColumns: ['1fr 2fr', null, null, null, '1fr 2fr'],
        gap: [0, 0, 0, 0, 10],
        mt: ['10px'],
        color: 'text',
        '@media screen and (max-width: 600px)': {
            paddingTop: "5px"
        },
        input: {
            mr: ['15px'],
            minHeight: ['45px', null, null, 60, 50, null, 60],
        },
        button: {
            minHeight: ['45px', null, null, 60, 50, null, 60],
            fontSize: ['14px', '14px', '16px'],
        },
        h2: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 300,
            fontSize: ['24px', '24px', '24px', '24px', '24px', '49px', '62px'],
            lineHeight: [1.26, 1.26, 1.11, 1.4, 1.11],
        },
    },
    subBanner: {
        display: 'flex',
        alignItems: 'center',
        gridTemplateColumns: ['2fr'],
        justifyContent: ['flex-start'],
        h1: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 600,
            fontSize: ['20px'],
            lineHeight: [1.26],
        },
    },
    sponsoredBy: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: ['center', null, null, null, 'unset'],
        span: {
            color: rgba('#566272', 0.6),
            fontSize: ['14px', '16px', '16px'],
        },
    },
    logos: {
        display: 'flex',
        alignItems: 'center',
        figure: {
            ml: ['10px', '16px', '28px', '16px', '16px'],
        },
        img: {
            maxWidth: ['69px', '85px', '100%', '100%', '79px', '100px', '100%'],
        },
    },
    illustration: {
        ml: [0, 0, '30px', 0, 0],
        mt: ['50px', null, null, null, 0],
        minWidth: ['auto', null, null, null, null, '600px'],
        display: 'flex',
        flexDirection: 'column',
        img: {
            maxWidth: ['100%', null, null, '80%', '60%'],
        },
        h1: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 600,
            fontSize: ['22px'],
            lineHeight: [1.26],
            bottom: [10, null, null, '30%', '10%'],
            '@media screen and (min-width: 1440px)': {
                bottom: '12%',
                left: '34%',
            },
            '@media screen and (max-width: 600px)': {
                top: "10px",
                bottom: 'unset',
                position: 'unset',
                fontSize: ['18px'],
            },
            //position: 'absolute',
            left: [0, null, null, '80%', '25%'],
        },
    },
};

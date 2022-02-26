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
import { rgba } from 'polished';
const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container >
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading as="h1">
            Every story has a beginning.
            </Heading>
            <Text as="p">
            Your story begins here. Launchart is the easiest way to launch your one-of-a-kind NFT collection. 
            </Text>
            <Box sx={styles.subscribe}>
              <Button variant="primary">Application Form
           </Button>
            </Box>
          </Box>
           <Box as="figure" sx={styles.illustration}>
            {/* <Image src={banner} alt="banner" /> */}
            <Heading as="h1">
             First launchpad in Avalanche🔺 that only focuses on your needs.
            </Heading>
          </Box>
        </Box>
        <div sx={styles.bghomeoverdelay}>
      </div>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor:'rgba(252, 252, 252, 0.8)',
    backgroundImage: 'url("/images/launchart-banner.svg")',
    backgroundPosition: 'right',
    backgroundSize: '53%',
    backgroundRepeat: 'no-repeat',
    '@media screen and (max-width: 600px)': {
      backgroundImage: "unset",
      backgroundPosition: 'unset',
      backgroundSize: 'unset',
    },
  },
  bghomeoverdelay:{
     display:'none',
    '@media screen and (max-width: 600px)': {
      backgroundImage: 'url("/images/launchart-banner.svg")',
      backgroundPosition: 'right',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      display:'block',
      width: "100%",
      height: "216px",
      left: "0",
      bottom: "0",
      opacity:'0.5',
      top: "50px",
      zIndex:"-1"
    },
  },
  contentWrapper: {
    display: ['block', null, null, null, 'grid', 'flex'],
    gridTemplateColumns: ['1fr 1fr', null, null, null, '0.9fr 1.1fr'],
    gap: [0, 0, 0, 0, 10],
    alignItems: 'center',
    minHeight: [null, null, '100vh', '70vh', '50vh', '100vh'],
    pt: ['70px', null, null, '130px', '25px', null, 0],
    textAlign: ['center', null, 'left'],
  },
  content: {
    maxWidth: [null, null, null, '55%', '100%'],
    margin: [null, null, null, '0 auto', 0],
    textAlign: [null, null, null, 'center', 'left'],
    h1: {
      color: 'text',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 600,
      fontSize: ['34px', '34px', '34px', '44px', '40px', '49px', '62px'],
      lineHeight: [1.26, 1.26, 1.11, 1.4, 1.11],
      textShadow: '2px 1px #fff'
    },
    h2: {
      color: 'text',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 300,
      fontSize: ['24px', '24px', '24px', '24px', '24px', '49px', '62px'],
      lineHeight: [1.26, 1.26, 1.11, 1.4, 1.11],
    },
    p: {
      color: 'text',
      maxWidth: [450, null, null, 'none', 450],
      fontSize: ['14px', null, '18px', 17, '16px', '15px', '18px'],
      lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
      mt: ['25px', null, null, null, 4],
      textShadow: '2px 1px #fff'
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
      fontFamily: 'Roboto, sans-serif',
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
      fontFamily: 'Roboto, sans-serif',
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
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 600,
      fontSize: ['22px'],
      lineHeight: [1.26],
      bottom: [10, null, null, '30%', '10%'],
      '@media screen and (min-width: 1440px)': {
        bottom: '12%',
        left:'34%',
      },
      '@media screen and (max-width: 600px)': {
        top: "10px",
        bottom:'unset',
        position:'unset',
        fontSize: ['18px'],
      },
      position: 'absolute',
      left: [0, null, null, '80%', '25%'],
    },
  },
};

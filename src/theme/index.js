export default {
    // example colors with dark mode
    config: {
        initialColorModeName: 'lightmode',
    },
    colors: {
        text: '#343d48', // body color and primary color
        textSecondary: '#27323f', // secondary body color
        textWhite: '#fff', // secondary body color
        heading: '#0f2137', // primary heading color
        headingSecondary: '#343d48', // heading color
        background: '#fff', // body background color
        backgroundSecondary: '#f7f7f7', // secondary background color
        backgroundThird: '#f1f7ff',
        borderColor: '#f3f4f5', // border color
        primary: '#E74241', // primary button and link color
        primaryHover: '#af2c2b', // primary button and link color
        secondary: '#ef9e48', // secondary color - can be used for hover states
        muted: '#c3c3c3', // muted color
        accent: '#609', // a contrast color for emphasizing UI
        dark: '#10132d',
        link: '#e74241', // default link color
        linkHover: '#d53130', // default link color
        textShadow: '#1b2128', // default link color
        warning: '#ffa114',
        footerBg: '#ddd',

        // highlight a background color for highlighting text
        modes: {
            dark: {
                text: '#f5f5f5',
                textSecondary: '#d9d9d9',
                background: '#343d48',
                backgroundSecondary: '#222932',
                backgroundThird: '#151a21',
                heading: '#b7b7b7', // primary heading color
                headingSecondary: '#9f9f9f', // heading color
                muted: '#596572',
                textShadow: '#000', // default link color
                warning: '#ffa114',
                footerBg: '#0f1216',
                // link: '#4f96ff', // default link color
                // linkHover: '#79afff', // default link color
            },
        },
    },
    fonts: {
        body: 'Roboto, sans-serif',
        // body:
        //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'Roboto, sans-serif',
        headingSerif: 'Roboto, sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    fontWeights: {
        body: 'normal',
        // body: 400,
        heading: 500,
        // heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        // body: 1.5,
        heading: 1.25,
        // heading: 1.125,
    },
    letterSpacings: {
        body: 'normal',
        caps: '0.2em',
        heading: '-0.5px',
    },
    space: [0, 4, 8, 12, 16, 32, 28, 5, 96, 44],
    sizes: {},
    breakpoints: [
        '480px',
        '640px',
        '768px',
        '1024px',
        '1200px',
        '1367px',
        '1440px',
    ],
    // variants can use custom, user-defined names
    layout: {
        container: {
            maxWidth: ['100%', null, null, null, '970px', '1170px', '1260px'],
            paddingLeft: [15, 30],
            paddingRight: [15, 30],
            m: '0 auto',
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'space-between',
        },
        main: {},
        footer: {
            backgroundColor: 'footerBg',
            pt: [6],
            pb: [5],
        },
    },
    section: {
        banner: {},
        features: {
            position: 'relative',
            pt: [7, null, null, null, 0],
            pb: [6, null, null, null, 7, 8],
            backgroundColor: 'backgroundSecondary',
        },
        excitingFeatures: {
            pt: [6, null, null, null, 7],
            pb: [6, null, null, 0, 7],
        },
        workHard: {
            pt: [6, null, null, 0, 7],
            pb: [7, null, null, null, 8],
        },
        ultimateFeatures: {
            pt: [7, null, null, null, null, 8],
            pb: [7, null, null, null, null, 8],
        },
        happyCustomer: {
            pt: [6, 6, 6, 6, 7, 7],
            pb: [6, 6, 6, 0, 7, 7],
        },
        blog: {
            pt: [6, null, null, 8, 7, 6, 7],
            pb: [6, 6, 7, 8, null, 9],
            backgroundColor: 'backgroundSecondary',
        },
        project: {
            pt: [6, null, null, 8, 7, 6, 7],
            pb: [6, 6, 7, 8, '2rem', '1rem'],
            backgroundColor: 'backgroundThird',
        },
        partners: {
            pt: [6, null, null, 8, 7, 6, 7],
            pb: [6, 6, 7, 8, null, 9],
            backgroundColor: '',
        },
        subscribe: {
            backgroundColor: ['#fff', '#fff', '#fff', '#f8f0ea', '#f8f0ea'],
            pt: [7],
            pb: [7],
        },
    },
    text: {
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
        },
        heroTitle: {
            fontSize: [4, , , 5, , 5, 6],
            fontWeight: 700,
            letterSpacing: 'heading',
            lineHeight: [1.4, , , , , , 1.57],
        },
    },
    links: {
        bold: {
            fontWeight: 'bold',
        },
        logo: {
            display: 'inline-flex',
            alignItems: 'flex-start',
        },
        learnMore: {
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontWeight: 700,
            color: 'primary',
        },
        nav: {
            display: ['none', null, 'inline-flex'],
            p: 2,
            // transitionProperty: 'background-color',
            // transitionTimingFunction: 'ease-out',
            // transitionDuration: '.2s',
            // borderRadius: 2,
            // '&:hover': {
            //   bg: 'highlight',
            // },
            // '&.active': {
            //   color: 'primary',
            //   bg: 'highlight',
            // },
        },
        footer: {
            display: 'flex',
            px: 0,
            color: 'inherit',
            textDecoration: 'none',
            fontSize: '14px',
            lineHeight: 2.5,
        },
    },
    images: {
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 99999,
        },
    },
    // variants for buttons
    buttons: {
        menu: {
            display: ['block', , , , 'none'],
            svg: {
                width: '32px',
            },
        }, // default variant for MenuButton
        // you can reference other values defined in the theme
        default: {
            backgroundColor: 'transparent',
            fontFamily: 'body',
            fontWeight: 'bold',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease-in-out 0s',
            whiteSpace: 'nowrap',
            textShadow: 'none',
        },
        primary: {
            variant: 'buttons.default',
            color: 'white',
            bg: 'primary',
            minHeight: ['50px', '50px', '50px', '50px', '50px', '60px'],
            padding: ['0 25px', '0 25px', '0 25px', '0 30px'],
            '&:hover': {
                bg: 'primaryHover',
            },
        },
        primaryMd: {
            variant: 'buttons.primary',
            minHeight: '50px',
            px: '25px',
        },
        secondary: {
            cursor: 'pointer',
            fontFamily: 'body',
            color: 'text',
            bg: 'secondary',
            //transition: '0.3s ease-in-out 0s',
        },
        muted: {
            variant: 'buttons.default',
            backgroundColor: '#edf0f2',
            color: 'text',
            ':hover': {
                backgroundColor: 'primary',
                color: '#fff',
            },
        },
        white: {
            variant: 'buttons.default',
            backgroundColor: 'white',
            color: '#020718',
        },
        text: {
            variant: 'buttons.default',
            color: 'text',
        },
    },
    cards: {
        primary: {
            padding: 2,
            borderRadius: 4,
            // boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
        },
        offer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
            minHeight: 130,
            m: 2,
            background: '#fff',
            border: '1px solid #EDEFF6',
            borderRadius: 5,
        },
        featureCard: {
            display: 'flex',
            alignItems: ['center', 'flex-start'],
            flexDirection: ['column', 'row'],
            p: [0, 3],
        },
    },
    forms: {
        label: {
            fontSize: 1,
            fontWeight: 'bold',
        },
        input: {
            borderRadius: 8,
            borderColor: 'borderColor',
            height: 60,
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
    },
    badges: {
        primary: {
            color: 'background',
            bg: '#28a5ff',
            borderRadius: 30,
            p: '3px 11px',
            fontSize: 1,
            letterSpacing: '-0.5px',
        },
        outline: {
            color: 'primary',
            bg: 'transparent',
            boxShadow: 'inset 0 0 0 1px',
        },
    },
    styles: {
        // To add base, top-level styles to the <body> element, use theme.styles.root.
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        a: {
            color: 'link',
        },
        // h1-h6 Heading styles
        h1: {
            // fontFamily: 'none',
            // variant: 'text.heading',
            // fontSize: 6,
        },
        h2: {
            // fontFamily: 'none',
            // variant: 'text.heading',
            // fontSize: 5,
        },
        h3: {
            variant: 'text.heading',
            fontSize: 4,
        },
        h4: {
            variant: 'text.heading',
            fontSize: 3,
        },
        h5: {
            variant: 'text.heading',
            fontSize: 2,
        },
        h6: {
            variant: 'text.heading',
            fontSize: 1,
        },
        // Divider styles
        hr: {
            border: 0,
            borderBottom: '1px solid',
            borderColor: '#d9e0e7',
        },
        // also you can use other HTML elements style here
        ul: {
            listStyle: 'none',
        },
        srOnly: {
            border: '0 !important',
            clip: 'rect(1px, 1px, 1px, 1px) !important',
            clipPath: 'inset(50%) !important',
            height: '1px !important',
            margin: '-1px !important',
            overflow: 'hidden !important',
            padding: '0 !important',
            position: 'absolute !important',
            width: '1px !important',
            whiteSpace: 'nowrap !important',
        },
    },
};

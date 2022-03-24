import React, {useEffect} from 'react';
//import {useRouter} from 'next/router'
import {
    jsx,
    Box,
    Container,
    ThemeProvider,
    Text,
    Button,
} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import HeaderBlank from '../../components/header/headerBlank';
import logoDark from 'assets/images/logodark.svg';
import logoLight from "../../assets/images/logo.svg";
import {useColorMode} from 'theme-ui'
import LogoNew from "../../components/icons/LogoNew";

let intViewportHeight;

export default function AppformIndex() {
    let formSection = 0;

    //const router = useRouter();

    useEffect(() => {
        intViewportHeight = window.innerHeight;
        let timer = null;
        const handleScroll = () => {
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                let thisSectionid;
                const sectionID = Math.floor(window.scrollY / intViewportHeight);
                const ratio = (window.scrollY % intViewportHeight) / intViewportHeight;
                if (ratio > .7) {
                    thisSectionid = sectionID + 1;
                } else {
                    thisSectionid = sectionID;
                }
                if (formSection !== thisSectionid) {
                    formSection = thisSectionid;
                    goSection(formSection);
                }
            }, 150);
        }
        const handleResize = () => {
            intViewportHeight = window.innerHeight;
            goSection(formSection);
        }
        const prepareSideLink = () => {
            Array.from(document.querySelectorAll('.formSection')).forEach(function (el) {
                el.removeAttribute('id');
            });
            const sideNav = document.getElementById('sideNav');
            const ul = sideNav.firstChild;
            ul.innerHTML = "";
            let li, a;
            let index = 0;
            Array.from(document.querySelectorAll('.formSection.open')).forEach(function (el) {
                el.setAttribute('id', 'formSection' + index.toString());
                index++;
                li = document.createElement('li');
                li.classList.add('side-link');
                li.setAttribute('data-index', index.toString());
                a = document.createElement('a');
                a.innerHTML = index.toString();
                a.onclick = function (e) {
                    e.preventDefault();
                    goSection(parseInt(this.parentNode.getAttribute('data-index')));
                }
                li.appendChild(a);
                ul.appendChild(li);
            });
        }
        const initialize = () => {
            prepareSideLink();
            window.scrollTo(window.scrollX, window.scrollY - 1);
            window.scrollTo(window.scrollX, window.scrollY + 1);
            goSection(1);
        }
        initialize();
        /* const onHashChanged = (url) => {
                     let sectionid = 0
                       if (window.location.hash) {
                           sectionid = parseInt(window.location.hash.replace('#formSection', ''));
                           sectionid = sectionid > -1 ? sectionid : 0;
                       }
                       if (sectionid !== formSection) {
                           goSection(sectionid);
                       }
        };*/
        //window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        //will be called on component mount
        document.body.style.overflow = "hidden";
        document.getElementById('logoMain').style.opacity = '0';
        //window.addEventListener("hashchange", onHashChanged);
        return () => {
            //window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
            document.body.style.overflow = "auto";
            document.getElementById('logoMain').style.opacity = '1';
            //window.removeEventListener("hashchange", onHashChanged);
        }
    }, [])

    const goSection = function (sectionid) {
        console.log(sectionid);
        if (sectionid === 0 || sectionid !== formSection) {
            formSection = sectionid;
            //window.scrollTo(window.scrollX, intViewportHeight * sectionid)
            //document.location = '#formSection' + sectionid;
            document.getElementById('logoMain').style.opacity = (sectionid !== 0 ? 1 : 0).toString();
            const elSideNav = document.getElementById("sideNav");
            if (sectionid === 0) {
                elSideNav.classList.remove("sideNavShow");
            } else {
                elSideNav.classList.add("sideNavShow");
                Array.from(document.querySelectorAll('.side-link.active')).forEach(function (el) {
                    el.classList.remove('active');
                });
                document.querySelector('li.side-link:nth-child(' + sectionid + ')').classList.add('active');
                const inp = document.querySelector('#formSection' + sectionid + ' .inp');
                if (inp) {
                    inp.focus();
                }
            }
        }
        scroll({top: intViewportHeight * sectionid});
    }
    const goNextSection = function () {
        goSection(formSection + 1);
    };


    return (
        <ThemeProvider theme={theme}>
            <SEO
                title="Launchart Application Form"
                description="Launchart Application Forms"
            />
            <HeaderBlank/>
            <Box id="appform" sx={styles.appform}>
                <Container>
                    <nav className="sideNav" id="sideNav">
                        <ul>
                            <li/>
                        </ul>
                        {/*<li className="side-link"><a onClick={(e) => {goSectionLink(e, 1)}}>1</a></li>*/}
                    </nav>
                    <form>
                        <div className="formSection open">
                            <div className="infoLogo">
                                <LogoNew width={'100%'} height={'auto'} id={"logoHuge"}/>
                            </div>
                            <div className="infoText">
                                <h1>LaunchArt Request</h1>
                                <p>
                                    We are requesting some vital pieces of information about your project before our
                                    first meeting.
                                </p>
                                <p>
                                    For questions, please contact on Discord LeeroyJenkins#8467.
                                </p>
                                <p>
                                    We are requesting some vital information about your project before our first
                                    meeting.
                                    For questions, please contact on Discord LeeroyJenkins#8467.
                                </p>
                                <Button variant="primary" type="button" tabIndex={-1} onClick={(e) => {
                                    goNextSection();
                                }}>Start</Button>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">Collection name</label>
                                <input
                                    type="text" name="name" className="inp" tabIndex={-1}
                                    placeholder="Type the collection name..."
                                />
                                <footer>
                                    <Button variant="primary" type="button" tabIndex={-1} onClick={(e) => {
                                        goNextSection();
                                    }}>OK</Button>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="desc">Collection description</label>
                                <p className="exm">
                                    This description will be used to present the collection on the marketplace.
                                </p>
                                <textarea
                                    name="description" className="inp" tabIndex={-1}
                                    placeholder="Type the collection description..."
                                />
                                <footer>
                                    <Button variant="primary" type="button" tabIndex={-1} onClick={(e) => {
                                        goNextSection();
                                    }}>OK</Button>
                                </footer>

                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">How many NFTs do you have in your collection?</label>
                                <input
                                    type="text" name="symbol" className="inp" tabIndex={-1}
                                    placeholder="Type the total supply..."
                                />
                                <footer>
                                    <Button variant="primary" type="button" tabIndex={-1} onClick={(e) => {
                                        goNextSection();
                                    }}>OK</Button>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">When do you plan to have your NFT minting event?</label>
                                tarih
                                <input
                                    type="text" name="symbol" className="inp" tabIndex={-1}
                                    placeholder="Type the total supply..."
                                />
                                <footer>
                                    <Button variant="primary" type="button" tabIndex={-1} onClick={(e) => {
                                        goNextSection();
                                    }}>OK</Button>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection open">
                            <div className="formGroup">
                                <label htmlFor="name">Do you need a whitelist mechanism?</label>
                                Yes No
                                <input
                                    type="text" name="symbol" className="inp" tabIndex={-1}
                                    placeholder="Type the total supply..."
                                />
                                <footer>
                                    <Button variant="primary" type="button" tabIndex={-1} onClick={(e) => {
                                        goNextSection();
                                    }}>OK</Button>
                                </footer>
                            </div>
                        </div>
                        <div className="formSection">
                            <div className="formGroup">
                                <label htmlFor="desc">If yes, how many people do you aim to have in your whitelist, and
                                    how many different whitelists do you want to have?</label>
                                <p className="exm">
                                    Example: <br/>
                                    2 Whitelists with 2000 people for each.
                                </p>
                                <textarea
                                    name="description" className="inp" tabIndex={-1}
                                    placeholder="Type the collection description..."
                                />
                                <footer>
                                    <Button variant="primary" type="button" tabIndex={-1} onClick={(e) => {
                                        goNextSection();
                                    }}>OK</Button>
                                </footer>

                            </div>
                        </div>
                    </form>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

const styles = {
    appform: {
        // position: 'absolute',
        // left: 0,
        // top: 0,
        // right: 0,
        // bottom: 0,
        '.formSection': {
            width: ['90%', '70%', '70%', '70%', '60%', '50%'],
            paddingLeft: ['10%', '0', '0', '0', '0', '0'],
            paddingTop: '60px',
            margin: 'auto',
            height: '100vh',
            display: 'none',
            alignContent: 'center',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            '&.open': {
                display: 'flex'
            },
            '.formGroup': {
                flex: 1,
                'footer': {
                    paddingTop: 4
                }
            },
            'label': {
                display: 'block',
                padding: '0 0 .6rem 0',
                fontSize: '1.3rem',
                lineHeight: '1.6rem',
            },
            'p.exm': {
                margin: '.7rem 0'
            },
            "input[type='text'],textarea": {
                display: 'block',
                width: '100%',
                border: 'none',
                padding: '8px 0',
                backgroundColor: 'transparent',
                borderBottom: '2px solid',
                borderColor: 'primary',
                outline: '0',
                color: 'heading',
                fontSize: '1.4rem',
                resize: 'none',
                '&:focus, &:active': {
                    outline: '0',
                    boxShadow: 'none'
                }
            },
            'textarea': {
                height: '100px'
            }
        },
        "#formSection0": {
            width: '80%',
            paddingLeft: '0',
            justifyContent: ['center', 'center', 'center', 'flex-start', 'flex-start', 'flex-start'],
            alignItems: ['flex-start', 'flex-start', 'flex-start', 'center', 'center', 'center'],
            flexDirection: ['column', 'column', 'column', 'row', 'row', 'row'],
            '.infoLogo': {
                flex: [0, 0, 0, 1, 1, 1],
                marginBottom: [5, 5, 5, 0, 0, 0],
                'img': {
                    width: ['100%', '100%', '100%', '80%', '80%', '80%'],
                }
            },
            '.infoText': {
                flex: [0, 0, 0, 1, 1, 1],
                h1: {
                    marginTop: 0
                }
            },
        },
        '.sideNav': {
            position: 'fixed',
            left: 0,
            top: '60px',
            bottom: 0,
            zIndex: 5,
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'space-around',
            '&.sideNavShow': {
                display: 'flex'
            },
            'ul': {
                display: 'flex',
                height: '90%',
                maxHeight: '500px',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            },
            'ul,li': {
                listStyleType: 'none',
                margin: '0',
                padding: '0',
            },
            'li': {
                display: 'block',
                margin: '0 0 0 16px',
                '&:last-child': {
                    marginBottom: 0
                },
                'a': {
                    textIndent: '-9999px',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '16px',
                    height: '16px',
                    cursor: 'pointer',
                    '&:after': {
                        content: "''",
                        display: 'block',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'heading',
                        transition: 'all .5s ease',
                    },
                },
            },

            'li.active': {
                'a': {
                    '&:after': {
                        width: '14px',
                        height: '14px',
                        backgroundColor: 'primary',
                    },
                },
            },
        }

    },
};

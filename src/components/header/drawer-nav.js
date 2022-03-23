/** @jsxRuntime classic */
/** @jsx jsx */
import {IoIosClose, IoMdMenu} from 'react-icons/io';
import React, {useContext} from 'react';
import {jsx, Box, Image} from 'theme-ui';
import {Link} from 'react-scroll';
import {DrawerContext} from 'contexts/drawer/drawer-context';
import Drawer from 'components/drawer';
import Logo from 'components/logo';
import menuItems from './header.data';
import close from 'assets/images/icons/close.svg';
import ToggleMode from "../togglemode";
import {NavLink} from 'components/link';

const DrawerNav = () => {
    const {state, dispatch} = useContext(DrawerContext);

    // Toggle drawer
    const toggleHandler = React.useCallback(() => {
        dispatch({
            type: 'TOGGLE',
        });
    }, [dispatch]);

    return (
        <Drawer
            width="320px"
            placement="right"
            drawerHandler={
                <Box sx={styles.handler}>
                    <IoMdMenu size="26px"/>
                </Box>
            }
            open={state?.isOpen}
            toggleHandler={toggleHandler}
            closeButton={
                <button sx={styles.closeButton}>
                    <IoIosClose size="36px"/>
                </button>
            }
            maskStyle={styles.mask}
            drawerStyle={styles.drawer}
            closeBtnStyle={styles.close}
        >
            <Box sx={styles.wrapper}>
                <Logo sx={styles.logo}/>
                <Box as="ul" sx={styles.navbar}>
                    {menuItems.map(({path, label}, i) => (
                        <Box as="li" key={i}>
                            <NavLink path={path} label={label} onClick={toggleHandler}/>
                        </Box>
                    ))}
                    <li style={{textAlign: "center"}}>
                        <div style={{margin: "auto", display: "inline-block"}}>
                            <ToggleMode/>
                        </div>
                    </li>
                </Box>

            </Box>
        </Drawer>
    );
};
export default DrawerNav;

const styles = {
    handler: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: '0',
        width: '26px',
        cursor: 'pointer',
        '@media screen and (min-width: 1025px)': {
            display: 'none',
        },
    },

    drawer: {
        backgroundColor: 'background',
        width: '100%',
        height: '100%',
        outline: 0,
    },
    mask: {
        opacity: 0.2,
    },
    close: {
        position: 'absolute',
        top: 20,
        right: 12,
        zIndex: '1',
    },
    closeButton: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 0,
        cursor: 'pointer',
        display: 'flex',
        p: 0,
        color: "text",
    },
    wrapper: {
        height: '100%',
        paddingTop: 20,
        width: '100%',
    },
    logo: {
        ml: 30,
        mb: 45,
    },
    navbar: {
        listStyle: 'none',
        m: 0,
        p: 0,
        'li > a': {
            '.textDecoration': {
                textDecoration: 'line-through !important'
            },
            backgroundColor: 'transparent',
            color: 'heading',
            display: 'flex',
            alignItems: 'center',
            minHeight: 44,
            paddingLeft: 30,
            position: 'relative',
            //transition: 'all 0.3s ease-in-out 0s',
            '::before': {
                backgroundColor: 'transparent',
                content: `''`,
                position: 'absolute',
                height: '100%',
                left: 0,
                top: 0,
                width: 2,
                //transition: 'all 0.3s ease-in-out 0s',
            },
        },
        '.active': {
            backgroundColor: 'backgroundSecondary',
            '::before': {
                backgroundColor: 'primary',
            },
        },
    },
};

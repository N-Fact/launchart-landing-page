import React from 'react';
import {Box, useColorMode} from 'theme-ui'

const toggleMode = (props) => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <Box sx={styles.toggleBtn} className={colorMode === 'default' ? 'lightmode' : 'darkmode'}
            onClick={(e) => {
                setColorMode(colorMode === 'default' ? 'dark' : 'default')
            }}>
            <div className="toggle">
                <div id="darkModeCl"/>
            </div>
        </Box>
    )
}

export default toggleMode;

const styles = {
    toggleBtn: {
        position: 'relative',
        padding: 0,
        width: '44px',
        height: '24px',
        backgroundColor: '#4477e5',
        border: 0,
        borderRadius: '24px',
        outline: 0,
        overflow: 'hidden',
        cursor: 'pointer',
        zIndex: 1,
        appearance: 'none',
        transition: 'background-color .5s ease',
        '.toggle': {
            position: 'absolute',
            top: 0,
            left: '1px',
            bottom: 0,
            margin: 'auto',
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            boxShadow: '0 0 10px #ffaf01',
            //border: '3px solid transparent',
            //boxShadow: 'inset 0 0 0 2px #ffaf01',
            overflow: 'hidden',
            transition: 'transform .5s ease',
            '#darkModeCl': {
                position: 'relative',
                width: '100%',
                height: '100%',
                //overflow: 'hidden',
                borderRadius: '50%',
                backgroundColor: '#ffaf01',
                transform: 'rotate(335deg)',
                '::after': {
                    content: `''`,
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    left: '50%',
                    backgroundColor: '#ffaf01',
                    //transition: 'border-radius .5s ease, width .5s ease, height .5s ease, left .5s ease, transform .5s ease',
                },
            },
        },
        '&.darkmode': {
            //backgroundColor: 'lighten($mode-toggle-bg, 5%)',
            backgroundColor: '#222',
            '.toggle': {
                transform: 'translateX(19px)',
                //boxShadow: 'inset 0 0 0 2px #505050',
                '#darkModeCl': {
                    '::after': {
                        borderRadius: '50%',
                        width: '100%',
                        height: '100%',
                        left: '40%',
                        //transform: 'translate(-10%, -40%), rotate(-35deg)',
                        backgroundColor: '#222',
                    }
                }
            }
        }
    }
}
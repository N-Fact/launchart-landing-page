import React from 'react';
import {useColorMode} from 'theme-ui'
import logoLight from 'assets/images/logo.svg';
import logoDark from 'assets/images/logodark.svg';

const logoNew = ({width = 160, height = 35, id = "logoMain", ...props}) => {
    const [colorMode] = useColorMode()
    return (
        <img src={colorMode === 'default' ? logoLight : logoDark} width={width} height={height} id={id} alt="LaunchArt Logo"/>
    );
};

export default logoNew;

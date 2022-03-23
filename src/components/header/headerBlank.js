/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Box, Container, Flex, Button} from 'theme-ui';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import ToggleMode from 'components/togglemode';
import {DrawerProvider} from 'contexts/drawer/drawer-provider';

export default function HeaderBlank() {
    return (
        <DrawerProvider>
            <Box sx={styles.headerWrapper}>
                <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
                    <Box as="header" variant="layout.header">
                        <Container>
                            <Box sx={styles.headerInner}>
                                <Logo sx={styles.logo} path="javascript:void(0)"/>
                                <ToggleMode/>
                            </Box>
                        </Container>
                    </Box>
                </Sticky>
            </Box>
        </DrawerProvider>
    );
}

const styles = {
    headerWrapper: {
        header: {
            position: 'fixed',
            left: 0,
            right: 0,
            py: 20,
            transition: 'all 0.3s ease-in-out 0s',
            '&.is-mobile-menu': {
                backgroundColor: 'white',
            },
        },
        '.is-sticky': {
            header: {
                backgroundColor: 'background',
                boxShadow: '0 6px 13px rgb(0 0 0 / 30%)',
                py: 13,
                '.nav-item': {
                    //color: 'dark',
                },
                '.active': {
                    //color: 'primary'
                },
                '.textDecoration': {
                    //textDecoration: 'line-through'
                }
            },
        },
    },
    headerInner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
};

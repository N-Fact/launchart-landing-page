/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Link} from 'components/link';
import LogoNew from 'components/icons/LogoNew';

export default function Logo({isSticky, footer, path = "/", ...props}) {
    return (
        <Link path={path} sx={styles.logo} {...props}>
            <LogoNew/>
        </Link>
    );
}

const styles = {
    logo: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'inline-flex',
        svg: {
            height: 'auto',
            width: [128, null, '100%'],
        },
    },
};

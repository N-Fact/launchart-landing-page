/** @jsxRuntime classic */
/** @jsx jsx */
import NextLink from 'next/link';
import {jsx, Link as A} from 'theme-ui';
import {HiOutlineChevronRight} from 'react-icons/hi';

export function NavLink({path, label, children, onClick = () => {}, ...rest}) {
    return (
        <NextLink
            href={path}
            /*to={path}*/
        >
            <a sx={styles.maninLink}
               href={path}
               className={"nav-item"}
               {...rest}
               onClick={onClick}>{label}</a>
        </NextLink>
    );
}

export function Link({path, label, children, ...rest}) {
    return (
        <NextLink href={path}>
            <A {...rest}>{children ? children : label}</A>
        </NextLink>
    );
}

export function LinkFooter({path, label, children, ...rest}) {
    const linkKey = {
        Upcoming: 'Upcoming'
    }
    const GetUrl = () => {
        return linkKey[label] ? true : false;
    }

    return (
        <NextLink href={path}>
            <A sx={GetUrl() ? styles.footerlink : ''}{...rest} href={path}>{children ? children : label}</A>
        </NextLink>
    );
}

export function LearnMore({path, label, children, ...rest}) {
    return (
        <NextLink href={path}>
            <A sx={styles.learnMore} {...rest}>
                {label ?? 'Learn More'} <HiOutlineChevronRight/>
            </A>
        </NextLink>
    );
}

const styles = {
    maninLink: {
        textDecoration: 'none'
    },
    footerlink: {
        textDecoration: 'line-through'
    },
    learnMore: {
        color: 'textWhite',
        cursor: 'pointer',
        fontWeight: 500,
        display: 'inline-flex',
        alignItems: 'center',
        svg: {
            transition: 'margin-left 0.3s ease-in-out 0s',
            ml: '3px',
        },
        ':hover': {
            svg: {
                ml: '5px',
            },
        },
    },
};

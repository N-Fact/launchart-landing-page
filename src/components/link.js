/** @jsxRuntime classic */
/** @jsx jsx */
import NextLink from 'next/link';
import { jsx, Link as A } from 'theme-ui';
import { Link as MenuLink } from 'react-scroll';
import { HiOutlineChevronRight } from 'react-icons/hi';

export function NavLink({ path, label, children, ...rest }) {
  const linkKey = {
     Upcoming:'Upcoming'
  }

  const GetUrl = ()=> {
    return linkKey[label] ? true : false;
  }
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className={GetUrl() ? "nav-item textDecoration" : "nav-item"}
      activeClass={"active"}  
      {...rest}
    >
      {label}
    </MenuLink>
  );
}

export function Link({  path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}
export function LinkFooter({  path, label, children, ...rest }) {
  const linkKey = {
    Upcoming:'Upcoming'
 }
 const GetUrl = ()=> {
   return linkKey[label] ? true : false;
 }

  return (
    <NextLink href={path}>
      <A  sx={GetUrl() ? styles.footerlink :'' }{...rest} href={path} >{children ? children : label}</A>
    </NextLink>
  );
}
export function LearnMore({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A sx={styles.learnMore} {...rest}>
        {label ?? 'Learn More'} <HiOutlineChevronRight />
      </A>
    </NextLink>
  );
}

const styles = {
  footerlink : {
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

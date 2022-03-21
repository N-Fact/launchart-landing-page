/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Image } from 'theme-ui';
import { LinkFooter } from 'components/link';
import { rgba } from 'polished';

const FooterWidget = ({ title, items }) => {

  return (
    <Box sx={styles.footerWidget}>
      <ul>
        {items.map(({ path, label, icon }, i) => (
          <li key={i}>
            {icon && <Image src={icon} alt={label} />}
            <LinkFooter path={path} key={i} label={label} variant="footer" />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default FooterWidget;

const styles = {
  footerWidget: {
    h4: {
      color: 'heading',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
    ul: {
      listStyle: 'none',
      margin: '0',
      padding: 0,
      li: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        img: {
          mr: '15px',
        },
      },
      a: {
        color: 'text',
      },
    },
  },
};

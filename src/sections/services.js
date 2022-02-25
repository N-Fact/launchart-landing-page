/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import individual from 'assets/images/icons/repots.svg';
import team from 'assets/images/icons/Marketing.svg';
import org from 'assets/images/icons/help.svg';
import community from 'assets/images/icons/community.svg';

const data = [
  {
    id: 1,
    icon: individual,
    title: 'All included Launchpad ',
    description: `You don’t need to worry about your contract, we will handle all the little details.`,
  },
  {
    id: 2,
    icon: team,
    title: 'Marketing',
    description: `You can get advice from our Marketing experts directly.`,
  },
  {
    id: 3,
    icon: org,
    title: 'Community Management',
    description: `Our team is always ready to help you with your socials and Discord management.`,
  },
  {
    id: 4,
    icon: community,
    title: 'Project Roadmap',
    description: `Think about getting pieces of advice from experienced people in the industry, for the most important part of your Project.Worthless, isn’t it?`,
  },
  {
    id: 5,
    icon: community,
    title: 'Branding',
    description: `Be the one in the many. Direct spotlights on your Project. Create your art and make branding with us.`,
  },
  {
    id: 6,
    icon: community,
    title: 'All in one place',
    description: `All of the above and all the things you can think about in your Project are covered by our support and our team is always ready to help you.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" variant="section.features">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="For Projects"
          description="We know how hard to launch an NFT collection. We did it. Now, we are here with a solution. The first-ever launchpad in Avalanche. Launchart helps you with Launching, Marketing, Community Management, and all your needs in NFT Collection launching."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  heading: {
    marginBottom: [40],
    paddingTop:[20,10],
    maxWidth: ['none', null, null, 565, null, 'none'],
    h2: {
      color: 'heading',
      fontSize: ['28px', '32px', '32px', '32px', '32px', '32px', '40px'],
    },
    P: {
      fontSize: ['16px', '16px', '16px', '16px', '14px', '16px'],
      maxWidth: [510],
      m: ['5px auto 0'],
      color:'rgba(52, 61, 72, 0.8)',
      fontWeight:'600'
    },
  },
  features: {
    gap: [30, 30, 60, 40, 30, 30],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block', 'block', 'flex', 'flex', 'block', 'flex'],
      textAlign: ['center', 'center', 'center', 'center', 'center', 'center'],
      maxWidth: [290, 260, 'none'],
      m: ['0 auto', '0 auto', 0],
      figure: {
        m: [
          '0 0 15px',
          '0 0 15px',
          '0 30px 0 0',
          '0 30px 0 0',
          '0 0 15px',
          '0 30px 0 0',
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ['15px', '15px', '20px', '15px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};

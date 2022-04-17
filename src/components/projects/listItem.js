/** @jsxRuntime classic */
/** @jsx jsx */
import {Image, jsx} from 'theme-ui';
import React from 'react';
import NextLink from "next/link";

import stampUp from "../../assets/images/icons/stamp-up.svg";
import stampNew from "../../assets/images/icons/stamp-new.svg";
import stampSold from "../../assets/images/icons/stamp-sold.svg";

export default function ListItem({project}) {
    return (
        <div key={project.key} sx={styles.projectCard}>
            <NextLink href={`/projects/${project.key}`}>
                <a className={project.status}>
                    <Image src={`/projects/${project.key}-small.jpg`} alt={project?.title}/>
                </a>
            </NextLink>
        </div>
    );
}

const styles = {
    projectCard: {
        p: '0',
        m: '0',
        userSelect: 'none',
        display: 'inline-block',
        img: {
            borderRadius: ".5rem",
            width: '100%',
            height: 'auto',
            boxShadow: '0px 0px 5px #00000096',
            transition: 'all 0.2s',
        },
        a: {
            transition: 'all 0.2s',
            display: 'block',
            position:'relative',
            '&:hover': {
                transform: 'scale(1.035)',
                img: {
                    boxShadow: '0px 0px 15px #00000096',
                }
            },
            '&.upcoming, &.soldout, &.new': {
                position: 'relative',
                '&:before': {
                    content: "''",
                    position: 'absolute',
                    backgroundPosition: 'center center',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    left: '-25px',
                    top: '-25px',
                    width: '70px',
                    height: '70px',
                    zIndex: 5,
                    transform: 'rotateZ(-20deg)',
                    filter: 'drop-shadow(1px 1px 0px #000000ff)',
                }
            },
            '&.upcoming': {
                '&:before': {
                    backgroundImage: `url(${stampUp})`,
                },
            },
            '&.soldout': {
                '&:before': {
                    backgroundImage: `url(${stampSold})`,
                },
            },
            '&.new': {
                '&:before': {
                    backgroundImage: `url(${stampNew})`,
                },
            },
        },
        '.desc': {
            flex: 1,
            p: ['1rem 0', '1rem 0', '1rem 0', '1rem 0', '0 0 0 3rem', '0 0 0 3rem'],
            'h2,h3,p': {
                display: 'block',
                p: '0',
                m: '5px 0',
            },
            'h2,h3': {
                m: '10px 0',
            },
            '.description': {
                p: "1rem 0 0 0"
            }
        },
    },
};
/** @jsxRuntime classic */
/** @jsx jsx */
import {Image, jsx} from 'theme-ui';
import React from 'react';
import NextLink from "next/link";

export default function ListItem({project}) {
    return (
        <div key={project.key} sx={styles.projectCard}>
            <NextLink href={`/projects/${project.key}`}>
                <a>
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
            '&:hover': {
                transform: 'scale(1.035)',
                img: {
                    boxShadow: '0px 0px 15px #00000096',
                }
            }
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
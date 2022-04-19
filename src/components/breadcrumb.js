/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';

export default function Breadcrumb({children}) {
    return (
        <nav sx={styles.breadCrumb}>
            <ul>
                <li><a href="/">Home</a></li>
                {children}
                {/*
                <li><a href="#">Pictures</a></li>
                <li><a href="#">Summer 15</a></li>
                <li>Italy</li>
                */}
            </ul>
        </nav>
    );
}

const styles = {
    breadCrumb: {
        'ul': {
            p: 0,
            m: 0,
            listStyle: 'none',
            'li': {
                display: 'inline',
                fontSize: '18px',
                '&+li:before': {
                    padding: '8px',
                    content: '"\\00B7"',
                    color: 'link',
                },
                'a': {
                    color: 'link',
                    textDecoration: 'none',
                    '&:hover': {
                        color: 'linkHover',
                        textDecoration: 'underline',
                    }
                },
            },
        },
    },
};
import React from 'react';
import Head from 'next/head';

export default function SEO({
                                description = 'All Projects in Launchart have to Doxx and KYC themselves. We will not launch unknown projects.',
                                author = 'LaunchArt',
                                meta,
                                title = 'LaunchArt | Your Launchpad In Avalanche',
                            }) {
    const metaData = [
        {
            name: `description`,
            content: description,
        },
        {
            property: `og:title`,
            content: title,
        },
        {
            property: `og:description`,
            content: description,
        },
        {
            property: `og:type`,
            content: `website`,
        },
        {
            name: `twitter:card`,
            content: `summary`,
        },
        {
            name: `twitter:creator`,
            content: author,
        },
        {
            name: `twitter:title`,
            content: title,
        },
        {
            name: `twitter:description`,
            content: description,
        },
    ].concat(meta);
    return (
        <Head>
            <title>{title}</title>
            <link rel="stylesheet" href="https://use.typekit.net/ueq5juf.css"/>
            {metaData.map(({name, content}, i) => (
                <meta key={i} name={name} content={content}/>
            ))}
        </Head>
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

import facebook from 'assets/images/icons/facebook.png';
import twitter from 'assets/images/icons/twitter.png';
import github from 'assets/images/icons/github.png';
import discord from 'assets/images/icons/discord.png';

export const menuItems = [
    {
        id: 1,
        title: '',
        items: [
            {
                path: '/',
                label: 'Home',
            },
        ],
    },
    {
        id: 2,
        title: '',
        items: [
            {
                path: '#!',
                label: 'Upcoming',
            },
        ],
    },

    {
        id: 3,
        title: '',
        items: [
            {
                path: '#services',
                label: 'Launchpad',
            },
        ],
    },
    {
        id: 4,
        title: '',
        items: [
            {
                path: '#blog',
                label: 'About',
            },
        ],
    },
    {
        id: 5,
        title: '',
        items: [
            {
                path: 'https://twitter.com/launchartio',
                icon: twitter,
                label: 'Twitter',
            },
            {
                path: 'https://discord.gg/MchGEGKa',
                icon: discord,
                label: 'Discord',
            },
        ],
    },
];

export const footerNav = [
    {
        id: 1,
        path: '#!',
        label: 'Home',
    },
    {
        id: 2,
        path: '#!',
        label: 'Advertise',
    },
    {
        id: 3,
        path: '#!',
        label: 'Supports',
    },
    {
        id: 4,
        path: '#!',
        label: 'Marketing',
    },
    {
        id: 5,
        path: '#!',
        label: 'FAQ',
    },
];

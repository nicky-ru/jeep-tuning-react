import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
}

const theme = extendTheme({
    config,
    // fonts: {
    //     body: 'Inter, system-ui, sans-serif',
    //     heading: 'Work Sans, system-ui, sans-serif'
    // },
    colors: {
        discord: '#7289da',
        dark: {
            100: 'rgba(255, 255, 255, 0.08)',
            200: 'rgba(255, 255, 255, 0.16)',
            300: 'rgba(255, 255, 255, 0.24)',
            400: 'rgba(255, 255, 255, 0.32)',
            500: 'rgba(255, 255, 255, 0.8)',
            600: 'rgb(255, 255, 255)'
        },
        light: {
            100: 'rgba(26, 32, 44, 0.08)',
            200: 'rgba(26, 32, 44, 0.16)',
            300: 'rgba(26, 32, 44, 0.32)',
            400: 'rgba(26, 32, 44, 0.64)',
            500: 'rgba(26, 32, 44, 0.8)'
        },
        tomato: {
            100: 'rgba(255, 99, 71, 0.08)',
            200: 'rgba(255, 99, 71, 0.16)',
            300: 'rgba(255, 99, 71, 0.32)',
            400: 'rgba(255, 99, 71, 0.64)',
            500: 'rgba(255, 99, 71, 0.8)',
        }
    },
    styles: {
        global: {
            'html, #__next': {
                height: '100%'
            },
            '#__next': {
                display: 'flex',
                flexDirection: 'column'
            },
            '.body': {
                overflowY: 'scroll' // Always show scrollbar to avoid flickering
            },
            html: {
                scrollBehavior: 'smooth'
            },
            '#nprogress': {
                pointerEvents: 'none'
            },
            '#nprogress .bar': {
                background: 'green.200',
                position: 'fixed',
                zIndex: '1031',
                top: 0,
                left: 0,
                width: '100%',
                height: '2px'
            }
        }
    }
});

export default theme
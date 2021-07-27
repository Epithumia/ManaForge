module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '840px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1333px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1600px',
            // => @media (min-width: 1536px) { ... }

            'full': '1920px',
            // => @media (min-width: 1920px) { ... }

        },
        extend: {
            fontSize: {
                'xxs': '.7rem'
            },
            colors: {
                night: {
                    100: '#919cae',
                    300: '#4b596e',
                    500: '#25374f',
                    700: '#222c3c',
                    900: '#1b2431'
                },
            },
            dark: theme => theme('colors')
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
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

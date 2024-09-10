tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                Cabin: ['Cabin', 'sans-serif'],
                Oldenburg: ['Oldenburg', 'serif'],
                Pacifico: ['Pacifico', 'cursive'],
            },
            animation: {
                spin_slow: 'spin 6s linear infinite',
            },
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001f',
            },
            boxShadow: {
                black: '4px 4px 0 #000',
                white: '4px 4px 0 #fff',
            },
        },
    },
    darkMode: 'selector',
};

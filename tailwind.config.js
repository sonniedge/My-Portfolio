tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
            'auto': 'repeat(auto-fit, minmax(200px, 1fr))' // to display the items vertically/horizontally when reducing the page size. Added auto to grid (e.g: sm:grid-cols-auto)
        },
    
        // Adding the 2 embed fonts family from Google Fonts.
        fontFamily:{ 
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "sans-serif"]
        },
            
        // Adding animation to circular text on the section 'About Me'
        animation:{
            spin_slow: 'spin 6s linear infinite'
        },

        // Adding the values of color
        colors:{
            lightHover: '#fcf4ff', // CRT F on index.html to change text to lightHover
            darkHover: '#2a004a',
            darkTheme: '#11001F' // Dark mode configuration
        },

        // [4px_4px_0_#000] is replace with 'hover:shadow-black' or 'white on index.html
        boxShadow:{
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
        }
    }
},
    darkMode: 'selector' // Enabling dark mode configuration
}
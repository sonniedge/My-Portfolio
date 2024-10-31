const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav"); // selecting the navBar elements from index.html
const navLinks = document.querySelector("nav ul"); // selecting the navLinks elements from index.html

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

// Adding the scroll effect to navBar - Light background color behind the navigation bar when scrolling the web page using the javascript.
// added these classes when scrolling the web page but when we scroll the web page to the top then we have to remove these classes
window.addEventListener('scroll', ()=>{ // Apply the function
    if(scrollY > 50){  // To apply the different classes from the Navbar to add light background
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/70', 'dark:bg-transparent'); 
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/70', 'dark:bg-transparent');
    }
})


// LIGHT MODE AND DARK MODE CONFIGURATION -  //

// On page load or when changing themes, best to add inline in `head` to avoid FOUC // Taken from tailwind webpage>docs>spaghetti.js section
document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

// if(localStorage.them === 'dark' || (!('theme' in localStorage) && window.matchMedia('prefers-color-scheme:dark').matches)) {
//     document.documentElement.classList.add('dark')
//     }else{
//     document.documentElement.classList.remove('dark')
//     }

// JavaScript for theme toggle
function toggleTheme(){
    // Toggle the 'dark' class on the HTML element
    document.documentElement.classList.toggle('dark');

    // Persist the theme preference in local storage
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
}




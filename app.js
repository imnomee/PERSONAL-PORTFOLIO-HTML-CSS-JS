const sideMenu = document.getElementById('sideMenu');
function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

const navBar = document.querySelector('nav');
const linksList = document.querySelector('nav ul');
window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add(
            'bg-white',
            'bg-opacity-50',
            'backdrop-blur-lg',
            'shadow-md',
            'duration-500'
        );
        linksList.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    } else {
        navBar.classList.remove(
            'bg-white',
            'bg-opacity-50',
            'backdrop-blur-lg',
            'shadow-md',
            'duration-500'
        );
        linksList.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
});

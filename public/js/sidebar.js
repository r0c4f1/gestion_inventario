const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const toggleBtn = document.getElementById('toggle-sidebar');
const toggleIcon = document.getElementById('toggle-icon');
const sidebarTexts = document.querySelectorAll('.sidebar-text');
const sidebarLogo = document.getElementById('sidebar-logo');
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');


if (localStorage.getItem('sidebar_state') === 'closed') {
    sidebar.classList.remove('w-64');
    sidebar.classList.add('w-20');
    if (mainContent) {
        mainContent.classList.remove('pl-64');
        mainContent.classList.add('pl-20');
    }
    toggleIcon.classList.add('rotate-180');
    sidebarTexts.forEach(text => {
        text.classList.add('opacity-0', 'hidden');
    });
    sidebarLogo.classList.add('opacity-0');
}

if (localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
} else {
    document.documentElement.classList.remove('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
}


function theme() {
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}


themeToggle.addEventListener('click', () => {
    // Alternar clase dark en el HTML
    document.documentElement.classList.toggle('dark');

    // Alternar iconos
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');

    // Guardar preferencia
    theme();
});


toggleBtn.addEventListener('click', () => {
    const isClosing = sidebar.classList.contains('w-64');

    sidebar.classList.toggle('w-64');
    sidebar.classList.toggle('w-20');

    if (mainContent) {
        mainContent.classList.toggle('pl-64');
        mainContent.classList.toggle('pl-20');
    }

    toggleIcon.classList.toggle('rotate-180');

    sidebarTexts.forEach(text => {
        if (isClosing) {
            text.classList.add('opacity-0');
            setTimeout(() => text.classList.add('hidden'), 100);
        } else {
            text.classList.remove('hidden');
            setTimeout(() => text.classList.remove('opacity-0'), 10);
        }
    });

    if (isClosing) {
        sidebarLogo.classList.add('opacity-0');
        localStorage.setItem('sidebar_state', 'closed');
    } else {
        sidebarLogo.classList.remove('opacity-0');
        localStorage.setItem('sidebar_state', 'open');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    let activeLink = document.querySelector('.active');
    if (activeLink) {
        activeLink.classList.remove('bg-emerald-500/10', 'text-emerald-400');
    }
    const currentPath = window.location.pathname;
    activeLink = document.querySelector(`a[href="${currentPath}"]`);
    if (activeLink) {
        activeLink.classList.add('bg-emerald-500/10', 'text-emerald-400');
    }

})
// Lógica para mostrar/ocultar el menú del usuario
const userMenuBtn = document.getElementById('user-menu-button');
const userMenu = document.getElementById('user-menu');

userMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    userMenu.classList.toggle('hidden');
});

// Cerrar menú si se hace clic fuera
window.addEventListener('click', () => {
    if (!userMenu.classList.contains('hidden')) {
        userMenu.classList.add('hidden');
    }
});

// Poner la fecha de hoy con formato profesional
const dateElement = document.getElementById('current-date');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();
dateElement.textContent = today.toLocaleDateString('es-ES', options);
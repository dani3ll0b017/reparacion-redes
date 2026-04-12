document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('#menu ul');

    if(menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    }

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(evento) {
            evento.preventDefault(); // Evita el envío por defecto para validar
            
            const emailInput = document.getElementById('email').value;
            const messageInput = document.getElementById('mensaje').value;

            
            if (emailInput.trim() === '' || messageInput.trim() === '') {
                alert('Por favor, completa los campos requeridos (Correo y Mensaje).');
                return;
            }

            if (!emailInput.includes('@')) {
                alert('Por favor ingresa un correo electrónico válido.');
                return;
            }

            alert('¡Gracias! Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.');
            contactForm.reset();
        });
    }


    
















    
});
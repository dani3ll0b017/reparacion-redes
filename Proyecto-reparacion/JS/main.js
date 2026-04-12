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

document.addEventListener("DOMContentLoaded", ()=>{
    let miCarusel = new Carousel("caruselPrincipal");
    miCarusel.init();
});

class Carousel {
    constructor(carouselId, tickTimeInSeconds = 3){
        this.carouselHolder = document.getElementById(carouselId);
        this.track = this.carouselHolder.querySelector(".track");
        this.slides = [...this.track.querySelectorAll(".slide")];
        this.minLimit = 0;
        this.maxLimit = this.slides.length - 1;
        this.currentIndex = 0;
        this.tickTime = tickTimeInSeconds * 1000;
        this.tickerId = null;
        this.direction = 1;
    }
    init() {
        // Generar Botones
        this.generateNavigationUI();
        this.tick();
    }
    tick(){
        this.tickerId = setTimeout(
            ()=>{
                this.moveNext();
                this.tick();
            },
            this.tickTime
        );
    }
    moveNext(){
        let tmpNewIndex = this.currentIndex + this.direction;
        if (tmpNewIndex > this.maxLimit) {
            tmpNewIndex = this.maxLimit - 1;
            this.direction = -1;
        }
        if (tmpNewIndex < this.minLimit) {
            tmpNewIndex = this.minLimit + 1;
            this.direction = 1;
        }
        this.moveTo(tmpNewIndex);
    }

    moveTo(newIndex) {
        this.currentIndex = newIndex;
        this.track.style.left = `${-100 * this.currentIndex}vw`;
    }

  generateNavigationUI() {
    let btnLeft = document.createElement("BUTTON");
    let btnRight = document.createElement("BUTTON");

    btnLeft.classList.add("carousel-btn");
    btnLeft.classList.add("btnleft");
    btnRight.classList.add("carousel-btn");
    btnRight.classList.add("btnright");

    btnLeft.textContent = "<";
    btnRight.textContent = ">";

    btnLeft.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        clearTimeout(this.tickerId);
        this.direction = -1;
        this.moveNext();
        this.tick();
    });

    btnRight.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        clearTimeout(this.tickerId);
        this.direction = 1;
        this.moveNext();
        this.tick();
    });

    this.carouselHolder.appendChild(btnLeft);
    this.carouselHolder.appendChild(btnRight);
}


}
















});
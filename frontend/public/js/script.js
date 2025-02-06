document.addEventListener('DOMContentLoaded', () => {
    // Selección de las secciones
    const secciones = [
        { selector: '#presentation', elementos: ['.titulo', '.content-text'] },
        { selector: '#conteiner', elementos: ['.sub-titulo', '.text'] },
        // Agrega más secciones si es necesario
    ];

    // Función para aplicar el IntersectionObserver
    const applyObserver = (selector, elementos) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden', 'hide');
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                    entry.target.classList.add('hide');
                }
            });
        }, { threshold: 0.5 });

        // Aplicar el observador a los elementos seleccionados
        elementos.forEach(element => {
            const el = document.querySelectorAll(element);
            el.forEach(item => observer.observe(item));
        });
    };

    // Llamar la función para todas las secciones
    secciones.forEach(seccion => {
        applyObserver(seccion.selector, seccion.elementos);
    });
});

const carousel = document.getElementById('carousel');
let isHovered = false;

carousel.addEventListener('mouseover', () => {
  isHovered = true;
  carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseleave', () => {
  isHovered = false;
  carousel.style.animationPlayState = 'running';
});

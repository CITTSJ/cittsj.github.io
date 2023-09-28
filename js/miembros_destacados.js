const miembros = [
    {
        nombre: 'Miembro 1',
        imagen: '/image/citt.png',
        descripcion: 'Descripción del Miembro 1.'
    },
    {
        nombre: 'Miembro 2',
        imagen: 'ruta/a/imagen2.jpg',
        descripcion: 'Descripción del Miembro 2.'
    },
    // Agrega más miembros aquí...
];

$(document).ready(function(){
    const owlCarousel = $('#miembrosCarousel');
    
    miembros.forEach(miembro => {
        const item = `
            <div class="item">
                <img src="${miembro.imagen}" alt="${miembro.nombre}">
                <h3>${miembro.nombre}</h3>
                <p>${miembro.descripcion}</p>
            </div>
        `;
        owlCarousel.append(item);
    });

    owlCarousel.owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
});

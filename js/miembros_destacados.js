const miembros = [
    {
        nombre: 'Fernando Silva',
        imagen: '/image/imagen1.jpg',
        descripcion: 'Alumno CITT.'
    },
    // Agrega más miembros aquí...
];


$(document).ready(function(){
    const owlCarousel = $('#miembrosCarousel');
    
    miembros.forEach(miembro => {
        const item = `
            <div class="item" >
            <div class="col-md-12 text-center bg-body-tertiary" style="border-radius: 10px;" >
                <img src="${miembro.imagen}" class="rounded-circle" alt="${miembro.nombre}" >
                <br>
                <h3>${miembro.nombre}</h3>
                <p>${miembro.descripcion}</p>
                </div>
            </div>
        `;
        owlCarousel.append(item);
    });

    owlCarousel.owlCarousel({
        loop: true,
        margin: 10,
        center:true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:false
            }
        }
    });
});

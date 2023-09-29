// Empresas.js

const empresas = [
  {
    nombre: 'CITT',
    detalles: 'El centro nació con el objetivo de generar espacios y dinámicas',
    imagen: '/image/citt.png'
  },
  // Agrega más empresas aquí...
];

function mostrarEmpresas() {
  const empresasCarousel = $('#empresasCarousel');

  empresas.forEach((empresa, index) => {
    const item = `
      <div class="item ${index === 0 ? 'active' : ''}">
        <div class="col-md-12 text-center bg-body-tertiary" style="border-radius: 10px;">
          <img src="${empresa.imagen}" alt="${empresa.nombre}" class="img-fluid">
          <h3>${empresa.nombre}</h3>
          <p>${empresa.detalles}</p>
        </div>
      </div>
    `;

    empresasCarousel.append(item);
  });

  empresasCarousel.owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  });
}

// Llamar a la función para mostrar empresas al cargar la página
$(document).ready(function () {
  mostrarEmpresas();
});

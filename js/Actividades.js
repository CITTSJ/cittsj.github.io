const actividades = [
    {
        titulo: 'Competecia de  Robotica intersede 2023',
        descripcion: 'Participa de una experiencia tecnológica brillante como es programar a un robot y llevarlo al límite en un torneo de competencias.',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLScsuQLEpo2wd3kUuRser4NHMfo7TiXUy2fJImqAN2v-5YXQNw/viewform?pli=1',
        descripcion_boton:'inscribirse'
    },
    {
        titulo: 'Demo-Day 2023',
        descripcion: 'Cuyo propósito es dar a conocer los distintos proyectos de innovación tecnológica, eventos y actividades desarrolladas durante este año, donde nuestros estudiantes y docentes han sido los protagonistas, siempre en colaboración con actores relevantes de la industria y la sociedad en general.',
        link: 'https://www.duoc.cl/eventos/demo-day-citt-2022/',
        descripcion_boton:'ver más'
    },
    // Agrega más actividades aquí...
];

function mostrarActividades() {
    const actividadesContainer = document.getElementById('actividadesContainer');

    let html = ''; // Variable para almacenar el HTML

    // Itera sobre las actividades y crea el HTML correspondiente
    actividades.forEach((actividad, index) => {
        if (index % 2 === 0) {
            // Abre una nueva fila para cada par de actividades
            html += '<div class="row">';
        }

        html += `
            <div class="col-md-6">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${actividad.titulo}</h5>
                        <p class="card-text">${actividad.descripcion}</p>
                        <a href="${actividad.link}" class="btn btn-primary" target="_blank">${actividad.descripcion_boton}</a>
                    </div>
                </div>
            </div>
        `;

        if (index % 2 !== 0 || index === actividades.length - 1) {
            // Cierra la fila si es la segunda actividad del par o es la última actividad
            html += '</div>';
        }
    });

    // Inserta el HTML en el contenedor
    actividadesContainer.innerHTML = html;
}

window.addEventListener('load', mostrarActividades);

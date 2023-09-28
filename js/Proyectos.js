const proyectos = [
    {
        nombre: 'Duckie Town',
        descripcion: 'Duckie Town es un proyecto de la Universidad de Montreal que busca desarrollar un sistema de conducción autónoma para vehículos de bajo costo...',
        descripcionModal: 'Esta es la descripción detallada para el modal de Duckie Town.',
        video: 'enlace_video_proyecto1',
        imagen: '../image/duckie_bot.jpg',
        imagenModal: '../image/duckie_bot_modal.jpg'
    },
    {
        nombre: 'Chatbot-WWebjs',
        descripcion: 'Es un proyecto realizado en Node.js para realizar un chatbot de WhatsApp...',
        descripcionModal: 'Esta es la descripción detallada para el modal de Chatbot-WWebjs.',
        video: 'enlace_video_proyecto2',
        imagen: '../image/wwebjs_bot.jpg',
        imagenModal: '../image/wwebjs_bot_modal.jpg'
    }
    // Agrega más proyectos aquí...
];

function mostrarProyectos() {
    const proyectosContainer = document.getElementById('proyectosContainer');

    let html = ''; // Variable para almacenar el HTML

    proyectos.forEach((proyecto, index) => {
        if (index % 2 === 0) {
            // Abre una nueva fila para cada par de proyectos
            html += '<div class="row">';
        }

        html += `
            <div class="col-md-6">
                <div class="card mb-3" style="max-width: 640px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${proyecto.imagen}" class="img-fluid rounded-start" alt="${proyecto.nombre}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${proyecto.nombre}</h5>
                                <p class="card-text">${proyecto.descripcion}</p>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${index}">
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Modal -->
            <div class="modal fade" id="modal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${proyecto.nombre}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${proyecto.imagenModal}" class="img-fluid rounded-start" alt="${proyecto.nombre}">
                            <p>${proyecto.descripcionModal}</p>
                            <a href="${proyecto.video}" target="_blank">Ver video</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        if (index % 2 !== 0 || index === proyectos.length - 1) {
            // Cierra la fila si es el segundo proyecto del par o es el último proyecto
            html += '</div>';
        }
    });

    proyectosContainer.innerHTML = html;
}

window.addEventListener('load', mostrarProyectos);

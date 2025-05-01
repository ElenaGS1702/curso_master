let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

function leerDatos(data, callback) {
    console.log("Libros de la biblioteca");
    setTimeout(() => {
        callback(data);
    }, 5000);
}

function mostrarLibros(data) {
    for (let libro of data.libros){
        console.log(`${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'En Prestamo'})`);
    }
}

function agregarLibro(titulo, autor, genero) {
    console.log('Agregando libro');
    const libro = {
        titulo,
        autor,
        genero,
        disponible: true
    }

    setTimeout(() => {
        biblioteca.libros.push(libro);
    }, 3000);
}

function actualizaDisponibilidad(titulo, estado) {
    console.log('Actualizando estado');
    setTimeout(() => {
        biblioteca.libros.forEach(libro => {
            if(libro.titulo === titulo){
                libro.disponible = estado;
            }
        });
    }, 3000);
}

leerDatos(biblioteca, mostrarLibros);
agregarLibro('Mi Planta de Naranja Lima', 'Jose Mauro de Vasconcelos', 'Novela de Autobiografia');
actualizaDisponibilidad('Mi Planta de Naranja Lima', false);
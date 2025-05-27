const planetas = require('./planetas');

planetas.forEach(planeta => {
    console.log(`¡Planeta ${planeta.nombre} descubierto!`);
    console.log(`Descripción: ${planeta.descripcion}`);
    console.log(`Descubierto en: ${planeta.descubiertoEn}`);
    console.log(`Tipo: ${planeta.tipo}`);
    console.log(`Masa: ${planeta.masa}`);
    console.log(`Habitabilidad: ${planeta.habitabilidad}`);
    console.log(`Distancia a la Tierra: ${planeta.distanciaALaTierra}`);
    console.log('---');
});
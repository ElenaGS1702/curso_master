const planetas = [
    {
        "nombre": "Kepler-186f",
        "descripcion": "Primer exoplaneta de tamaño terrestre en zona habitable.",
        "descubiertoEn": "2014",
        "tipo": "Rocoso",
        "masa": "1.4 masas terrestres",
        "distanciaALaTierra": "492 años luz",
        "sistemaEstelar": "Kepler-186",
        "habitabilidad": "Potencialmente habitable"
    },
    {
        "nombre": "TRAPPIST-1d",
        "descripcion": "Uno de los siete exoplanetas en el sistema TRAPPIST-1.",
        "descubiertoEn": "2017",
        "tipo": "Rocoso",
        "masa": "0.41 masas terrestres",
        "distanciaALaTierra": "40 años luz",
        "sistemaEstelar": "TRAPPIST-1",
        "habitabilidad": "Zona habitable"
    },
    {
        "nombre": "Gliese 581g",
        "descripcion": "Planeta controvertido en zona habitable de una enana roja.",
        "descubiertoEn": "2010",
        "tipo": "Súper Tierra",
        "masa": "3.1 masas terrestres",
        "distanciaALaTierra": "20.5 años luz",
        "sistemaEstelar": "Gliese 581",
        "habitabilidad": "Debatida"
    },
    {
        "nombre": "Kepler-22b",
        "descripcion": "Primer planeta confirmado en la zona habitable por Kepler.",
        "descubiertoEn": "2011",
        "tipo": "Sub-Neptuno",
        "masa": "36 masas terrestres (estimada)",
        "distanciaALaTierra": "600 años luz",
        "sistemaEstelar": "Kepler-22",
        "habitabilidad": "Potencialmente habitable"
    },
    {
        "nombre": "HD 40307g",
        "descripcion": "Exoplaneta en zona habitable con posible clima estable.",
        "descubiertoEn": "2012",
        "tipo": "Súper Tierra",
        "masa": "7.1 masas terrestres",
        "distanciaALaTierra": "42 años luz",
        "sistemaEstelar": "HD 40307",
        "habitabilidad": "Potencialmente habitable"
    },
    {
        "nombre": "LHS 1140b",
        "descripcion": "Uno de los mejores candidatos para estudiar atmósferas.",
        "descubiertoEn": "2017",
        "tipo": "Súper Tierra",
        "masa": "6.6 masas terrestres",
        "distanciaALaTierra": "40 años luz",
        "sistemaEstelar": "LHS 1140",
        "habitabilidad": "Zona habitable"
    },
    {
        "nombre": "Ross 128 b",
        "descripcion": "Exoplaneta templado alrededor de una estrella tranquila.",
        "descubiertoEn": "2017",
        "tipo": "Rocoso",
        "masa": "1.35 masas terrestres",
        "distanciaALaTierra": "11 años luz",
        "sistemaEstelar": "Ross 128",
        "habitabilidad": "Potencialmente habitable"
    },
    {
        "nombre": "Teegarden b",
        "descripcion": "Planeta similar a la Tierra en una estrella cercana.",
        "descubiertoEn": "2019",
        "tipo": "Rocoso",
        "masa": "1.05 masas terrestres",
        "distanciaALaTierra": "12.5 años luz",
        "sistemaEstelar": "Teegarden",
        "habitabilidad": "Alta posibilidad"
    },
    {
        "nombre": "Kepler-452b",
        "descripcion": "Conocido como el 'primo mayor' de la Tierra.",
        "descubiertoEn": "2015",
        "tipo": "Súper Tierra",
        "masa": "5 masas terrestres (estimada)",
        "distanciaALaTierra": "1,400 años luz",
        "sistemaEstelar": "Kepler-452",
        "habitabilidad": "Zona habitable"
    },
    {
        "nombre": "Wolf 1061c",
        "descripcion": "Exoplaneta templado en un sistema cercano.",
        "descubiertoEn": "2015",
        "tipo": "Súper Tierra",
        "masa": "4.3 masas terrestres",
        "distanciaALaTierra": "13.8 años luz",
        "sistemaEstelar": "Wolf 1061",
        "habitabilidad": "Debatida"
    },
    {
        "nombre": "K2-18b",
        "descripcion": "Exoplaneta con agua en su atmósfera.",
        "descubiertoEn": "2015",
        "tipo": "Mini-Neptuno",
        "masa": "8.6 masas terrestres",
        "distanciaALaTierra": "124 años luz",
        "sistemaEstelar": "K2-18",
        "habitabilidad": "Posible"
    },
    {
        "nombre": "GJ 667 Cc",
        "descripcion": "En zona habitable de una estrella triple.",
        "descubiertoEn": "2012",
        "tipo": "Súper Tierra",
        "masa": "3.8 masas terrestres",
        "distanciaALaTierra": "22 años luz",
        "sistemaEstelar": "GJ 667 C",
        "habitabilidad": "Prometedora"
    },
    {
        "nombre": "Kepler-438b",
        "descripcion": "Uno de los planetas más similares a la Tierra.",
        "descubiertoEn": "2015",
        "tipo": "Rocoso",
        "masa": "1.2 masas terrestres",
        "distanciaALaTierra": "470 años luz",
        "sistemaEstelar": "Kepler-438",
        "habitabilidad": "Alta"
    },
    {
        "nombre": "TOI-700 d",
        "descripcion": "Planeta en zona habitable detectado por TESS.",
        "descubiertoEn": "2020",
        "tipo": "Rocoso",
        "masa": "0.95 masas terrestres",
        "distanciaALaTierra": "101 años luz",
        "sistemaEstelar": "TOI-700",
        "habitabilidad": "Alta posibilidad"
    },
    {
        "nombre": "Kapteyn b",
        "descripcion": "Posiblemente uno de los planetas habitables más antiguos.",
        "descubiertoEn": "2014",
        "tipo": "Súper Tierra",
        "masa": "4.8 masas terrestres",
        "distanciaALaTierra": "13 años luz",
        "sistemaEstelar": "Kapteyn",
        "habitabilidad": "Debatida"
    },
    {
        "nombre": "Kepler-62f",
        "descripcion": "Uno de los exoplanetas más prometedores para la vida.",
        "descubiertoEn": "2013",
        "tipo": "Súper Tierra",
        "masa": "2.8 masas terrestres (estimada)",
        "distanciaALaTierra": "1,200 años luz",
        "sistemaEstelar": "Kepler-62",
        "habitabilidad": "Potencialmente habitable"
    },
    {
        "nombre": "Kepler-442b",
        "descripcion": "Otro buen candidato rocoso en zona habitable.",
        "descubiertoEn": "2015",
        "tipo": "Rocoso",
        "masa": "2.3 masas terrestres",
        "distanciaALaTierra": "1,200 años luz",
        "sistemaEstelar": "Kepler-442",
        "habitabilidad": "Muy alta"
    },
    {
        "nombre": "Kepler-1652b",
        "descripcion": "Rocoso y en la zona habitable de su estrella.",
        "descubiertoEn": "2016",
        "tipo": "Súper Tierra",
        "masa": "2.7 masas terrestres",
        "distanciaALaTierra": "822 años luz",
        "sistemaEstelar": "Kepler-1652",
        "habitabilidad": "Alta"
    },
    {
        "nombre": "GJ 273b",
        "descripcion": "Candidato cercano para futuras misiones interestelares.",
        "descubiertoEn": "2017",
        "tipo": "Súper Tierra",
        "masa": "2.9 masas terrestres",
        "distanciaALaTierra": "12.2 años luz",
        "sistemaEstelar": "GJ 273",
        "habitabilidad": "Zona habitable"
    },
    {
        "nombre": "YZ Ceti b",
        "descripcion": "Planeta cercano con emisiones de radio detectadas.",
        "descubiertoEn": "2017",
        "tipo": "Rocoso",
        "masa": "0.75 masas terrestres",
        "distanciaALaTierra": "12 años luz",
        "sistemaEstelar": "YZ Ceti",
        "habitabilidad": "Desconocida"
    }
];

module.exports = planetas;
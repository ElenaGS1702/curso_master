import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';

const ExploradorEspacial = () => {
    const [distancia, setDistancia] = useState(0);
    const [combustible, setCombustible] = useState(100);
    const [estadoNave, setEstadoNave] = useState("En orbita");
    const [planetasVisitados, setPlanetasVisitados] = useState([]);

    useEffect(() => {
        console.log("¡El panel de control está listo!");

        const intervalo = setInterval(() => {
            setCombustible(combustible - 1);
            setDistancia(distancia + 1);
        }, 1000);

        return () => {
            clearInterval(intervalo);
            console.log("El panel de control se ha apagado.");
        }
    }, []);

    useEffect(() => {
        console.log("¡Combustible actualizado!");
    }, [combustible]);

    const mensajeEstado = useMemo(() => {
        return `Estado: ${estadoNave}`
    }, [estadoNave]);

    const aterrizarNave = () => {
        setEstadoNave("Aterrizando");
        setPlanetasVisitados([...planetasVisitados, 'Tierra']);
    }

    return (
        <div>
            <h1>Explorador Espacial</h1>
            <h4>Distacia: {distancia} km</h4>
            <h4>Combustible: {combustible}%</h4>
            <h4>{mensajeEstado}</h4>
            {estadoNave !== 'Aterrizando' &&
                <button onClick={aterrizarNave}>Aterrizar</button>
            }
            <br />

            {planetasVisitados.length > 0 &&
                <>
                    <h4>Planetas visitados</h4>
                    {planetasVisitados.map((item, index) => (
                        <Planeta key={index} nombre={item} />
                    ))
                    }
                </>
            }
        </div>
    )
}

export default ExploradorEspacial
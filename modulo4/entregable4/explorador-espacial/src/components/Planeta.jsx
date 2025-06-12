import React, { useEffect } from 'react'

const Planeta = ({nombre}) => {

    useEffect(() => {
        console.log(`¡El planeta ${nombre} ha aparecido!`);

        return () => {
            console.log(`¡El planeta ${nombre} ha desaparecido!`);
        }
    }, []);

    return (
        <div>Planeta: {nombre}</div>
    )
}

export default Planeta
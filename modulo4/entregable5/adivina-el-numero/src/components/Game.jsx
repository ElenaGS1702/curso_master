import { useEffect, useState } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";

const Game = () => {
    const [numAleatorio, setNumAleatorio] = useState(0);
    const [inputNumber, setInputNumber] = useState(0);
    const [message, setMessage] = useState("");
    const [intentos, setIntentos] = useState(5);

    const generateNum = () => {
        const number = Math.floor(Math.random() * 100);
        setNumAleatorio(number);
        setInputNumber(0);
        setMessage("");
        setIntentos(5);
    }

    const verificarNum = () => {
        if(intentos == 0){
            setMessage("Has agotado tus intentos permitidos");
            return;
        }

        setIntentos(intentos - 1);

        if(inputNumber > 100 || inputNumber < 0) {
            setMessage("El numero debe de estar entre 0 y 100");
            return;
        } 

        if(inputNumber > numAleatorio) {
            setMessage("El numero debe de ser menor");
            return;
        }

        if(inputNumber < numAleatorio) {
            setMessage("El numero debe de ser mayor");
            return;
        }

        if(inputNumber == numAleatorio) {
            setMessage("Felicidades, adivinaste el numero");
            return;
        }

        setMessage("");
    }

    useEffect(() => {
        generateNum();
    }, [])

    return(
        <>
            <h1>Adivina el numero</h1>
            <span>Intentos disponibles: {intentos}</span>
            <br />
            <InputNumber inputNumber={inputNumber} setInputNumber={setInputNumber} />
            <Message message={message} />
            <button onClick={verificarNum}>Verificar</button>
            <RestartButton btnRestart={generateNum} />
        </>
    );
}

export default Game;
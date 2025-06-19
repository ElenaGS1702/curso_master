const InputNumber = ({ inputNumber, setInputNumber }) => {

    return(
        <>
            <label htmlFor="number">Ingresa el numero: </label>
            <input type="number" id="number" name="number" value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} />
        </>
    );
}

export default InputNumber;
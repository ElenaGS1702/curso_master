import { useReducer, useRef, useCallback, useEffect, useState } from "react";

const initialState = { count: 0, history: [], inputNumber: 1 };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            const dataInputNumber = parseInt(state.inputNumber);
            const newHistoryIncr = [
                ...state.history, 
                { 
                    text: `+${dataInputNumber} (Nuevo valor: ${state.count + dataInputNumber})`,
                    dataNumber: dataInputNumber,
                    actionType: "increment"
                }
            ];

            const newStateIncrement = {
                ...state,
                count: state.count + dataInputNumber,
                history: newHistoryIncr
            };

            // localStorage.setItem("history", JSON.stringify(newHistoryIncr));
            localStorage.setItem("history", JSON.stringify(newStateIncrement));
            return newStateIncrement;
        case "decrement":
            const dataInputNumber2 = parseInt(state.inputNumber);
            const newHistoryDecr = [
                ...state.history, 
                {
                    text: `-${dataInputNumber2} (Nuevo valor: ${state.count - dataInputNumber2})`,
                    dataNumber: dataInputNumber2,
                    actionType: "decrement"
                }
            ];

            const newStateDecrement = {
                ...state,
                count: state.count - dataInputNumber2,
                history: newHistoryDecr
            };

            // localStorage.setItem("history", JSON.stringify(newHistoryDecr));
            localStorage.setItem("history", JSON.stringify(newStateDecrement));
            return newStateDecrement
        case "reset":
            return initialState;
        case "undo":
            if(state.history.length > 0){
                const newData = [...state.history];
                const data = newData.pop();
                const newStateUndo = {
                    ...state,
                    count: data.actionType === "increment" ? state.count - data.dataNumber : state.count + data.dataNumber,
                    history: newData
                };

                // localStorage.setItem("history", JSON.stringify(newData));
                localStorage.setItem("history", JSON.stringify(newStateUndo));
                return newStateUndo;
            }

            // localStorage.setItem("history", JSON.stringify(state.history));
            localStorage.setItem("history", JSON.stringify(state));
            return state;
        case "change_input_number":
            const newStateInput = {
                ...state,
                inputNumber: action.payload.inputNumber
            }
            return newStateInput
        case "set_history":
            // return {
            //     ...state,
            //     history: action.payload.history
            // };
            return action.payload.history;
        default:
            return state;
    }
}

function CounterGame() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const incrementBtnRef = useRef(null);

    // Fijar el foco en el botón de incremento al renderizar
    useEffect(() => {
        incrementBtnRef.current.focus();
    }, []);

    const handleIncrement = useCallback(() => {
        dispatch({ type: "increment" });
    }, []);

    const handleDecrement = useCallback(() => {
        dispatch({ type: "decrement" });
    }, []);

    const handleUndo = useCallback(() => {
        dispatch({ type: "undo" });
    }, []);

    const handleInputNumber = (e) => {
        dispatch({ type: "change_input_number", payload: { inputNumber: e.target.value } });
    }

    useEffect(() => {
        const history = localStorage.getItem("history");
        console.log("history; ", history);
        if(history){
            const historyObj = JSON.parse(history);
            dispatch({ type: "set_history", payload: {history: historyObj} });
        } else {
            // dispatch({ type: "set_history", payload: {history: []} });
            dispatch({ type: "set_history", payload: {history: initialState} });
        }
    }, []);

    return (
        <div>
            <h2>Contador: {state.count}</h2>
            <input 
                style={{display: "block", marginBottom: "10px"}}
                type="number" 
                name="number" 
                id="number" 
                value={state.inputNumber} 
                onChange={(e) => handleInputNumber(e)} 
            />
            <button style={{margin: "5px"}} ref={incrementBtnRef} onClick={handleIncrement}>+</button>
            <button style={{margin: "5px"}} onClick={handleDecrement}>-</button>
            <button style={{margin: "5px"}} onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button style={{margin: "5px"}} onClick={handleUndo}>Undo</button>

            <h3>Historial de cambios:</h3>
            <ul>
                {state.history.map((entry, index) => (
                    <li key={index}>{entry.text}</li>
                ))}
            </ul>
            {/* <button onClick={() => localStorage.clear()}>delete localstorage</button> */}
        </div>
    );
}

export default CounterGame;
import { useState } from "react";

function ListaCompras() {
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState("");

    const agregarProducto = () => {
        if (nuevoProducto.trim() !== "") {
            setProductos([...productos, nuevoProducto]);
            setNuevoProducto("");
        }
    };

    const eliminarProducto = (index) => {
        const prods = productos.map((prod, i) => {
            if(i !== index){
                return prod;
            }
            return null;
        });

        setProductos(prods.filter(prod => prod !== null));
    };

    const eliminarProductos = () => {
        setProductos([]);
    }

    return (
        <div>
            <h2>Lista de Compras</h2>
            <input
                type="text"
                value={nuevoProducto}
                onChange={(e) => setNuevoProducto(e.target.value)}
            />
            <button onClick={agregarProducto}>Agregar</button>
            <button onClick={eliminarProductos}>Eliminar todo</button>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>
                        {producto}
                        <button onClick={() => eliminarProducto(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaCompras;
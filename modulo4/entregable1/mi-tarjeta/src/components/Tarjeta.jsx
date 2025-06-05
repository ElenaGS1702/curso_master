function Tarjeta() {
    const nombre = "Ana Pérez";
    const profesion = "Desarrolladora Web";
    const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }}>
            <img 
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png" 
                alt="user"
                style={{ width: '150px' }}
            />
            <h2>{nombre}</h2>
            <h4>{profesion}</h4>
            <p>{mensaje}</p>
        </div>
    );
}

export default Tarjeta;
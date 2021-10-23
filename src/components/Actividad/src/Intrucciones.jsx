const Instrucciones = ({actividad}) => {
    return <div>
        <h1 className="ESTO ES CLASS" style={{ color: "red" }}>Esto es un elemento JSX una adaptacion de html</h1>

        <button onClick={()=>{
            actividad.finish();
        }}>Siguiente</button>
    </div>
}

export default Instrucciones;
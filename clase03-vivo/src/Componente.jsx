const Componente = (props) => {
    const { numeros } = props;
    return (<>
        <h1>HOLA desde mi componente</h1>
        <p>
            {numeros.find((item) => item === 2)}
        </p>
        <p>2</p>
        <button onClick={() => alert('holaa desde mi boton')}> HOLAAAAA</button>
    </>)
}

export default Componente
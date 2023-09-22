import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    //creo un estado para controlarme el conteo, cuyo estado inicial es el
    const [count, setCount] = useState(initial);

    //realizo las funciones de decremento e incremento
    // que si mi conteo es menor que mi stock, me permita sumar, si mi conteo es mayor que mi numero inicial me permita restar

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    //agrego al carrito
    const handleAddToCart = () => {
        if (count > 0) {
            onAdd(count);
        }
    };

    return (
        <div>
            <button onClick={handleDecrement} disabled={count <= initial}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement} disabled={count >= stock}>+</button>
            <button onClick={handleAddToCart} disabled={count === 0}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
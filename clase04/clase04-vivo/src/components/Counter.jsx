import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false)

    const handleClickValidate = () => {
        if (count <= 0) {
            setError(true)
            return;
        } else {
            setCount(count - 1);
            setError(false);
        }
    }

    return (<>
        <div>
            <button onClick={() => setCount(count + 1)}>suma</button>
            <span>{count}</span>
            <button onClick={() => handleClickValidate()}>resta</button>
            {error ? <span style={{ color: 'red' }}> NO SE PUEDE BAJAR DEL CERO</span> : <></>}
        </div>
    </>);
}

export default Counter; <>
</>
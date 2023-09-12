import { useState } from "react";

const ButtonCustom = () => {
    const [buttonText, setButtonText] = useState('Haz Click Aquí')
    return (<button onClick={() => setButtonText('Gracias por hacer click')}>{buttonText}</button>);
}

export default ButtonCustom;
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const ComponenteA = () => {
    const value = useContext(MyContext)
    return (<><h1>{value}</h1></>);
}

export default ComponenteA;

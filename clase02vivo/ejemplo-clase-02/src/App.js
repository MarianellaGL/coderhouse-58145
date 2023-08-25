import logo from "./logo.svg";
import "./App.css";

function App() {
  /** spread operator */

  const obj1 = { nombre: "Juan" };
  const obj2 = { apellido: "Abel" };

  const combObj = { ...obj1, ...obj2 };

  /** ejemplo 2 */
  const animales = ["perro", "gato", "liebre"];
  const copiaArray = [...animales];

  /** ejemplo 3 */
  const nuevoAnimal = [...animales, "zorro"];

  /**ejemplo 4 */

  const agregarNuevaPropiedad = { ...combObj, edad: 33 };
  console.log(agregarNuevaPropiedad);

  /**metodos de array */
  /**filter */
  const numbers = [1, 2, 3, 4, 5];
  const filteredNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(filteredNumbers);

  /**map */
  const animalesMap = animales.map((name, index) => (
    <li key={index}>{name}</li>
  ));

  /** find */
  const findAnimal = animales.find((animal) => animal === "liebre");

  /** reduce*/
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  /**destructuring */
  const [first, second, third] = numbers;
  const { nombre, apellido } = combObj;

  return (
    <div className="App">
      {animalesMap}
      <h1>{findAnimal}</h1>
      <h1>{sum}</h1>
      <h1>
        {first}, {second}, {third}
      </h1>
      <h1>
        {nombre}, {apellido}
      </h1>
    </div>
  );
}

export default App;

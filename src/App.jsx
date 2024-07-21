import { useState } from "react";
import "./App.css";

// Actividad hecha en 2024-07-20, del curso Curso de REACT (2021) - JAB (YouTube), por Gabriel Sifontes

// Para practicar el uso del hook useState.



function App() {
  const cambios=[
    {
      nombreMoneda: "Euro",
      cambio:1,
    },{
      nombreMoneda: "Peso argentino",
      cambio:118.6,
    },{
      nombreMoneda: "Peso colombiano",
      cambio:4543.5,
    },{
      nombreMoneda: "Peso mexicano",
      cambio:23.2,
    },{
      nombreMoneda: "Dólar",
      cambio:1.14
    }
  ]

  
  
  const [euro, setEuro] = useState(cambios[0].cambio)

  const [pesoArgentino, setPesoArgentino] = useState(cambios[1].cambio)
  const [pesoColombiano, setPesoColombiano] = useState(cambios[2].cambio)
  const [pesoMexicano, setPesoMexicano] = useState(cambios[3].cambio)
  const [dolar, setDolar] = useState(cambios[4].cambio)




  function convertir(e) {
    let conversionPesoArgentino = e.target.value * cambios[1].cambio // Es mejor (creo que regla) tomar los valores que cambia el usuario directamente del evento y no de los estados.
    conversionPesoArgentino = conversionPesoArgentino.toFixed(2)
    setPesoArgentino(conversionPesoArgentino)

    let conversionPesoColombiano = e.target.value * cambios[2].cambio // Es mejor (creo que regla) tomar los valores que cambia el usuario directamente del evento y no de los estados.
    conversionPesoColombiano = conversionPesoColombiano.toFixed(2)
    setPesoColombiano(conversionPesoColombiano)

    let conversionPesoMexicano = e.target.value * cambios[3].cambio // Es mejor (creo que regla) tomar los valores que cambia el usuario directamente del evento y no de los estados.
    conversionPesoMexicano = conversionPesoMexicano.toFixed(2)
    setPesoMexicano(conversionPesoMexicano)

    let conversionDolar = e.target.value * cambios[4].cambio // Es mejor (creo que regla) tomar los valores que cambia el usuario directamente del evento y no de los estados.
    conversionDolar = conversionDolar.toFixed(2)
    setDolar(conversionDolar)
  }




  return (
    <>
      <h2>Conversor de Monedas</h2>

      <div>
        <label htmlFor="u0">{cambios[0].nombreMoneda}</label>
        <input id="u0" type="number" onChange={convertir} min={0} /> 
      </div>

      <div>
        <label htmlFor="u1">{cambios[1].nombreMoneda}</label>
        <input id="u1" type="text" value={pesoArgentino} readOnly /> 
      </div>

      <div>
        <label htmlFor="u2">{cambios[2].nombreMoneda}</label>
        <input id="u2" type="text" value={pesoColombiano} readOnly /> 
      </div>

      <div>
        <label htmlFor="u2">{cambios[3].nombreMoneda}</label>
        <input id="u2" type="text" value={pesoMexicano} readOnly /> 
      </div>

      <div>
        <label htmlFor="u2">{cambios[4].nombreMoneda}</label>
        <input id="u2" type="text" value={dolar} readOnly /> 
      </div>
    </>
  )
}

export default App;
import Header from "./components/Header"
import  {Formulario}  from "./components/Formulario"

function App() {
 
  return (
    <div className="container mx-auto mt-20">
        {/* TODO Agregar Header*/}
        <Header/>
      <div className="mt-12 md:flex">
          {/* TODO Agregar formulario*/}
          <Formulario/>
          {/*TODO agregar lista de pacientes*/}
      </div>
    </div>
  )
}

export default App

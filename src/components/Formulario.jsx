import { useRef } from 'react';


export const Formulario = () => {

  // Inicializamos nuestra referencia usando el Hook useRef
  const form = useRef(null)

  // sendData va a simular ser solo una función que hace algo con la data
  const sendData = (nombreMascota, nombrePropietario, email, fecha, sintomas) => {
    console.log(nombreMascota)
    console.log(nombrePropietario)
    console.log(email)
    console.log(fecha)
    console.log(sintomas)
  }

    // Nuestro handleSubmit hace toda la magia
    const handleSubmit = () => {
      // Instanciamos a la clase FormData con el nodo de form para acceder
      // a los valores de los input
      const formData = new FormData(form.current);


      // Creamos un objeto que va a guardar los valores
		  // Que a su vez obtenemos mediante el FormData
      const registroPaciente = Object.fromEntries(formData)

      // Aquí es donde simulamos mandar nuestra data
      sendData(
          registroPaciente
      )
      // limpiar campos RETO
    }


return (
  <div className="w-full mx-3 px-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
    {/* formulario */}
    <form
      ref={form}
      className="bg-gray-100 shadow-md rounded-lg w-full md:w-1/2 p-4"
    >
      <div className="mb-7">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre Mascota
            </label>
            <input
              id="nombreMascota"
              type="text"
              placeholder="Nombre de la Mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="nombreMascota"
              required
            />

          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietario
            </label>
            <input
              id="nombrePropietario"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="nombrePropietario"
              required
            />

          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="correo electronico"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="email"
              required
            />

          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">
              Alta
            </label>
            <input
              id="fecha"
              type="date"
              placeholder="fecha"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="fecha"
              required
            />

          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Sintomas
            </label>
            <input
              id="sintomas"
              type="text"
              placeholder="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="sintomas"
              required
            />

        </div>
          <button 
            type="button"
              onClick={handleSubmit} // agregamos la funcion en el input boton usando el evento onClick
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            >
              Agregar Paciente
          </button>
    </form>
  </div>
);
};



export const Formulario = () => {

  // sendData va a simular ser solo una función que hace algo con la data
  const sendData = (nombreMascota, nombrePropietario, email, fecha, sintomas) => {
    console.log(nombreMascota)
    console.log(nombrePropietario)
    console.log(email)
    console.log(fecha)
    console.log(sintomas)
  }

  const handleSubmit = (e) => {
  // Vamos a capturar el evento y vamos a prevenir que siga el comportamiento
    e.preventDefault();
  // Desde el evento que capturamos("e"), podemos acceder a los valores de los
  // inputs con los nombres que definimos ()
    sendData(
    e.target.nombreMascota.value,
    e.target.nombrePropietario.value,
    e.target.email.value,
    e.target.fecha.value,
    e.target.sintomas.value
    );
  }


return (
  <div className="w-full mx-3 px-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
    {/* formulario */}
    <form
      onSubmit={handleSubmit} 
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
            />

        </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={"Agregar Paciente"}
          />
    </form>
  </div>
);
};

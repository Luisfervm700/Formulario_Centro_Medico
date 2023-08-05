function Header() {
  return (
    <div className="font-black text-5xl text-center mx-auto ">
      <h1>
          Seguimiento Pacientes {""} 
          <span className="text-indigo-700">Veterinaria</span>
      </h1>

      <div className="font-black mt-8  text-4xl text-center justify-center items-center flex">

        <div className="font-black  w-1/2 text-3xl ">
          <h2 className="">Seguimiento Pacientes</h2>
          <p className="text-lg mt-5 mb-5 ">
              Añade pacientes y {''}
              <span className="text-indigo-600 font-bold">administralos</span>
          </p>
        </div>
      
        <div className="font-black w-1/2 text-3xl">
          <h2  className="">No Hay Pacientes</h2>
          <p className="text-lg mt-5 mb-5 ">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Header;
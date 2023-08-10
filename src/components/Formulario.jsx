import { useState } from 'react';

export const Formulario = () => {
    
    const [nombreMascota, setNombreMascota] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [pacientes, setPacientes] = useState([]); // Estado para almacenar pacientes agregados

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Crear un objeto con la información del paciente
        const nuevoPaciente = {
            nombreMascota,
            nombrePropietario,
            email,
            fecha,
            sintomas
        };
        
        // Agregar el nuevo paciente al estado de pacientes
        setPacientes([...pacientes, nuevoPaciente]);

        // Limpiar los campos del formulario después de agregar un paciente
        setNombreMascota('');
        setNombrePropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }
    
    return (
        <div className="w-full mx-3 px-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
        
            {/* formulario */}
            <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded-lg w-full md:w-1/2 p-4">
                <div className="mb-7">
                    <label htmlFor="mascota" className="block text-black uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombreMascota}
                        onChange={ (e) => setNombreMascota(e.target.value) }
                        required
                    />
                    <label htmlFor="propietario" className="block text-black uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombrePropietario}
                        onChange={ (e) => setNombrePropietario(e.target.value) }
                        required
                    />
                    <label htmlFor="email" className="block text-black uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                        required
                    />
                    <label htmlFor="fecha" className="block text-black uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="fecha"
                        type="date"
                        placeholder="Fecha"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                        required
                    />
                    <label htmlFor="sintomas" className="block text-black uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        type="text"
                        placeholder="Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                        required
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={  'Agregar Paciente' }
                />
            </form>

            {/* Sección para mostrar los pacientes agregados */}
            <div onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded-lg w-full md:w-3/4 p-6">
                <div>
                    <h3 className="text-gray-700 uppercase font-bold text-xl mb-4">Pacientes Agregados</h3>
                    <ul>
                        {pacientes.map((paciente, index) => (
                            <li key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
                                <p className="text-black font-bold">Nombre Mascota: {paciente.nombreMascota}</p>
                                <p className="text-black font-bold">Nombre Propietario: {paciente.nombrePropietario}</p>
                                <p className="text-black font-bold">Email: {paciente.email}</p>
                                <p className="text-black font-bold">Fecha: {paciente.fecha}</p>
                                <p className="text-black font-bold">Síntomas: {paciente.sintomas}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
  };

const Paciente = ({pacientes, setIsSelected, deleteP}) => {

    const {nombre, apellido, email, date, sintomas, id} = pacientes

    const handleDelete = () => {
        const request = confirm(' Deseas Eliminar este paciente?')
        if (request) {
            deleteP(id);
        }
    }

    return (
        <div className=" md:ml-3 mb-3 bg-white shadow-md px-5 rounded-md pt-2 pb-1">
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Nombre: <span className=" normal-case font-normal"> {nombre} </span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Apellido: <span className=" normal-case font-normal">{apellido}</span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Email: <span className=" normal-case font-normal"> {email} </span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                fecha de cita: <span className=" normal-case font-normal"> {date} </span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Sintomas generales: {''}
                <span className=" normal-case font-normal">
                    {sintomas}
                </span>
            </p>
            <div className=" flex justify-between">
                <button type="button" 
                className=" font-semibold  bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white py-2 px-6 mb-2 uppercase rounded-md " 
                onClick={() => setIsSelected(pacientes)}
                >
                    Editar
                </button>
                <button type="button"
                className=" font-semibold  bg-red-600 hover:bg-red-700 cursor-pointer text-white py-2 px-6 mb-2 uppercase rounded-md" 
                onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente
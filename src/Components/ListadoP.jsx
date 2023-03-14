import Paciente from "./Paciente"

[].length
const ListadoP = ({paciente, isSelected, setIsSelected, deleteP}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll ">
            

            {paciente && paciente.length ? (
                <>
                    <h2 className=" text-center font-black text-3xl"> Listado de Pacientes </h2>
                    <p className=" text-lg font-bold text-center mt-3 pb-4">
                    Administra tus 
                    <span className=" text-indigo-600"> Pacientes y Citas</span>
                    </p>

                    {paciente.map( (pacientes) => (
                        <Paciente pacientes={pacientes} key={pacientes.id} setIsSelected={setIsSelected} deleteP={deleteP}/>
                    ) ) }
                </>)
                : (
                <>
                    <h2 className=" text-center font-black text-3xl"> No hay Pacientes </h2>
                    <p className=" text-lg font-bold text-center mt-3 pb-4">
                    Añade pacientes y 
                    <span className=" text-indigo-600"> Se mostraran aqui</span>
                    </p>
                </>
                )}
            
        </div>
    )
}

export default ListadoP
import { useEffect, useState } from "react"

const Formulario = ({paciente, setPaciente, isSelected, setIsSelected}) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)

    const idGenerate = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    useEffect(() => {
        if (Object.keys(isSelected).length > 0){
            setNombre(isSelected.nombre)
            setApellido(isSelected.apellido)
            setEmail(isSelected.email)
            setDate(isSelected.date)
            setSintomas(isSelected.sintomas)
        }
    
    }, [isSelected])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if([nombre, apellido, email, date, sintomas].includes('')) {
            setError(true)
            return;
        } 

        setError(false)

        //datos del formulario
        const formulario = {nombre, apellido, email, date, sintomas}

        if (isSelected.id) {
            formulario.id = isSelected.id
            const update = paciente.map((x) => x.id === isSelected.id ? formulario : x)
            setPaciente(update);
            setIsSelected({})
        } else {
            formulario.id = idGenerate()
        setPaciente([...paciente, formulario])
        }
        
        //reset
        setNombre(''); setApellido('');setEmail('');setDate(''); setSintomas('');
        
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className=" font-black text-3xl text-center"> Seguimiento de Pacientes </h2>
            <p className="text-center text-lg mt-3 font-bold pb-4"> 
                Añade pacientes y 
                <span className="text-indigo-600"> Administralos</span>
            </p>


            <form action="" onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-md pb-10 pt-4 px-5 mb-5 justify-center">

            {error && ( 
            <div className=" w-full bg-red-600 text-white uppercase font-bold p-3 rounded-md text-center "> 
            Todos los campos son obligatorios 
            </div> )
            }

            <div className=" mb-2">
                <label htmlFor="name" className="block font-bold uppercase text-gray-700 mt-2" >
                    Nombre
                </label>
                <input
                id="name"
                type="text" 
                placeholder="Nombre del Paciente"
                className="w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
            </div>

            <div className=" mb-2">
                <label htmlFor="apellido" className="block font-bold uppercase text-gray-700" >
                    Apellido
                </label>
                <input
                id="apellido"
                type="text" 
                placeholder="Apellido del Paciente"
                className="w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                />
            </div>

            <div className=" mb-2">
                <label htmlFor="email" className="block font-bold uppercase text-gray-700" >
                    Email
                </label>
                <input
                id="email"
                type="email" 
                placeholder="Email de contacto"
                className="w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className=" mb-2">
            <label htmlFor="cita" className="block font-bold uppercase text-gray-700" >
                    fecha de cita
                </label>
                <input
                id="cita"
                type="date" 
                className="w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <div className=" mb-2">
                <label htmlFor="sintomas" className="block font-bold uppercase text-gray-700">
                    Sintomas generales
                </label>
                <textarea 
                    id="sintomas"
                    className="w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
                    placeholder="Descariba los sintomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                />
            </div>

            <input type="submit"
            className=" p-3 bg-indigo-600 w-full rounded-sm text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={isSelected.id ? "Editar Paciente" : "Agregar Paciente"}
            />

            </form>
        </div>
    ) 
}

export default Formulario
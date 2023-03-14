import { useEffect, useState } from "react";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import ListadoP from "./Components/ListadoP"

function App() {

  const [paciente, setPaciente] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [isSelected, setIsSelected] = useState({})

  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(paciente))
  },[paciente])



  const deleteP = (id) => {
    const filtroPacientes = paciente.filter((others) => others.id !== id)
    setPaciente(filtroPacientes)
  }

  return (
    <div >
      <Header />
      <div className="md:flex mt-12  mx-6">
        <Formulario
        paciente={paciente}
        setPaciente={setPaciente}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        />
        <ListadoP 
        paciente={paciente}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        deleteP={deleteP}
        />
      </div>

    </div>
  )
}

export default App

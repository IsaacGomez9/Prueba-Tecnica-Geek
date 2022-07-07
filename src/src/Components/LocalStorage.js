

//----Guardarla la información
export const guardarDatos =(stateAgendarCita)=>{
        localStorage.setItem('Comentarios', JSON.stringify(stateAgendarCita))
        const GuardarNew = JSON.parse(localStorage.getItem("Comentarios"));
        let MyAptopArray = JSON.parse(localStorage.getItem("coment")) || [];
        MyAptopArray.push(GuardarNew);
        localStorage.setItem("Data", JSON.stringify(MyAptopArray));
    }

//---- Obtener o leer la información
export const obtenerDatos =()=>{
    const citasLocalStorage = localStorage.getItem("Comentarios")
    return JSON.parse(citasLocalStorage)

}
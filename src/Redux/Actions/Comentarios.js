import { typesAgendar } from '../Types/tyopes'
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { bataBase } from '../../Firebase/FirebaseConfig'



export const editCitaAsync = (nuevaCita)=>{
    return async (dispatch)=>{
        const collectionComentarios = collection(bataBase, "Comentarios")
        const q = query(collectionComentarios, where("email", "==", nuevaCita.email))
        console.log(nuevaCita.email);
        const datosQ = await getDocs(q)
        let id = ''

        datosQ.forEach(async(docu)=>{
            id = docu.id
        })

        console.log(id)

        const docRef = doc(bataBase, "Comentarios", id)

        await updateDoc(docRef, nuevaCita)
        .then(resp =>{
            dispatch(editCitaSync(nuevaCita))
            dispatch(listAgendaAsync())
        
        })
        .catch(error => console.log(error))

       
    }
}

export const editCitaSync = (nuevaCita)=>{
    return {
        type: typesAgendar.edit,
        payload: {nuevaCita}

    }
}



/* eliminar cita agendar */


export const deleteComentario = (email) => {
    return async (dispatch) => {
        const collectionComentarios = collection(bataBase, 'Comentarios')
        const q = query(collectionComentarios, where("email", "==", email))



        const datosQ = await getDocs(q)
        console.log(datosQ);

        datosQ.forEach(docu =>{
            deleteDoc(doc(bataBase, "Comentarios", docu.id))
        })
        dispatch(actionDeleteEmailSync(email))
    }
}

export const actionDeleteEmailSync=(email)=>{
    return{
        type: typesAgendar.delete,
        payload: email
    }
}



export const listAgendaAsync = () => {
    return async (dispatch) => {

        const collectionListar = await getDocs(collection(bataBase, "Comentarios"))
        console.log(collectionListar)
        const citasA = []
        collectionListar.forEach(listar => {
            citasA.push(
                {
                    ...listar.data()
                }
            )

        })
        dispatch(listAgendarSync(citasA))
    }
}

export const listAgendarSync = (agenda) => {
    return {
        type: typesAgendar.list,
        payload: agenda
    }
}












/* agregar cita agendar asyncrono */
export const actionAddAgendaAsync = (formValue) => {
    return (dispatch) => {
        //addDoc recibir dos pararmetro (donde lo voy a guardar, que voy a guardar)
        //collection recibe dos pararmetro (el nombre que viene de firebaseConfig (baseDato, nombre de la coleccion que cree en Firestore))  
        addDoc(collection(bataBase, "Comentarios"), formValue)
            .then(resp => {
                dispatch(actionAddAgendaSync(formValue))
                dispatch(listAgendaAsync())
            })
            .catch(error => {
                console.warn(error, 'Datos no guardados')
            })

    }
}







export const actionAddAgendaSync = (formValue) => {
    return {
        type: typesAgendar.add,
        payload: formValue
    }

}
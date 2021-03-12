import UpdateForm from "./UpdateForm"
import {DoctorRegisterState} from "../../../types"
import OperationsButtons from "./OperationsButtons"

export default function UpdateFormReady(props: {state: DoctorRegisterState, setState: Function}){
    switch(props.state.value){

        case "ready": return (<p>Clique buscar para realizar a pesquisa</p>)

        case "loading": return (<p>Loading...</p>)

        case "finished": return(<>  <UpdateForm {...props} /> 
                                    <OperationsButtons {...props} /> </>)

        case "error": return(<p>Houve um erro na pesquisa</p>)

        default: return (<p>Aguardando número de CRM</p>)
    }
}
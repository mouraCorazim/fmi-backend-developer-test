import { ReactElement } from 'react'
import {DoctorRegisterState} from '../../../types'
import FinishedRequest from './FinishedAddressRequest'

export default function DoctorAddress(props: {state: DoctorRegisterState, setState: Function}): ReactElement{
    switch(props.state.value){
        case "": return (<p>Aguardando número do CEP</p>)

        case "loading": return (<p>Carregando...</p>)

        case "finished": return (<FinishedRequest {...props}/>)

        case "error": return (<p>CEP tem algum erro</p>)

        default: return (<></>)

    }
}
import { ReactElement } from 'react'
import {DoctorAddressState} from '../../../types'
import FinishedRequest from './FinishedAddressRequest'

export default function DoctorAddress(props: DoctorAddressState): ReactElement{
    switch(props.value){
        case "": return (<p>Aguardando número do CEP</p>)
        case "loading": return (<p>Carregando...</p>)
        case "finished": return (<FinishedRequest {...props.data} />)
        case "error": return (<p>CEP tem algum erro</p>)
        default: return (<></>)
    }
}
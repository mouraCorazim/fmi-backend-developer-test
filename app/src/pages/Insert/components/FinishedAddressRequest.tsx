import { ReactElement } from 'react'
import {DoctorRegisterState} from '../../../types'
import { Handle, isKeyNumeric} from '../../../utils/InputHandlers'
import { setDoctorAddressComplement, setDoctorAddressNumber } from "../../../utils/StateHandlers"

export default function onFinishedRequest(props: {state: DoctorRegisterState, setState: Function}): ReactElement{
    return (
        <div>
            <input 
                id="doctor-address"
                type="text"
                value={props.state.data.logradouro}
                readOnly />
            
            <input 
                id="doctor-address-number"
                type="text" 
                minLength={1}
                maxLength={5}
                placeholder="Número"
                onKeyUp={(event) => Handle(event)
                                        .handler(isKeyNumeric)
                                        .update(setDoctorAddressNumber(props.state, props.setState))}
                required />
            
            <input 
                id="doctor-address-complement"
                type="text"
                maxLength={27}
                placeholder="Complemento" 
                onKeyUp={(event) => Handle(event)
                                        .update(setDoctorAddressComplement(props.state, props.setState))}
                required />

            <input 
                id="doctor-address-neighborhood"
                type="text"
                value={props.state.data.bairro}
                readOnly />
    
            <input 
                id="doctor-address-city"
                type="text" 
                value={props.state.data.localidade}
                readOnly />
            
            <input 
                id="doctor-address-state"
                type="text" 
                value={props.state.data.uf}
                readOnly />
            
            <input
                type="hidden" 
                value={props.state.data.ddd}
                readOnly />
        </div>
    )
}
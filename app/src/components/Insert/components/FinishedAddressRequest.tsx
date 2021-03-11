import { ReactElement } from 'react'
import {DoctorAddressProps} from '../../../types'

export default function onFinishedRequest(data: DoctorAddressProps): ReactElement{
    return (
        <div>
            <input 
                id="doctor-address"
                type="text" 
                name="registerAddress"
                value={data.logradouro}
                readOnly />
            
            <input 
                id="doctor-address-number"
                type="text" 
                name="registerAddressNumber"
                minLength={1}
                maxLength={6}
                placeholder="Número"
                required />
            
            <input 
                id="doctor-address-complement"
                type="text" 
                name="registerAddressComplement"
                maxLength={27}
                placeholder="Complemento" />

            <input 
                id="doctor-address-neighborhood"
                type="text" 
                name="registerAddressNeighborhood"
                value={data.bairro}
                readOnly />
    
            <input 
                id="doctor-address-city"
                type="text" 
                name="registerAddressCity"
                value={data.localidade}
                readOnly />
            
            <input 
                id="doctor-address-state"
                type="text" 
                name="registerAddressState"
                value={data.uf}
                readOnly />
            
            <input
                type="hidden" 
                name="registerDDD"
                value={data.ddd}
                readOnly />
        </div>
    )
}
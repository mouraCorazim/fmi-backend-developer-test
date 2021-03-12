import { ReactElement } from "react";
import { DoctorRegisterState } from "../../../types";

import requestCepInfos from "../../../services/requestCepInfos"
import {Handle, isInvalidCelLength, isKeyNumeric, needCelTraceChar, needParentesis, needTraceCharAt} from "../../../utils/InputHandlers"

import { setDoctorCel, setDoctorCEP, setDoctorTel, setDoctorAddressNumber, setDoctorAddressComplement } from "../../../utils/StateHandlers";

export default function UpdateForm(props: {state: DoctorRegisterState, setState: Function}): ReactElement{

    return(
        <>
            <div className="labels-container">
                <label htmlFor="doctor-name">Nome</label>
                <label htmlFor="doctor-register">CRM</label>
                <label htmlFor="doctor-phone">Telefone</label>
                <label htmlFor="doctor-cel">Celular</label>
                <label htmlFor="specialty-1">Especialidade 1</label>     
                <label htmlFor="specialty-2">Especialidade 2</label>
                <label htmlFor="doctor-cep">CEP</label>
            </div>
            <form id="doctor-update-form">
                <input 
                    id="doctor-name"
                    type="text"
                    defaultValue={props.state.data.name}
                    readOnly />

                <input 
                    id="doctor-register" 
                    type="text"
                    defaultValue={props.state.data.crm}
                    readOnly />

                <input 
                    id="doctor-phone"
                    type="text"
                    minLength={13}
                    maxLength={13}
                    defaultValue={props.state.data.tel}
                    onKeyUp={(event) => Handle(event)
                                            .handler(isKeyNumeric)
                                            .handler(needParentesis)
                                            .handler(needTraceCharAt(8))
                                            .update(setDoctorTel(props.state, props.setState))}
                    required />

                <input 
                    id="doctor-cel"
                    type="text"
                    minLength={13}
                    maxLength={14}
                    defaultValue={props.state.data.cel}
                    onKeyUp={(event) => Handle(event)
                                            .handler(isKeyNumeric)
                                            .handler(needParentesis)
                                            .handler(needCelTraceChar)
                                            .handler(isInvalidCelLength)
                                            .update(setDoctorCel(props.state, props.setState))}
                    required />

                <input 
                    id="specialty-1" 
                    name="specialty1" 
                    type="text"
                    defaultValue={props.state.data.specialty1}
                    readOnly />

                <input
                    id="specialty-2"
                    name="specialty2" 
                    type="text"
                    defaultValue={props.state.data.specialty2}
                    readOnly />

                <input 
                    id="doctor-cep"
                    type="text"
                    minLength={9}
                    maxLength={9}
                    defaultValue={props.state.data.cep}
                    onBlur={(event) => requestCepInfos(event.target.value, props.state, props.setState)}
                    onKeyUp={(event) => Handle(event)
                                            .handler(isKeyNumeric)
                                            .handler(needTraceCharAt(5))
                                            .update(setDoctorCEP(props.state, props.setState))}

                    required />
                
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
                    defaultValue={props.state.data.address}
                    onKeyUp={(event) => Handle(event)
                                            .handler(isKeyNumeric)
                                            .update(setDoctorAddressNumber(props.state, props.setState))}
                    required />
                
                <input 
                    id="doctor-address-complement"
                    type="text"
                    maxLength={27}
                    defaultValue={props.state.data.complemento}
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
            </form>
        </>
    )
}
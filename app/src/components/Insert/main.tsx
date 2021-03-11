import { ReactElement, useState } from "react";
import { DoctorAddressProps, DoctorAddressState } from "../../types";

import requestCepInfos from "../../services/requestCepInfos"
import {
    Handle, 
    isKeyLetter, 
    upperCase, 
    isKeyNumeric, 
    needDotChar, 
    needParentesis, 
    needTraceCharAt, 
    needCelTraceChar, 
    isInvalidCelLength} from '../../utils/InputHandlers'

import DoctorAddress from "./components/DoctorAddress";
import SpecialtySelect from "./components/SpecialtySelect";

const initialDoctorProps: DoctorAddressProps = {
    cep        : undefined,
    localidade : undefined,
    uf         : undefined,
    siafi      : undefined,
    logradouro : undefined,
    ibge       : undefined,
    gia        : undefined,
    ddd        : undefined,
    bairro     : undefined,
    complemento: undefined
}

export default function Insert(): ReactElement{
    const [state, setState]: [DoctorAddressState, Function] = useState({value: "", data: initialDoctorProps})
    return (
        <>
            <div className="container">
                <div className="labels-container">
                    <label htmlFor="doctor-name">Nome</label>
                    <label htmlFor="doctor-register">CRM</label>
                    <label htmlFor="doctor-phone">Telefone</label>
                    <label htmlFor="doctor-cel">Celular</label>
                    <label htmlFor="specialty-1">Especialidade 1</label>     
                    <label htmlFor="specialty-2">Especialidade 2</label>
                    <label htmlFor="doctor-cep">CEP</label>
                </div>
                <form id="doctor-register-form">
                    <input 
                        id="doctor-name" 
                        name="registerName" 
                        type="text"
                        minLength={7}
                        maxLength={119}
                        onKeyUp={(event) => Handle(event)
                                                .handler(isKeyLetter)
                                                .handler(upperCase)}
                        required />

                    <input 
                        id="doctor-register" 
                        name="registerCRM" 
                        type="text"
                        minLength={9}
                        maxLength={9}
                        onKeyUp={(event) => Handle(event)
                                             .handler(isKeyNumeric)
                                             .handler(needDotChar)}
                        required />

                    <input 
                        id="doctor-phone" 
                        name="registerPhone" 
                        type="text"
                        minLength={13}
                        maxLength={13}
                        onKeyUp={(event) => Handle(event)
                                                .handler(isKeyNumeric)
                                                .handler(needParentesis)
                                                .handler(needTraceCharAt(8))}
                        required />

                    <input 
                        id="doctor-cel" 
                        name="registerCel" 
                        type="text"
                        minLength={13}
                        maxLength={14}
                        onKeyUp={(event) => Handle(event)
                                                .handler(isKeyNumeric)
                                                .handler(needParentesis)
                                                .handler(needCelTraceChar)
                                                .handler(isInvalidCelLength)}
                        required />

                    <SpecialtySelect
                        id="specialty-1"
                        name="specialty2" />

                    <SpecialtySelect
                        id="specialty-2"
                        name="specialty2" />

                    <input 
                        id="doctor-cep" 
                        name="registerCEP" 
                        type="text"
                        minLength={9}
                        maxLength={9}
                        onBlur={(event) => requestCepInfos(event.target.value, setState)}
                        onKeyUp={(event) => Handle(event)
                                                .handler(isKeyNumeric)
                                                .handler(needTraceCharAt(5))}
                        required />

                    <DoctorAddress
                        value = {state.value} 
                        data  = {state.data} />
                </form>
                <article>
                    <h2>Registro de médico especialista</h2>
                    <p>Página para registro de médico especialista.</p>
                    <p>No registro o médico deve ter ao mínimo duas especialidades.</p>
                    <p>Ao preencher o número do CEP o sistema buscará as demais informações, sendo necessário apenas o número residencial e o complemento, caso haja.</p>
                </article>
            </div>
            <button className="operation-button"> Salvar registro </button>
        </>
    )
}
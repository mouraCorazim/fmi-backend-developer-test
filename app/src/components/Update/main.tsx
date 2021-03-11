import { ReactElement, useState } from "react";
import { DoctorAddressProps, DoctorAddressState } from "../../types";

import requestCepInfos from "../../services/requestCepInfos"
import {clearInput, Handle, isInvalidCelLength, isKeyNumeric, needCelTraceChar, needDotChar, needParentesis, needTraceCharAt} from "../../utils/InputHandlers"

import DoctorAddress from "../Insert/components/DoctorAddress";

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


export default function Update(): ReactElement{

    const [state, updateState]: [DoctorAddressState, Function]= useState({value: "", data: initialDoctorProps})

    return(
        <>
            <div className="container">
                <div className="labels-container">
                    <label htmlFor="search-doctor">CRM</label>
                </div>
                <form>
                    <input 
                        id="search-doctor" 
                        name="searchDoctorValue"
                        type="text" 
                        minLength={9}
                        maxLength={9}
                        onKeyUp={(event) => Handle(event)
                                                .handler(isKeyNumeric)
                                                .handler(needDotChar)}
                        required />
                </form>
                <article>
                    <h2>Atualização de médico especialista registrado</h2>
                    <p>Página para atualização de dados de médico especialista registrado.</p>
                    <p>Busca é filtrada pelo uso do número de CRM.</p>
                    <p>Valor retornado é único ou vazio, caso não haja um médico registrado com o CRM especificado.</p>
                </article>
            </div>
            <button className="operation-button"> Buscar </button>
            <div className="update-container">
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
                        name="registerName" 
                        type="text"
                        value="Lucas Moura Corazim"
                        readOnly />

                    <input 
                        id="doctor-register" 
                        name="registerCRM" 
                        type="text"
                        value="69.090.34"
                        readOnly />

                    <input 
                        id="doctor-phone" 
                        name="registerPhone" 
                        type="text"
                        minLength={13}
                        maxLength={13}
                        value="(11)2193-3352"
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
                        value="(11)96847-5194"
                        onKeyUp={(event) => Handle(event)
                                                .handler(isKeyNumeric)
                                                .handler(needParentesis)
                                                .handler(needCelTraceChar)
                                                .handler(isInvalidCelLength)}
                        required />

                    <input 
                        id="specialty-1" 
                        name="specialty1" 
                        type="text"
                        value="Cardiologista infantil"
                        readOnly />

                    <input
                        id="specialty-2"
                        name="specialty2" 
                        type="text"
                        value="Cirurgião"
                        readOnly />

                    <input 
                        id="doctor-cep" 
                        name="registerCEP" 
                        type="text"
                        minLength={8}
                        maxLength={8}
                        value="04176-260"
                        onFocus={(event) => Handle(event).handler(clearInput)}
                        onBlur={(event) => requestCepInfos(event.target.value, updateState)}
                        onKeyUp={(event) => Handle(event)
                                                .handler(isKeyNumeric)
                                                .handler(needTraceCharAt(5))}
                        required />

                    <DoctorAddress
                        value = {state.value} 
                        data  = {state.data} />
                </form>
                <div className="update-buttons">
                    <button>Deletar</button>
                    <p>A deleção resulta em um soft-delete, onde os dados continuam salvos porém não são mais acessíveis.</p>
                    <button>Atualizar</button>
                    <p>A atualização é restrita a alguns campos do registro.</p>
                </div>
            </div>
        </>
    )
}
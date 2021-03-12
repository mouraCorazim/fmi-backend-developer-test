import { ReactElement, useState } from "react";
import { DoctorDataProps, DoctorRegisterState } from "../../types";

import {Handle, isKeyNumeric, needDotChar} from "../../utils/InputHandlers"
import requestDoctorByCRM from "../../services/requestDoctorByCRM"

import UpdateFormReady from "./components/UpdateFormReady";
import { setDoctorCRM } from "../../utils/StateHandlers";

const initialDoctorProps: DoctorDataProps = {
    uf         : undefined,
    gia        : undefined,
    ddd        : undefined,
    crm        : undefined,
    tel        : undefined,
    cel        : undefined,
    cep        : undefined,
    name       : undefined,
    ibge       : undefined,
    siafi      : undefined,
    bairro     : undefined,
    address    : undefined,
    specialty1 : undefined,
    specialty2 : undefined,
    logradouro : undefined,
    localidade : undefined,
    complemento: undefined,
}

export default function Update(): ReactElement{

    const [state, setState]: [DoctorRegisterState, Function] = useState({value: "", data: initialDoctorProps})

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
                        onBlur={(event) => setState({value: "ready", data: {crm: event.target.value, ...initialDoctorProps}})}
                        onKeyUp={(event) => Handle(event)
                                                .handler(isKeyNumeric)
                                                .handler(needDotChar)
                                                .update(setDoctorCRM(state, setState))}
                        required />
                </form>
                <article>
                    <h2>Atualização de médico especialista registrado</h2>
                    <p>Página para atualização de dados de médico especialista registrado.</p>
                    <p>Busca é filtrada pelo uso do número de CRM.</p>
                    <p>Valor retornado é único ou vazio, caso não haja um médico registrado com o CRM especificado.</p>
                </article>
            </div>
            <button 
                className="operation-button"
                onClick={() => requestDoctorByCRM(state, setState)}> Buscar </button>

            <div className="update-container">

                <UpdateFormReady
                    state={state}
                    setState={setState} />

            </div>
        </>
    )
}
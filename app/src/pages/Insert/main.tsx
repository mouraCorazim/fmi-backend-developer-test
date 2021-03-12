import { ReactElement, useState } from "react";
import { DoctorRegisterState, DoctorDataProps } from "../../types";
import RegisterForm from "./components/RegisterForm"

const initialFormState: DoctorDataProps = {
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

export default function Insert(): ReactElement{

    const [state, setState]: [DoctorRegisterState, Function] = useState({value: "", data: initialFormState})

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

                <RegisterForm 
                    state={state}
                    setState={setState} />

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
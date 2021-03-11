import { ReactElement } from "react";

export default function Home(): ReactElement{
    return(
        <>
            <h1>Sistema de cadastros e consultas de médicos especialistas</h1>
            <div className="propose-container">
                <ul>
                    <h3>Desenvolver um sistema que faça a gestão de cadastros de médicos.</h3>
                    <li>Insert</li>
                    <li>Update</li>
                    <li>Select</li>
                    <li>Soft delete</li>
                </ul>
                <ul>
                    <h3>No cadastro do médico devem ser cadastrados os seguintes itens abaixo</h3>
                    <li>Nome do Médico com no máximo 120 caracteres</li>
                    <li>CRM somente Números e no formato (00.000.00)</li>
                    <li>Telefone Fixo</li>
                    <li>Telefone Celular</li>
                    <li>CEP Formatado (00000-000)</li>
                    <li>Especialidade médica (ao mínimo duas especialidades)</li>
                </ul>
            </div>
        </>
    )
}
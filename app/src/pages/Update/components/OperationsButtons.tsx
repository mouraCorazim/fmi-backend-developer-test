import { ReactElement } from "react";
import { DoctorRegisterState } from "../../../types";

export default function OperationsButtons(props: {state: DoctorRegisterState, setState: Function}): ReactElement{
    return(
        <div className="update-buttons">
            <button>Deletar</button>
            <p>A deleção resulta em um soft-delete, onde os dados continuam salvos porém não são mais acessíveis.</p>
            <button>Atualizar</button>
            <p>A atualização é restrita a alguns campos do registro.</p>
        </div>
    )
}
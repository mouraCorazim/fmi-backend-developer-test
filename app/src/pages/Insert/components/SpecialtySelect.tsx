import { ReactElement } from "react";
import { DoctorRegisterState } from "../../../types";

function setDoctorSpecialty(state: DoctorRegisterState, setState: Function, name: string){
    return function(event: any){
        const updatedState: DoctorRegisterState = {
            data : { [name]: event.target.value, ...state.data },
            value: state.value
        }

        setState(updatedState)
    }
}

export default function SpecialtySelect(props: {id: string, name: string, state: DoctorRegisterState, setState: Function}): ReactElement{
    return(
        <>
            <select 
                id={props.id}
                onBlur={setDoctorSpecialty(props.state, props.setState, props.name)}
                required>
                    <option value="alergologia">Alergologia</option>
                    <option value="angiologia">Angiologia</option>
                    <option value="buco-maxilo">Buco maxilo</option>
                    <option value="cardiologia-clínica">Cardiologia clínica</option>
                    <option value="cardiologia-infantil">Cardiologia infantil</option>
                    <option value="cirurgia-cabeca-pescoco">Cirurgia cabeça e pescoço</option>
                    <option value="cirurgia-cardiaca">Cirurgia cardíaca</option>
                    <option value="cirurgia-torax">Cirurgia toráxica</option>
            </select>
        </>
    )
}
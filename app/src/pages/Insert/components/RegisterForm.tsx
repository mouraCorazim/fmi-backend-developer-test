import { ReactElement } from "react";
import { DoctorRegisterState } from "../../../types";

import requestCepInfos from "../../../services/requestCepInfos"
import {
    Handle, 
    isKeyLetter, 
    upperCase, 
    isKeyNumeric, 
    needDotChar, 
    needParentesis, 
    needTraceCharAt, 
    needCelTraceChar, 
    isInvalidCelLength} from '../../../utils/InputHandlers'

import {
    setDoctorCEP,
    setDoctorCRM,
    setDoctorTel,
    setDoctorName,
    setDoctorCel
} from "../../../utils/StateHandlers"

import DoctorAddress from "./DoctorAddress";
import SpecialtySelect from "./SpecialtySelect";


export default function RegisterForm(props: {state: DoctorRegisterState, setState: Function}): ReactElement{
    return (
        <form id="doctor-register-form">
            <input 
                id="doctor-name"
                type="text"
                minLength={7}
                maxLength={119}
                onKeyUp={(event) => Handle(event)
                                        .handler(isKeyLetter)
                                        .handler(upperCase)
                                        .update(setDoctorName(props.state, props.setState))}
                required />

            <input 
                id="doctor-register"
                type="text"
                minLength={9}
                maxLength={9}
                onKeyUp={(event) => Handle(event)
                                        .handler(isKeyNumeric)
                                        .handler(needDotChar)
                                        .update(setDoctorCRM(props.state, props.setState))}
                required />

            <input 
                id="doctor-phone"
                type="text"
                minLength={13}
                maxLength={13}
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
                onKeyUp={(event) => Handle(event)
                                        .handler(isKeyNumeric)
                                        .handler(needParentesis)
                                        .handler(needCelTraceChar)
                                        .handler(isInvalidCelLength)
                                        .update(setDoctorCel(props.state, props.setState))}
                required />

            <SpecialtySelect
                id="specialty-1"
                name="specialty1" 
                state={props.state}
                setState={props.setState} />

            <SpecialtySelect
                id="specialty-2"
                name="specialty2" 
                state={props.state}
                setState={props.setState}/>

            <input 
                id="doctor-cep"
                type="text"
                minLength={9}
                maxLength={9}
                onBlur={(event) => requestCepInfos(event.target.value, props.state, props.setState)}
                onKeyUp={(event) => Handle(event)
                                        .handler(isKeyNumeric)
                                        .handler(needTraceCharAt(5))
                                        .update(setDoctorCEP(props.state, props.setState))}
                required />

            <DoctorAddress
                state = {props.state} 
                setState = {props.setState} />
        </form>
    )
}
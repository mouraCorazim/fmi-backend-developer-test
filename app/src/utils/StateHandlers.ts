import {DoctorRegisterState} from "../types"

export function setDoctorName(state: DoctorRegisterState, setState: Function){
    return function(event: any){
        const value = event.target.value
        
        if(value.length > 3){
            const updatedState: DoctorRegisterState = {
                data : { name: value, ...state.data },
                value: state.value
            }

            setState(updatedState)
        } 
    }
}

export function setDoctorCRM(state: DoctorRegisterState, setState: Function){
    return function(event: any){
        const value = event.target.value

        if(value.length === 9){
            const updatedState: DoctorRegisterState = {
                data : { crm: value, ...state.data },
                value: state.value
            }

            setState(updatedState)
        }
    }
}

export function setDoctorTel(state: DoctorRegisterState, setState: Function){
    return function(event: any){
        const value = event.target.value

        if(value.length === 13){
            const updatedState: DoctorRegisterState = {
                data : { tel: value, ...state.data },
                value: state.value
            }

            setState(updatedState)
        }
    }
}

export function setDoctorCel(state: DoctorRegisterState, setState: Function){
    return function(event: any){
        const value = event.target.value

        if(value.length > 12){
            const updatedState: DoctorRegisterState = {
                data : { cel: value, ...state.data },
                value: state.value
            }

            setState(updatedState)
        }
    }
}

export function setDoctorCEP(state: DoctorRegisterState, setState: Function){
    return function(event: any){
        const value = event.target.value

        if(value.length === 9){
            const updatedState: DoctorRegisterState = {
                data : { cep: value, ...state.data },
                value: state.value
            }

            setState(updatedState)
        }
    }
}

export function setDoctorAddressNumber(state: DoctorRegisterState, setState: Function){
    return function(event: any){
        const value = event.target.value

        if(value.length > 0){
            const updatedState: DoctorRegisterState = {
                data : { address: value, ...state.data },
                value: state.value
            }

            setState(updatedState)
        }
    }
}

export function setDoctorAddressComplement(state: DoctorRegisterState, setState: Function){
    return function(event: any){
        const value = event.target.value

        if(value.length > 4){
            const updatedState: DoctorRegisterState = {
                data : { complemento: value, ...state.data },
                value: state.value
            }

            setState(updatedState)
        }
    }
}
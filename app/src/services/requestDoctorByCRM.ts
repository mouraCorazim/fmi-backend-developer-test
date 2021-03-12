import axios from 'axios'
import { DoctorRegisterState } from '../types'

export default function requestDoctorByCRM(state: DoctorRegisterState, setState: Function){

    setState({value: "loading", data: state.data})

    const requestUrl = `http://127.0.0.1:8000/get/doctor`

    axios.get(requestUrl)
         .then((res) => setState({value: "finished", data: {...state.data, ...res.data}}))
         .catch((err) => setState({value: "error", data: state.data}))
}
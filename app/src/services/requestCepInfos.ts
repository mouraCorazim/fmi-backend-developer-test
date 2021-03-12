import axios from 'axios'
import { DoctorRegisterState} from '../types'

export default function requestCepInfos(cep: string | undefined, state: DoctorRegisterState, setState: Function){

    setState({value: "loading", data: state.data})

    const requestUrl = `https://viacep.com.br/ws/${cep}/json`

    axios.get(requestUrl)
        .then(res => setState({value: "finished", data: {...state.data, ...res.data}}))
        .catch(err => setState({value: "error", data: state.data}))
}
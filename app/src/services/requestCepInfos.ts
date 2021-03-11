export default function requestCepInfos(cep: string, setState: Function){

    setState({value: "loading", data: {}})

    const requestUrl = `https://viacep.com.br/ws/${cep}/json`

    const requestInit: RequestInit = {
        method: "GET",
        headers:{
            "Accept": "application/json"
        }
    }

    fetch(requestUrl, requestInit)
        .then(res => res.json())
        .then(json => setState({value: "finished", data: json}))
        .catch(err => setState({value: "error", data: {}}))
}
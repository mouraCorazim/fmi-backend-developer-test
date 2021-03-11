export = Types
export as namespace Types

declare namespace Types{
    type DoctorAddressProps = {
        cep: string | undefined,
        logradouro: string | undefined,
        complemento: string | undefined,
        bairro: string | undefined,
        localidade: string | undefined,
        uf: string | undefined,
        ibge: string | undefined,
        gia: string | undefined,
        ddd: string | undefined,
        siafi: string| undefined
    }

    type DoctorAddressState = {
        value: "" | "loading" | "finished" | "error", 
        data: DoctorAddressProps
    }
}
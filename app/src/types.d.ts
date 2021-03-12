export = Types
export as namespace Types

declare namespace Types{

    type DoctorDataProps = {
        uf         : string | undefined,
        gia        : string | undefined,
        ddd        : string | undefined,
        crm        : string | undefined,
        tel        : string | undefined,
        cel        : string | undefined,
        cep        : string | undefined,
        name       : string | undefined,
        ibge       : string | undefined,
        siafi      : string | undefined,
        bairro     : string | undefined,
        address    : string | undefined,
        specialty1 : string | undefined,
        specialty2 : string | undefined,
        logradouro : string | undefined,
        localidade : string | undefined,
        complemento: string | undefined,
    }

    type DoctorRegisterState = {
        value: "" | "ready" | "loading" |  "error" | "finished", 
        data: DoctorDataProps
    }
}
import {ReactElement, useState} from 'react'
import DoctorCard from './components/DoctorCard'

export default function Search(): ReactElement{

    const [state, updateState] = useState({page: 1})

    return(
        <>
            <div className="container">
                <div className="labels-container">
                    <label htmlFor="search-doctor">Pesquisar registro</label>
                    <label htmlFor="search-flag">Filtro</label>
                </div>
                <form>
                    <input 
                        id="search-doctor" 
                        name="searchDoctorValue"
                        type="text" 
                        minLength={7}
                        maxLength={120}
                        required />

                    <select name="searchFlag" id="search-flag">
                        <optgroup label="Pesquisa única">
                            <option value="crm">CRM</option>
                            <option value="telefone">Telefone</option>
                            <option value="celular">Celular</option>
                        </optgroup>
                        <optgroup label="Pesquisa múltipla">
                            <option value="nome">Nome</option>
                            <option value="cep">CEP</option>
                        </optgroup>
                        <optgroup label="Especialidade">
                            <option value="alergologia">Alergologia</option>
                            <option value="angiologia">Angiologia</option>
                            <option value="buco-maxilo">Buco maxilo</option>
                            <option value="cardiologia-clínica">Cardiologia clínica</option>
                            <option value="cardiologia-infantil">Cardiologia infantil</option>
                            <option value="cirurgia-cabeca-pescoco">Cirurgia cabeça e pescoço</option>
                            <option value="cirurgia-cardiaca">Cirurgia cardíaca</option>
                            <option value="cirurgia-torax">Cirurgia toráxica</option>
                        </optgroup>
                    </select>
                </form>
                <article>
                    <h2>Busca de médico especialista registrado</h2>
                    <p>Página para busca de médico especialista nos registros.</p>
                    <p>Busca é filtrada pelo uso do valor selecionado da caixa de seleção.</p>
                    <p>Busca por especialidade trará uma lista de médicos de tal.</p>
                </article>
            </div>
            <button className="operation-button"> Pesquisar </button>
            <div className="search-results">
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
            </div>
            <div className="page-control">
                <button>anterior</button>
                <p>página {state.page}</p>
                <button>próxima</button>
            </div>
        </>
    )

}
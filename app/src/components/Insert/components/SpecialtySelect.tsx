
export default function SpecialtySelect(props: {id: string, name: string}){
    return(
        <>
            <select id={props.id} name={props.name} required>
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
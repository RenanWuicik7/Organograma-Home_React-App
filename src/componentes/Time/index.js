import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const css = {
        backgroundColor: props.corSecundaria
    }

    const cssAside = {
        backgroundColor: props.corPrimaria
    }

    return (
        props.colaboradores.length > 0 && <>
            {/* <h1 className="titulo-times-section">Minha Organização:</h1>
            <aside></aside> */}
            <section className='time' style={ css }>
                <h3>{props.nome}</h3>
                <aside style={ cssAside }></aside>
                <div className='colaboradores'>
                    {props.colaboradores.map( colaborador => <Colaborador 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    key={colaborador.nome}
                    corDeFundo={props.corPrimaria}
                    /> )}
                </div>
            </section>
        </>
    );
}

export default Time;
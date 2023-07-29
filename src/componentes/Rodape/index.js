import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape-footer'>
            <div>
                <li><a href='http://facebook.com' target='_blanck'><img src='/imagens/fb.png' alt='logo do facebook'/></a></li>
                <li><a href='http://twitter.com' target='_blanck'><img src='/imagens/tw.png' alt='antiga logo do twitter'/></a></li>
                <li><a href='http://instagram.com' target='_blanck'><img src='/imagens/ig.png' alt='logo do instagram'/></a></li>
            </div>
            <img src='/imagens/logo.png' alt='logo da organo'/>
            <p>Desenvolvido por Alura.</p>
        </footer>
    );
}

export default Rodape;
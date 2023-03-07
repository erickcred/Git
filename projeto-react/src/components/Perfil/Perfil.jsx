const Perfil = () => {
    const usuario = {
        nome: "Erick Rick",
        avatar: "https://github.com/erickcred.png"
    }
    return (
        <div>
            <img src={ usuario.avatar } alt="logo" />
            <h3>{ usuario.nome }</h3>
        </div>
    );
}

export default Perfil;
import Perfil from './components/Perfil/Perfil';

function App() {
  const nome = "Erick";

  function retornaNome() {
    return nome;
  }
  const pessoas = {
      nome: "Erick Rick",
      idade: 36
    };

  let estaDeDia = false;

  return (
    <div>
      <h1>Título</h1>
      <h2>Subtitulo</h2>
      <p>{ retornaNome() }</p>
      { estaDeDia ? "Bom dia": "Boa noite" }
      { estaDeDia && "Bom dia" }  {/*usado para omitir o else */}

      <Perfil />

    </div>
  );
}

export default App;

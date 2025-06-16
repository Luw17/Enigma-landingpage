import './App.css';
import Button from './components/button.tsx';
import Logo from './components/logo.tsx';

function App() {
  return (
    <div>
      <header className="header">

<Logo />
<div className="buttonsHeader">
<Button text="Sobre nós" variant="secondary" />
<Button text="Serviços" variant="secondary" />
<Button text="Como usar?" variant="secondary" />
<Button text="Assinaturas" variant="secondary" />
</div>

<div className="criarConta">
<Button text="Cadastre-se" variant="tertiary" />
<Button text="Entrar" variant="primary" />
</div>

      </header>

      <div className="hero">
  <div className="slogan">
    <h1>
      AGILIDADE <br />
      PRATICIDADE <br />
      E OS <span className="destaque">DADOS</span> DA PAPELADA
    </h1>
    <p>
      Gerencie seu negócio com uma ferramenta <br />
      <strong>rápida</strong> e <strong>intuitiva</strong>.
    </p>
    <div className="callToAction"><Button text="Comece já!" variant="primary" /></div>
  </div>

  <img src="./public/logoeniwhere.svg" alt="Logo Eniwhere" className="logo" />
</div>

      
    </div>
  );
}

        
      

    //   {/* <section className="features">
    //     <div className="feature-card">
    //       <h2> R pido</h2>
    //       <p>Usando Vite, a velocidade de desenvolvimento   insana.</p>
    //     </div>
    //     <div className="feature-card">
    //       <h2>  Moderno</h2>
    //       <p>Feito com React + TypeScript, super atualizado.</p>
    //     </div>
    //     <div className="feature-card">
    //       <h2> Modular</h2>
    //       <p>Divida sua p gina em componentes reaproveit veis.</p>
    //     </div>
    //   </section>

    //   <footer>
    //     <p> 2025 Meu Projeto. Todos os direitos reservados.</p>
    //   </footer>
    // </div> */}


export default App;

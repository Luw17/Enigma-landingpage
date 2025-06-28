import './App.css';
import Button from './components/button.tsx';
import Logo from './components/logo.tsx';
import Card from './components/card.tsx';
import PricingTable from './components/PricingTable';

function App() {
  return (
    <div>
      <header className="header">
        <Logo />
        <div className="buttonsHeader">
          <Button text="Sobre nós" variant="secondary" />
          <Button text="Serviços" variant="secondary" />
          <Button text="Assinaturas" variant="secondary" />
        </div>

        <div className="criarConta">
          <Button text="Cadastre-se" variant="tertiary" />
          <a href="http://localhost:3000">
            <Button text="Entrar" variant="primary" />
          </a>
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
          <div className="callToAction">
            <Button text="Comece já!" variant="primary" />
          </div>
        </div>

        <img src="./logoeniwhere.svg" alt="Logo Eniwhere" className="logo" />
      </div>

      <section className="aboutUs">
        <p><strong>SOBRE NÓS</strong></p>

        <div className="aboutUsCards">
          <Card
            titulo="ENIWHERE"
            descricao="A ENIWHERE é um software de criação e gerenciamento de ordens de serviço, para que o seu negócio flua de maneira organizada, otimizada e... bem, fluida"
            variant="card2"
          />

          <Card
            titulo="ENIGMA"
            descricao="A ENIGMA SOLUTIONS é uma equipe que nasceu da vontade de ajudar a otimizar seus processos e, nisso, acreditamos que nosso software seja a solução perfeita!"
            variant="card2"
          />
        </div>
      </section>

      <section className="services">
        <p><strong>NOSSOS SERVIÇOS</strong></p>

        <div className="servicesCards">
          <Card
            titulo="Agendamento"
            descricao="Marque horários sem dor de cabeça. Evite imprevistos!"
            variant="card1"
          />
          <Card
            titulo="Banco de dados"
            descricao="Guarde tudo do seu negócio num só lugar, fácil e seguro!"
            variant="card1"
          />
          <Card
            titulo="Histórico"
            descricao="Veja o que você andou fazendo e tome decisões sem chute!"
            variant="card1"
          />
        </div>

        <div className="servicesDescription">
          <p className="servicesDescriptionTitle"><strong>AGENDAMENTO</strong></p>
          <p className="servicesDescriptionText">
            Com a ferramenta de agendamentos da ENIWHERE, você organiza seus compromissos de forma simples e prática. Gerencie horários, adicione lembretes e evite imprevistos no dia a dia. Tudo pensado para facilitar sua rotina e manter o fluxo do seu negócio funcionando sem estresse.
          </p>

          <p className="servicesDescriptionTitle"><strong>BANCO DE DADOS</strong></p>
          <p className="servicesDescriptionText">
            Armazene todas as informações importantes do seu negócio com segurança e praticidade. O sistema da ENIWHERE organiza os dados de forma intuitiva, garantindo acesso rápido e controle total sobre tudo que importa — sem complicação e tudo em um só lugar.
          </p>

          <p className="servicesDescriptionTitle"><strong>HISTÓRICO</strong></p>
          <p className="servicesDescriptionText">
            Acompanhe tudo o que já aconteceu com seus atendimentos, interações e movimentações. Com o histórico completo, você toma decisões com base em dados reais, entende o comportamento dos seus clientes e melhora suas estratégias com muito mais confiança.
          </p>
        </div>
      </section>

      <section className="prices">
        <p><strong>ASSINATURAS ENIWHERE</strong></p>
        <div className="pricesDescription">
          Escolha o plano que melhor se adapta às suas necessidades
        </div>

        <div>
          <PricingTable />
        </div>

        <div className="interessado">
          <Button text="Tenho interesse" variant="tertiary" />
        </div>
      </section>

      <div className="buttonTopo">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          text="↑"
          variant="primary"
        />
      </div>

      <footer className="footer">
        <div className="footer-left">
          <p className="footer-title">ENIWHERE</p>
          <p className="footer-sub">by Enigma Solutions</p>
          <p className="footer-copy">© 2025 Eniwhere. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <a href="#">Recursos</a>
          <a href="#">Preços</a>
          <a href="#">Equipe</a>
          <a href="#">Contato</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { Header } from "./components/Header.jsx";
import Styles from "./App.module.css";
import Story from "./components/Story.jsx";
import KnowledgeChart from "./components/KnowledgeChart.jsx";
import WhatIveDone from "./components/whatIveDone.jsx";

function App() {
  return (
    <>
      <Header></Header>

      <main className={Styles.main}>
        <h1>
          Hey! It's me,{" "}
          <span className={Styles.nameEffect}>Venícius Miguel</span>
        </h1>
      </main>

      <Story></Story>

      <section id="aboutToday">
        <hr />
        <h2>E sobre hoje</h2>
        <div className="aboutText">
          <p>
            Atualmente, estou comprometido a estudar desenvolvimento web 5 horas
            por dia, 5 dias por semana, desde o início de 2025,{" "}
            <a href="#firstObs">sem exceções como feriados*</a> . Com esse
            período de tempo, consegui adquirir diversos conhecimentos, como:
          </p>
        </div>

        <div className="chart">
          <KnowledgeChart name="JavaScript" progress={56} />
          <KnowledgeChart name="React" progress={40} />
          <KnowledgeChart name="HTML" progress={73} />
          <KnowledgeChart name="MongoDB" progress={42} />
          <KnowledgeChart name="CSS" progress={49} />
          <KnowledgeChart name="Node.js" progress={55} />
        </div>

        <p>Além de possuir experiência em:</p>
        <div className="chart">
          <KnowledgeChart name="Git/GitHub" progress={59} />
          <KnowledgeChart name="APIs REST" progress={40} />
          <KnowledgeChart name="Linux" progress={52} />
        </div>
        <hr />
      </section>

      <WhatIveDone></WhatIveDone>

      <section id="platforms">
        <hr />
        <h2>Links úteis</h2>

        <p>
          Aqui no{" "}
          <a
            href="http://x.com/venicius8v"
            target="_blank"
            rel="noopener noreferrer"
          >
            meu Twitter <u>x.com/venicius8v</u>
          </a>{" "}
          eu faço um desafio do #100DaysOfCode, onde deve-se fazer 100 dias
          consecutivos escrevendo códigos e documentando o processo. Lembrando
          que, neste desafio, estudo pelo menos 1 hora nos finais de semana.
        </p>
        <p>
          Sobre minha parte profissional, possuo o{" "}
          <a
            href="http://linkedin.com/in/venícius-silva-b05183357"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <u>linkedin.com/in/venícius-silva-b05183357</u>
          </a>
          . Em breve, pretendo estar engajado e mostrar mais a minha jornada
          nesta plataforma também.
        </p>
        <p>
          E também tem o{" "}
          <a
            href="http://github.com/venicius8"
            target="_blank"
            rel="noopener noreferrer"
          >
            meu GitHub <u>github.com/venicius8</u>
          </a>{" "}
          , que é a plataforma mais importante o meu dia a dia Dev.
        </p>
        <br />
      </section>

      <footer>
        <hr />
        <h2>Rodapé</h2>
        <h3>Contato</h3>
        <p>
          meu email principal:{" "}
          <a href="mailto:miguelsilva8v@gmail.com">miguelsilva8v@gmail.com</a>
        </p>
        <br />
        <h3>Observação</h3>
        <p id="firstObs">
          * Fiquei um período sem computador, logo perdi 2 semanas de estudos.
        </p>
        <p>"Construindo o futuro, uma linha de código por vez."</p>
      </footer>
    </>
  );
}

export default App;

import { Header } from "./components/Header.jsx";
import Styles from "./App.module.css";
import Story from "./components/Story.jsx";
import KnowledgeChart from "./components/KnowledgeChart.jsx";
import WhatIveDone from "./components/whatIveDone.jsx";

function App() {
  return (
    <>
      <Header></Header>

      <section className={Styles.main}>
        <h1>
          Hey! It's me,{" "}
          <span className={Styles.nameEffect}>Venícius Miguel</span>
        </h1>
      </section>

      <Story></Story>

      <section id="aboutToday">
        <hr />
        <h2>E sobre hoje</h2>
        <p>
          Atualmente, estou comprometido a estudar desenvolvimento web 5 horas
          por dia, 5 dias por semanas, desde início de 2025, sem exceções como
          feriados*. Com esse período de tempo, consegui adquirir diversos
          conhecimentos, como:
        </p>

        <div className="chart">
          <KnowledgeChart name="JavaScript" progress={56} />
          <KnowledgeChart name="React" progress={40} />
          <KnowledgeChart name="HTML" progress={73} />
          <KnowledgeChart name="MongoDB" progress={52} />
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

      <section>
        <hr />
        <h2 id="platafoms">Minhas as plataformas</h2>
        <div className="twitterLink"></div>
        <p>
          Aqui eu faço um desafio do #100DaysOfCode, onde deve fazer 100 dias
          consecutivos escrevendo códigos e documentando o processo.
        </p>
        <div className="githubRepoLink"></div>
        <p>
          Não precisa agora perdido em meus repositórios. Neste link, mostro os
          repositórios mais úteis e segmentados. Obs.: é diferente do portfólio!
        </p>
      </section>

      <footer>
        <hr />
        <h2>Contato</h2>
        <a href="mailto:miguelsilva8v@gmail.com">miguelsilva8v@gmail.com</a>
        <a href="http://x.com/venicius8v">x.com/venicius8v</a>

        <h2>Observações</h2>
        <p>
          * Fiquei um período sem computador, logo perdi 2 semanas de estudos.
        </p>
      </footer>
    </>
  );
}

export default App;

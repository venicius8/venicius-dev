import portfolioImg from "../assets/portfolioImg.png";
import "../style/whatIveDone.css";

function WhatIveDone() {
  return (
    <section id="whatIveDone">
      <h2>O que já fiz</h2>
      <p>
        Tenho um portfólio onde mostro todos os meus projetos principais que
        construi. Clique na imagem abaixo e explore!
      </p>
      <div className="portfolio">
        <img
          src={portfolioImg}
          onClick={() =>
            window.open(
              "http://veniciusportfolio.netlify.app",
              "_blank",
              "noopener,noreferrer"
            )
          }
          alt="Portfólio"
        />
      </div>
    </section>
  );
}

export default WhatIveDone;

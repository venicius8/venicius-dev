import { useState } from "react";
import "../style/story.css";

function Story() {
  const [part1, setPart1] = useState(false);
  const [part2, setPart2] = useState(false);
  const [part3, setPart3] = useState(false);
  const [part4, setPart4] = useState(false);
  const [part5, setPart5] = useState(false);

  function readMore(part, setPart) {
    if (!part) {
      return (
        <i
          onClick={() => {
            setPart(true);
          }}
        >
          ... Ler mais
        </i>
      );
    }
  }

  return (
    <section className="storySection">
      <h2 id="story">Minha história</h2>
      <div className="storyText">
        <p style={{ textAlign: "start" }}>
          Sou do interior pernambucano, tenho 18 anos, e minha maior paixão é a{" "}
          <u>tecnologia</u>. Tudo começa há muito tempo. Quando{" "}
          {readMore(part1, setPart1)}
          {part1 && (
            <span>
              criança, eu não tinha muitos amigos, por esse motivo, eu sentia a
              necessidade de me entreter com algo, porém na minha época,
              especialmente onde morava, o acesso à internet e às novas
              tecnologias eram bastante limitados. Mesmo assim,{" "}
              <u>
                eu sempre preferia criar coisas e resolver "enigmas", como criar
                novas brincadeiras e desvendar quebra-cabeças
              </u>
              .{" "}
            </span>
          )}
          {part1 && readMore(part2, setPart2)}
          {part2 && (
            <span>
              Quase no fim da minha infância, eu descobri o poder da internet,
              percebi que poderia fazer qualquer coisa, eu customizava todo meu
              celular, criava desenhos online, treinar meu raciocínio com
              enigmas, e muitos outros. Foi uma época marcante para mim!{" "}
            </span>
          )}
          {part2 && readMore(part3, setPart3)}
          {part3 && (
            <span>
              Na minha adolescência, <u>conheci a programação</u>, mas de forma
              indireta. Em um aplicativo, eu criava jogos encaixando blocos de
              scripts, em outro, criava um programa em Python para resolver
              problemas matemáticos. Obs.: não tinha computador. Porém, outros
              interesses, como conhecer novos idiomas, aprender a tocar
              instrumentos e investir dinheiro, passaram a ocupar uma grande
              parte da minha atenção. Anos depois,{" "}
            </span>
          )}
          {part3 && readMore(part4, setPart4)}
          {part4 && (
            <span>
              aos meus 17 anos, precisei criar uma página web bem específica
              para uma campanha de marketing digital, no entanto, as grandes
              plataformas, como o WordPress, não supria essa necessidade, foi
              então que{" "}
              <u>
                descobri o desenvolvimento web, mais precisamente HTML, CSS e
                JavaScript, e imediatamente senti uma grande conexão
              </u>
              . Até iria continuar com marketing, porém percebi que aquilo
              poderia ser o meu futuro, pois era tudo que eu sonhava: envolvia
              tecnologia, possibilidade de criar algo novo, resolver problemas
              do dia a dia, etc.{" "}
            </span>
          )}
          {part4 && readMore(part5, setPart5)}
          {part5 && (
            <span>
              Finalmente, aos meus 18 anos,{" "}
              <u>
                decidi de vez mergulhar de vez neste mundo do desenvolvimento
              </u>
              , e logo depois montei todo o cronograma de estudos e um acordo
              pessoal de não desistir do meu sonho, e comecei a trilhar por esse
              caminho até hoje. Enfim, esse foi o resumo da minha história.
            </span>
          )}
        </p>
      </div>
    </section>
  );
}

export default Story;

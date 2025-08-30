import { useState } from "react";
import "../style/header.css";

export function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header>
        <h1>Venícius' Dev</h1>
        <nav>
          <ul>
            {window.innerWidth > 800 ? (
              <>
                <li>
                  <a href="#story">Minha história</a>
                </li>
                <li>
                  <a href="#whatIveDone">Portfólio</a>
                </li>
                <li>
                  <a href="#platforms">Plataformas</a>
                </li>
              </>
            ) : (
              <button
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                ☰
              </button>
            )}
          </ul>
        </nav>
      </header>

      <div
        className={menu ? "exitMenu" : "none"}
        onClick={() => {
          setMenu(!menu);
        }}
      ></div>
      <aside className={menu ? "menu-open" : "menu-closed"}>
        <nav>
          <ul>
            <li>
              <button onClick={() => setMenu(!menu)}>&#x2715;</button>
            </li>
            <li>
              <a href="#story">Minha história</a>
            </li>
            <li>
              <a href="#whatIveDone">Portfólio</a>
            </li>
            <li>
              <a href="#platforms">Plataformas</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

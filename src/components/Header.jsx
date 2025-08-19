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
            <li>
              <a href="#history">Minha história</a>
            </li>
            <li>
              <a href="#whatIDid">O que ja fiz</a>
            </li>
            <li>
              <a href="#platafoms">Plataformas</a>
            </li>
          </ul>
        </nav>
      </header>
      <aside>
        <nav>
          <a onClick={() => setMenu(!menu)}>☰</a>
          <ul>
            <li>
              <button onClick={() => setMenu(!menu)}>&#x2715;</button>
            </li>
            <li>
              <a href="#history">Minha história</a>
            </li>
            <li>
              <a href="#WhatIDid">O que ja fiz</a>
            </li>
            <li>
              <a href="#platafoms">Plataformas</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

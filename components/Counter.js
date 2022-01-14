import { LitElement, html, css } from "lit";

export class Counter extends LitElement {
  static properties = {
    count,
  };

  static styles = css`
    * {
      font-size: 200%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 64px;
      height: 64px;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  `;

  constructor() {
    super();
    this.count = 0;
  }

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  render() {
    return html`
      <button @click="${this.dec}">-</button>
      <span>${this.count}</span>
      <button @click="${this.inc}">+</button>
    `;
  }
}

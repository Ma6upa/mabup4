import { useEffect } from 'react';
import './App.css'

function App() {

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const enhance = id => {
    const element = document.getElementById(id)
    const text = element.innerText.split("");

    element.innerText = "";

    text.forEach((value, index) => {
      const outer = document.createElement("span");

      outer.className = "outer";

      const inner = document.createElement("span");

      inner.className = "inner";

      inner.style.animationDelay = `${rand(-5000, 0)}ms`;

      const letter = document.createElement("span");

      letter.className = "letter";

      letter.innerText = value;

      letter.style.animationDelay = `${index * 1000}ms`;

      inner.appendChild(letter);

      outer.appendChild(inner);

      element.appendChild(outer);
    });
  }

  useEffect(() => {
    enhance("tg-link");
    enhance("phone");
  }, [])

  return (
    <div id='text'>
      <div className='line'>
        <p className='word'>Валерий</p>
      </div>
      <div className='line'>
        <div></div>
        <p className='word'>Юдинцев</p>
      </div>
      <div className='line'>
        <p className='word'>Frontend</p>
      </div>
      <div className='line'>
        <p className='word'></p>
        <p className='word'>Developer</p>
      </div>
      <div className='line'>
        <a
          id='phone'
          href="mailto:yuvalerka@mail.ru"
          className='word fancy'
        >
          yuvalerka@mail.ru
        </a>
      </div>
      <div className='line'>
        <p className='word'>tg</p>
        <a
          id="tg-link"
          href="https://t.me/mabup4"
          target="_blank"
          className="word fancy"
        >
          @mabup4
        </a>
      </div>
    </div>
  )
}

export default App

const creditDiv = document.createElement("div");
creditDiv.classList.add("credit");
creditDiv.innerHTML = `bypass by <a href="https://ikonik.lol" target="_blank" rel="noopener noreferrer">ikonik</a> and implemented by <a href="https://bio.petezahgames.com" target="_blank" rel="noopener noreferrer">PeteZah</a>`;

const style = document.createElement("style");
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Parkinsans&display=swap');

  .credit {
    position: fixed;
    bottom: 20px;
    left: 10px;
    color: #FFFFFF;
    font-size: 14px;
    font-family: 'Parkinsans', sans-serif;
    z-index: 9999;
  }

  .credit a {
    color: #67a1ff;
    text-decoration: none;
    text-underline-offset: 10000px;
    transition: ease 0.2s;
  }

  .credit a:hover {
    color: #FFFF00;
    transition: ease 0.2s;
  }
`;

document.head.appendChild(style);
document.body.appendChild(creditDiv);

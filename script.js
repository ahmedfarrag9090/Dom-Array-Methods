const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

// api: https://randomuser.me/api/

async function addUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();

  const userName = `${data.results[0].name.first} ${data.results[0].name.last}`;

  const wealth = Math.floor(
    Math.random() * (Math.max(10000000) - Math.min(10000)) + Math.min(10000)
  )
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const userEl = document.createElement("h3");
  userEl.className = "person";
  userEl.setAttribute("data-wealth", wealth);

  const strongEl = document.createElement("strong");
  const userNameText = document.createTextNode(userName);
  const userWealthText = document.createTextNode(wealth);

  strongEl.appendChild(userNameText);
  userEl.appendChild(strongEl);
  userEl.appendChild(userWealthText);
  main.appendChild(userEl);
}

function doubleMoney() {
  const persons = document.querySelectorAll(".person");
  if (persons.length) {
    const personsWealth = [...persons].map(
      person => +person.dataset.wealth.split(",").join("") * 2
    );
    console.log(personsWealth);
  }
}

addUserBtn.addEventListener("click", addUser);

doubleBtn.addEventListener("click", doubleMoney);

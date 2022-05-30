/*
korisnik unosi ime, prezime i godinu rođenja,
a vraća se ime, prezime i godine korisnika
*/

/*deklaracija varijabli*/
//html elementi
const divInput = document.createElement("div");
const divReturn = document.createElement("div");
const inputElement = document.createElement("form");
const textInput = document.createElement("label");
const input = document.createElement("input");
const button = document.createElement("button");

const divAction = document.createElement("div");
const divBtns = document.createElement("div");

//stiliziranje elemenata
divInput.setAttribute("class", "container container-input");
divReturn.setAttribute("class", "container container-return");
inputElement.setAttribute("class", "input-element");
input.setAttribute("type", "date");

divAction.setAttribute("class", "action flex");
divBtns.setAttribute("class", "btns flex");

//deploy elemenata
document.body.append(divInput);
document.body.append(divReturn);
divInput.append(inputElement);
inputElement.append(divAction);
inputElement.append(divBtns);
divAction.append(textInput);
divAction.append(input);
divReturn.append(button);

button.innerHTML = "Prikaži godine";

textInput.innerHTML = "Unesi datum rođenja";

const today = new Date();
const year = today.getFullYear();

const p = document.createElement("p");
//event listeners
button.addEventListener("click", () => {
  divReturn.append(p);
  let enteredValue = new Date(input.value);
  const godine = year - enteredValue.getFullYear();
  p.innerHTML = `Imate ${godine} godine`;
});

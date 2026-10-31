let userInput = document.querySelector(".user-input");
let addBtn = document.querySelector(".add-btn");
let listParent = document.querySelector(".list-parent");

// Add Button Event
addBtn.addEventListener("click", () => {
  const userInputValue = userInput.value;

  if (!userInputValue || !userInputValue.trim()) {
    console.log("Hello");
    userInput.value = "Can't be empty texts";
    return;
  }

  console.log(userInput.value);
  const listElem = document.createElement("li");
  const buttonElem = document.createElement("button");
  const paraElem = document.createElement("p");

  paraElem.textContent = userInput.value;
  buttonElem.textContent = "Delete";

  listParent.appendChild(listElem);
  listElem.appendChild(paraElem);
  listElem.appendChild(buttonElem);
});

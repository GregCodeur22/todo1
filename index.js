const form = document.querySelector("form");

//storage part
function storList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodo() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = "<li> Cliquer sur un todo pour le supprimer </li>";
  }
}
getTodo();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li> ${item.value} </li>`;
  item.value = "";
  storList();
});

list.addEventListener("click", (e) => {
  e.target.remove();
  storList();
});

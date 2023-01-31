//Adds data to the DOM from the database
const addToDoToDOM = (text, id) => {
  var todolist = document.getElementById("list");
  var newLi = document.createElement("li");
  newLi.id = id;
  var bin = document.createElement("img");
  var btn = document.createElement("button");
  btn.className = "btn";
  btn.id = id;
  bin.src = "bin.png";
  bin.className = "bin";
  var text = document.createTextNode(text);
  todolist.appendChild(newLi);
  newLi.appendChild(text);
  newLi.appendChild(btn);
  btn.appendChild(bin);
};

//Delete data when bin is clicked
function deleteEvent() {
  document.getElementById("list").addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "BUTTON") {
      deleteData(e.target.id);
      location.reload();
    }
  });
}

//POST input to the data base
function handleOnInputEvent() {
  var toDo = document.getElementById("input").value;
  fetch("http://localhost:3000/", {
    method: "POST",
    body: JSON.stringify({ description: toDo, done: false }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  location.reload();
}

deleteEvent();

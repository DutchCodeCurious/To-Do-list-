const url = "http://localhost:3000/";
const head = {
  headers: {
    "Content-Type": "application/json",
  },
};

//Gets data from database
async function getData() {
  try {
    const response = await fetch(url, head);
    const data = await response.json();
    console.log(data);
    data.forEach((element) => {
      addToDoToDOM(element.description, element._id);
    });
  } catch (error) {
    console.log(error);
  }
}

getData();

//delete data from database
function deleteData(id) {
  fetch(`http://localhost:3000/${id}`, {
    method: "DELETE",
  });
}

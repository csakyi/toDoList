let form = document.querySelector("#addForm");
let itemList = document.querySelector("#items");
let filter = document.querySelector("#filter");
let inputElement = document.querySelector("#item");

//Form submit event

form.addEventListener("submit", addItem);

//Delete Event
itemList.addEventListener("click", removeItem);

//Filter Event
filter.addEventListener("keyup", filterItems);

//Add Item

function addItem(e) {
  e.preventDefault();
  // Get input value
  let newItem = document.querySelector("#item").value;

  if (document.querySelector("#item").value !== "") {
    // Create new li element
    let li = document.createElement("li");

    //Add class
    li.className = "list-group-item";

    // Add text node with input Value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    let deleteBtn = document.createElement("button");

    //Add classes to delet Btn
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    //Append text node
    deleteBtn.appendChild(document.createTextNode("X"));

    //Append Btn to li
    li.appendChild(deleteBtn);

    //Append Li to list
    itemList.appendChild(li);

    resetInput(e);

    //   inputElement.placeholder = "Suche nach Aufgaben";
    //   inputElement.value = "";
  } else {
    return;
  }
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Bist du dir sicher?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

//Reset Input
function resetInput(e) {
  inputElement.value = "";
  inputElement.placeholder = "Neue Aufgabe";
}

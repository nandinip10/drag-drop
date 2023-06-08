let draggedItem;

const allowDrop = (event) => {
  event.preventDefault();
};

const drag = (event) => {
  draggedItem = event.target;
};

const drop = (event) => {
  event.preventDefault();
  const container2 = document.getElementById("container2");
  container2.appendChild(draggedItem);

  const successMessage = document.getElementById("successMessage");
  successMessage.innerHTML = "Item dropped successfully!";
  successMessage.style.display = "block";

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 2000);
};

const reset = () => {
  const container1 = document.getElementById("container1");
  const container2 = document.getElementById("container2");

  container1.innerHTML =
    '<div class="container-title">Source Container</div>' +
    '<div class="item" draggable="true">Item 1</div>' +
    '<div class="item" draggable="true">Item 2</div>' +
    '<div class="item" draggable="true">Item 3</div>' +
    '<div class="item" draggable="true">Item 4</div>' +
    '<div class="item" draggable="true">Item 5</div>' +
    '<div class="item" draggable="true">Item 6</div>' +
    '<div class="item" draggable="true">Item 7</div>';

  container2.innerHTML =
    '<div class="container-title">Target Container</div>' +
    '<p id="droppedItems">Drop items here</p>' +
    '<div class="success-message" id="successMessage"></div>';

  // Reattach event listeners to draggable items
  const items = container1.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("dragstart", drag);
  }
};

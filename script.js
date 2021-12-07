//creating vars for both uls
const incompleteList = document.querySelector("#incomplete-items");
const completeList = document.querySelector("#complete-items");
const addForm = document.querySelector("todoForm");
const checkbox = document.getElementsByClassName("form-check-input");
let tempObject;

populatePageLists(todoItems);

todoForm.addEventListener("submit", event => {
    event.preventDefault();
    if (event.target.elements.userInput.value == '') 
        console.log("you didnt enter anything...");
    else
        tempObject = {
            id: (todoItems.length + 1),
            title: event.target.elements.userInput.value,
            completed: false
        }
        
        todoItems.push(tempObject);
        createCheckboxItem(tempObject);
})

function populatePageLists(listOfItems) {
    while (incompleteList.firstChild) {
        incompleteList.removeChild(incompleteList.firstChild);
    }
    while (completeList.firstChild) {
        completeList.removeChild(completeList.firstChild);
    }
    for (let i = 0; i < listOfItems.length; i++) {
        createCheckboxItem(listOfItems[i]);
    }
}

function checkboxMoveItem(itemObject) {
    if (itemObject.completed) {
        itemObject.completed = false;
        console.log(`${itemObject.title} is now not complete`)
        createCheckboxItem(itemObject);
    }
    else {
        itemObject.completed = true;
        console.log(`${itemObject.title} is now complete`)
        createCheckboxItem(itemObject);
    }
}

function removeItem(itemObject) {
    for (let i = 0; i < todoItems.length; i++) {
        if (itemObject.id == todoItems[i].id) {
            todoItems.splice(i, 1);
            resetIDs(todoItems);
            console.log(todoItems);
            populatePageLists(todoItems);
        }
    }
}

function resetIDs (listOfItems) {
    for (let i = 0; i < listOfItems.length; i++) {
        listOfItems[i].id = i + 1;
    }
}

function createCheckboxItem (itemObject) {
    const checkboxDiv = document.createElement("div");
    // checkboxDiv.classList.add("form-check")
    checkboxDiv.setAttribute("class", "form-check");
    const input = document.createElement("input");
    input.setAttribute("class",`form-check-input ${itemObject.id}`);
    input.setAttribute("type","checkbox");
    input.setAttribute("value","");
    const label = document.createElement("label");
    const remove = document.createElement("button");
    remove.setAttribute("class","remove-button");
    remove.innerHTML = "Remove";

    if (itemObject.completed) {
        input.setAttribute("id","flexCheckChecked");
        input.setAttribute("checked", "");
        label.setAttribute("for","flexCheckChecked");
        completeList.appendChild(checkboxDiv);
        checkboxDiv.appendChild(input); 
        label.setAttribute("class","form-check-label");
        label.innerHTML = itemObject.title;  
        checkboxDiv.appendChild(label);
        checkboxDiv.appendChild(remove);
        input.addEventListener("click", () => {
            checkboxMoveItem(itemObject);
            checkboxDiv.remove();
        })
        remove.addEventListener("click", () => {
            checkboxDiv.remove();
            removeItem(itemObject);
        })
    }
    else {
        label.setAttribute("for","flexCheckDefault");
        input.setAttribute("id","flexCheckDefault");
        incompleteList.appendChild(checkboxDiv);
        checkboxDiv.appendChild(input);
        label.setAttribute("class","form-check-label");
        label.innerHTML = itemObject.title; 
        checkboxDiv.appendChild(label);
        checkboxDiv.appendChild(remove); 
        input.addEventListener("click", () => {
            checkboxMoveItem(itemObject);
            checkboxDiv.remove();
        })
        remove.addEventListener("click", () => {
            checkboxDiv.remove();
            removeItem(itemObject);
        })
    }
}
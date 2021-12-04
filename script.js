//creating vars for both uls
const incompleteList = document.querySelector("#incomplete-items");
const completeList = document.querySelector("#complete-items");

for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].completed)
        createCheckboxItem(todoItems[i].title, completeList);
    else
        createCheckboxItem(todoItems[i].title, incompleteList);
}

function createCheckboxItem (str, parent) {
    const checkboxDiv = document.createElement("div");
    checkboxDiv.setAttribute("class", "form-check");
    parent.appendChild(checkboxDiv);
    const input = document.createElement("input");
    input.setAttribute("class","form-check-input");
    input.setAttribute("type","checkbox");
    input.setAttribute("value","");
    input.setAttribute("id","flexCheckDefault");
    checkboxDiv.appendChild(input);
    const label = document.createElement("label");
    label.setAttribute("class","form-check-label");
    label.setAttribute("for","flexCheckDefault");
    label.innerHTML = str;
    checkboxDiv.appendChild(label);
    return label;
}

// function addTodoItem (textContent, liClass, parent) {
//     const newListItem = document.createElement("li");
//     newListItem.setAttribute("class", liClass);
//     newListItem.innerHTML = textContent;
//     parent.appendChild(newListItem);
// }
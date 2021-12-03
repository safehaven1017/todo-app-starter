//creating vars for both uls
const incompleteList = document.querySelector("#incomplete-items");
const completeList = document.querySelector("#complete-items");

for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].completed)
        addListItem(todoItems[i].title, "complete-item", completeList);
    else
        addListItem(todoItems[i].title, "incomplete-item", incompleteList);
}

function addListItem (textContent, liClass, parentList) {
    const newListItem = document.createElement("li");
    newListItem.setAttribute("class", liClass);
    newListItem.innerHTML = textContent;
    parentList.appendChild(newListItem);
}

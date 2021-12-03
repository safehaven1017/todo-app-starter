//creating vars for both uls
const incompleteList = document.querySelector("#incomplete-items");
const completeList = document.querySelector("#complete-items");

function addListItem (textContent, liClass, parentList) {
    const newListItem = document.createElement("li");
    newListItem.setAttribute("class", liClass);
    newListItem.innerHTML = textContent;
    parentList.appendChild(newListItem);
    
}
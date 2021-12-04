//creating vars for both uls
const incompleteList = document.querySelector("#incomplete-items");
const completeList = document.querySelector("#complete-items");

createCheckboxItem(todoItems);

function createCheckboxItem (itemObject) {
    for (let i = 0; i < itemObject.length; i++) {
        const checkboxDiv = document.createElement("div");
        checkboxDiv.setAttribute("class", "form-check");
        const input = document.createElement("input");
        input.setAttribute("class","form-check-input");
        input.setAttribute("type","checkbox");
        input.setAttribute("value","");
        const label = document.createElement("label");

        if (itemObject[i].completed) {
            input.setAttribute("id","flexCheckChecked");
            input.setAttribute("checked", "");
            label.setAttribute("for","flexCheckChecked");
            completeList.appendChild(checkboxDiv);
            checkboxDiv.appendChild(input); 
            label.setAttribute("class","form-check-label");
            label.innerHTML = itemObject[i].title;  
            checkboxDiv.appendChild(label); 
        }
        else {
            label.setAttribute("for","flexCheckDefault");
            input.setAttribute("id","flexCheckDefault");
            incompleteList.appendChild(checkboxDiv);
            checkboxDiv.appendChild(input);
            label.setAttribute("class","form-check-label");
            label.innerHTML = itemObject[i].title; 
            checkboxDiv.appendChild(label); 
        }
    }
}
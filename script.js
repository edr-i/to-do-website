var input = document.getElementById("to-do");

let count = 0;

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (input.value != "") {
            //Take ul from site; create list item element
            let ul = document.getElementById("list");
            let element = document.createElement("li");
            //Give ID to list item
            element.id = "li-" + count;
            count++;
            element.className = "list-item";

            //Create delete button 
            let elementButton = document.createElement("a");
            elementButton.href = "#";
            elementButton.className = "delete-button";
            elementButton.innerHTML = "X";
            elementButton.addEventListener("click", function (event) {
                event.preventDefault();
                let li = event.target.parentElement;
                ul.removeChild(li);
            });

            //The list item takes the value of the input field
            element.innerHTML = input.value + " ";
            //Delete button gets added to list element
            element.appendChild(elementButton);
            //The list item is added to list
            ul.appendChild(element);
            //Input field gets cleared
            input.value = "";

            //List item turns gray when hovered over
            for (let i = 0; i < count; i++) {
                document.getElementById("li-" + i).onmouseover = () => {
                    document.getElementById("li-" + i).style.color = "gray";
                };
            }

            // List item is black when not hovered over
            for (let i = 0; i < count; i++) {
                document.getElementById("li-" + i).onmouseout = () => {
                    document.getElementById("li-" + i).style.color = "black";
                };
            }

            //List item has a strikethrough when clicekd
            element.addEventListener('click', (event) => {
                element.style.textDecoration = "line-through";
            });
        }

    }
});
var input = document.getElementById("to-do");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addToList(input.value);
        input.value = "";

        for (let i = 0; i < count; i++) {
            document.getElementById("li-" + i).onmouseover = () => {
                document.getElementById("li-" + i).style.color = "gray";
            };
        }

        for (let i = 0; i < count; i++) {
            document.getElementById("li-" + i).onmouseout = () => {
                document.getElementById("li-" + i).style.color = "black";
            };
        }

    }
});

let count = 0;

function addToList(text) {
    let element = document.createElement("li");
    element.id = "li-" + count;
    element.addEventListener('click', (event) => {
        element.style.textDecoration = "line-through";
    });
    count++;

    element.innerHTML = text;
    document.body.appendChild(element);
}


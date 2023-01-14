const t = document.getElementById("pt");
const t1 = document.getElementById("btn");
const t2 = document.getElementById("parent");

var todo = gettodo();
todo.forEach(todo => {
    addtodo(todo);

});


t1.addEventListener("click", function() {
    addtodo(t.value);
});

t.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addtodo(t.value);
    }
})

function addtodo(value) {
    if (!value) {
        return;
    }

    const container = document.createElement("div");
    t2.appendChild(container);

    const d = document.createElement("div");
    d.innerHTML = value;
    container.appendChild(d);


    const del = document.createElement("button");
    del.innerHTML = "delete";
    container.appendChild(del);


    del.addEventListener("click", function() {
        t2.removeChild(container);
    })

    const read = document.createElement("button");
    read.innerHTML = "read";
    container.appendChild(read);


    read.addEventListener("click", function() {
        d.style.textDecoration = "line-through";
    })
    const edit = document.createElement('button')
    edit.innerHTML = "edit";
    container.appendChild(edit);

    edit.addEventListener("click", function() {

    })

    t.value = "";
};



function checkValidtodo(value) {
    if (value) {
        return true;
    }
}

function gettodo() {
    var todo = localStorage.getItem("todo");
    if (todo) {
        return JSON.parse(todo);
    }
    return [];
}

function savetodo(value) {
    var todo = gettodo();
    todo.push(value);
    var todo = JSON.stringify(todo);
    localStorage.setItem("todo", todo);
}
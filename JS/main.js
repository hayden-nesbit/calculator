let app = document.getElementById("app")
app.className = "container"

// <------------------------------------------MODEL OBJECT--------------------------------------------->

//needs to start output at "0"
//needs to store textContent of each btn on click in array
//needs to update output for value of each click AND store total of all values clicked

class Model {
    constructor() {
        this.view = null;
        this.store = "";
    };

    setView(view) {
        this.view = view;
    }

    updateView(str) {
        this.view.updateView(str);
    }

    clear() {
        this.store = "0"
        this.view.updateDisplay(this.store);
    }
}

// <------------------------------------------CONTROLLER OBJECT (BUTTONS)--------------------------------------------->

class Controller {
    constructor(model) {
        this.model = model
        this.currentValue = 0;
        this.__this__ = this
    };

    numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
    operators = ("+", "x", "%", "-", "=")


}

// <------------------------------------------UI - VISUAL CALCULATOR OBJECT--------------------------------------------->

class View {
    constructor(controller) {
        this.controller = controller;
        this.display = 0
    };

    buildElement(elementType, classes, id, textContent) {
        let element = document.createElement(elementType)
        element.className = classes;
        element.id = id;
        element.innerHTML = textContent;
        return element
    }

    updateDisplay(currentValue) {
        this.display = currentValue
        document.getElementById("output").innerHTML = this.display
    }

    numberClick(e) {
        if (e.target.textContent === "C") {
            this.controller.model.clear()
            this.updateDisplay(this.controller.model.store);
        } else {
            this.controller.model.store += e.target.textContent;
            this.updateDisplay(Number(this.controller.model.store))
        }
    }

    buildCalculator() {

        let row1 = this.buildElement("div", "row", "", "")
        app.appendChild(row1)

        let col1 = this.buildElement("div", "col-md-4", "", "")
        row1.appendChild(col1)

        let col2 = this.buildElement("div", "col-md-4", "", "")
        row1.appendChild(col2)

        let mainDiv = this.buildElement("div", "container border rounded mt-5 p-4 mb-5", "mainDiv", "")
        col2.appendChild(mainDiv)

        let calcDiv = this.buildElement("div", "div", "main", "")
        mainDiv.appendChild(calcDiv)

        let rowA = this.buildElement("div", "row", "", "")
        mainDiv.appendChild(rowA)

        let colB = this.buildElement("div", "col-md-12 rounded mb-2 text-right", "output", this.display)
        rowA.appendChild(colB)

        let rowB = this.buildElement("div", "row", "", "")
        mainDiv.appendChild(rowB)

        let calcBtns = ["C", " ", " ", "%", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", " ", ".", "="]
        let k = 0;
        let col;
        for (let i = 0; i < 5; i++) {
            let row2 = this.buildElement("div", "row", "", "")
            mainDiv.appendChild(row2)
            for (let j = 0; j < 4; j++) {
                col = this.buildElement("button", "col rounded-circle h3 m-1 text-white bg-dark", "btn" + k, calcBtns[k]);
                if (!(k === 1 || k === 2 || k === 17)) {
                    col.addEventListener("click", this.numberClick.bind(this));
                }
                if (k === 3 || k === 7 || k === 11 || k === 15 || k === 19) {
                    col.classList.remove("bg-dark")
                    col.classList.add("bg-warning")
                }
                if (k === 0 || k === 1 || k === 2) {
                    col.classList.remove("bg-dark")
                    col.classList.add("bg-secondary")
                }
                k++
                row2.appendChild(col)
            }
        }

        let col3 = this.buildElement("div", "col-md-4", "", "")
        row1.appendChild(col3)
    }
}



// <------------------------------------------INITIALIZE--------------------------------------------->

function init() {
    // create and connect MVC objects
    let model = new Model();
    let controller = new Controller(model);
    let view = new View(controller);
    model.setView(view);

    //populate screen
    view.buildCalculator();
}

init();
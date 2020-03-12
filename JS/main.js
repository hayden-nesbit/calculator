let app = document.getElementById("app")
app.className = "container"

// <------------------------------------------MODEL OBJECT--------------------------------------------->

//needs to start output at "0"
//needs to store textContent of each btn on click in array
//needs to update output for value of each click AND store total of all values clicked

let clickArr = [];

class Model {
    constructor() {
        this.view = null;
    };

    setView(view) {
        this.view = view;
    }

    updateView(str) {
        this.view.updateView(str);

    }



}

// <------------------------------------------CONTROLLER OBJECT (BUTTONS)--------------------------------------------->

class Controller {
    constructor(model) {
        this.model = model
        this.currentValue = 0;
        this.__this__ = this
    };

    numberClick(e) {

        this.updateDisplay(e.target.textContent)

    }

    add() {

    }

    subtract() {

    }

    multiply() {

    }

    divide() {

    }

    equals() {

    }

    decimal() {

    }

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


    buildCalculator() {

        let row1 = this.buildElement("div", "row", "", "")
        app.appendChild(row1)

        let col1 = this.buildElement("div", "col-md-4", "", "")
        row1.appendChild(col1)

        let col2 = this.buildElement("div", "col-md-4", "", "")
        row1.appendChild(col2)

        let mainDiv = this.buildElement("div", "container border rounded mt-5 p-4 mb-5 bg-secondary", "", "")
        col2.appendChild(mainDiv)

        let calcDiv = this.buildElement("div", "div", "", "")
        mainDiv.appendChild(calcDiv)

        let rowA = this.buildElement("div", "row", "", "")
        mainDiv.appendChild(rowA)

        let colB = this.buildElement("div", "col-md-12 border rounded mb-2 bg-white text-right", "output", this.display)
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
                col = this.buildElement("button", "col border rounded-circle h5 m-1 bg-white", "btn" + k, calcBtns[k]);
                if (!(k === 1 || k === 2 || k === 17)) {
                    col.addEventListener("click", this.controller.numberClick.bind(this));
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

    console.log({ model, view, controller })

    //populate screen
    view.buildCalculator();
}

init();
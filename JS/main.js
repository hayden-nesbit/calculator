let app = document.getElementById("app")
app.className = "container"

// <------------------------------------------MODEL OBJECT--------------------------------------------->

class Model {
    constructor() {
        this.view = null;
        this.display = "0";
        this.clickCount = 0;
        this.firstNum = 0;
        this.operator = "";
        this.secondNum = 0;
    };

    setView(view) {
        this.view = view;
    }

    clear() {
        this.display = "0"
        this.firstNum = 0;
        this.operator = "";
        this.secondNum = 0;
        this.view.updateDisplay(this.display);
    }

    calculate() {
        // if (e.target.textContent === "%") {
        //     this.display = this.display / 100
        //     this.view.updateDisplay(this.display)
        // }



        if (this.operator === "x") {
            this.display = this.firstNum * this.secondNum
            this.view.updateDisplay(this.display)
        }
        if (this.operator === "-") {
            this.display = this.firstNum - this.secondNum
            this.view.updateDisplay(this.display)
        }
        if (this.operator === "+") {
            this.display = +this.firstNum + +this.secondNum
            this.view.updateDisplay(this.display)
        }
        if (this.operator === "/") {
            this.display = this.firstNum / this.secondNum
            this.view.updateDisplay(this.display)
        }
        this.firstNum = this.display

    }

    updateValue(e) {
        // this is the Model

        let operators = "+x/-=";
        let arr = []

        for (let i = 0; i < this.display.length; i++) {
            for (let j = 0; j < operators.length; j++) {
                if (this.display[i] === operators[j]) {
                    arr = this.display.split(operators[j])
                    this.firstNum = arr[0]
                    this.operator = operators[j]
                    this.secondNum = arr[1]
                }
            }
        }

        if (e.target.textContent === "C") {
            this.clear()
            this.view.updateDisplay(this.display);

        } else if (!(e.target.textContent === "=" ||
                e.target.textContent === "+" ||
                e.target.textContent === "-" ||
                e.target.textContent === "x" ||
                e.target.textContent === "/" ||
                e.target.textContent === "%") &&
            !this.operator) {
            console.log("first number")
            if (this.display == "0") {
                this.display = e.target.textContent;
                this.firstNum = e.target.textContent
            } else {
                this.display += e.target.textContent;
                this.firstNum += e.target.textContent
            }
            this.view.updateDisplay(this.display);

        } else if (!(e.target.textContent === "=" || e.target.textContent === "+" || e.target.textContent === "-" || e.target.textContent === "x" || e.target.textContent === "/" || e.target.textContent === "%") && this.operator) {
            console.log("second number")
            if (this.display == "0") {
                this.display = e.target.textContent;
                this.secondNum = e.target.textContent
            } else {
                this.display += e.target.textContent;
                this.secondNum += e.target.textContent
            }
            this.view.updateDisplay(this.display);


        } else if ((e.target.textContent === "=" || e.target.textContent === "+" || e.target.textContent === "-" || e.target.textContent === "x" || e.target.textContent === "/") && !this.operator) {
            this.display = "0"
            this.operator = e.target.textContent

        } else if ((e.target.textContent === "=" || e.target.textContent === "+" || e.target.textContent === "-" || e.target.textContent === "x" || e.target.textContent === "/") && this.operator) {
            this.calculate()

        }

        console.log(this.firstNum, this.operator, this.secondNum)

    }
}

// <------------------------------------------CONTROLLER OBJECT (BUTTONS)--------------------------------------------->

class Controller {
    constructor(model) {
        this.model = model
        this.currentValue = 0;
    };

    handleClick(e) {
        this.model.updateValue(e);
    }
}

// <-----------------------------------------------VIEW OBJECT (UI)------------------------------------------------->

class View {
    constructor(controller) {
        this.controller = controller;
    };

    buildElement(elementType, classes, id, textContent) {
        let element = document.createElement(elementType)
        element.className = classes;
        element.id = id;
        element.innerHTML = textContent;
        return element
    }

    updateDisplay(currentValue) {
        this.controller.model.display = currentValue
        document.getElementById("output").innerHTML = this.controller.model.display
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

        let colB = this.buildElement("div", "col-md-12 rounded mb-2 text-right", "output", this.controller.model.display)
        rowA.appendChild(colB)

        let rowB = this.buildElement("div", "row", "", "")
        mainDiv.appendChild(rowB)

        let calcBtns = ["C", " ", "%", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", " ", ".", "="]
        let k = 0;
        let col;
        for (let i = 0; i < 5; i++) {
            let row2 = this.buildElement("div", "row", "", "")
            mainDiv.appendChild(row2)
            for (let j = 0; j < 4; j++) {
                col = this.buildElement("button", "col rounded-circle h3 m-1 text-white bg-dark", "btn" + k, calcBtns[k]);
                if (!(k === 1 || k === 2 || k === 17)) {
                    col.addEventListener("click", this.controller.handleClick.bind(this.controller));
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
let app = document.getElementById("app")
app.className = "container"



// <------------------------------------------UI - VISUAL CALCULATOR--------------------------------------------->

class View {
    constructor() {};

    buildElement(elementType, classes, id, textContent) {
        let element = document.createElement(elementType)
        element.className = classes;
        element.id = id;
        element.innerHTML = textContent;
        return element
    }

    buildCalculator() {

        let row1 = this.buildElement("div", "row", "", "")
        app.appendChild(row1)

        let col1 = this.buildElement("div", "col-md-4", "", "")
        row1.appendChild(col1)

        let col2 = this.buildElement("div", "col-md-4", "", "")
        row1.appendChild(col2)

        let mainDiv = this.buildElement("div", "container border mt-5 p-4 bg-secondary", "", "")
        col2.appendChild(mainDiv)

        let calcDiv = this.buildElement("div", "div", "", "")
        mainDiv.appendChild(calcDiv)

        let rowA = this.buildElement("div", "row", "", "")
        mainDiv.appendChild(rowA)

        let colB = this.buildElement("div", "col-md-12 border p-5 mb-2 bg-white", "", "")
        rowA.appendChild(colB)

        let rowB = this.buildElement("div", "row", "", "")
        mainDiv.appendChild(rowB)

        let k = 1;
        let col;
        for (let i = 0; i < 5; i++) {
            let row2 = this.buildElement("div", "row", "", "")
            mainDiv.appendChild(row2)
            for (let j = 0; j < 4; j++) {
                col = this.buildElement("div", "col border bg-white pt-5", "btn" + k, "")
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

    let view = new View()
    view.buildCalculator()

}

init();
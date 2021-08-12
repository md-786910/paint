// editor make
let color = document.querySelector("#color")
color.addEventListener("change", (e) => {
    applyColor(color.value)
})
function applyColor(color) {

}
function _(selector) {
    return document.querySelector(selector)
}
function setup() {

    let canvas = createCanvas(1530, 600);
    canvas.parent("#convas-wrapper")
    background(255);
}
function mouseDragged(event) {
    let type = _("#pen-pencil").checked ? "pencil" : "brush";
    let size = parseInt(_("#pen-size").value)

    let color = _("#color").value

    fill(color);
    stroke(color);
    if (type == "pencil") {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    else {
        ellipse(mouseX, mouseY, size, size)
    }
}
// reset canvas
_("#reset-canvas").addEventListener("click", () => {
    background(255)
})

// save canvas
_("#save-canvas").addEventListener("click", () => {
    saveCanvas(canvas, "sketch", "png")
})


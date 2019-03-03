class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Canvas {
    constructor(element) {
        this.element = element;
        this.context = element.getContext('2d');
        this.shapes = [];
    }

    drawRect(x, y, rect, color) {
        color = color || '#'+ ((1<<24) * Math.random() | 0).toString(16);

        this.context.fillStyle = color;
        this.context.fillRect(x, y, rect.width, rect.height);
        this.shapes.push({ x, y, shape: rect, color });
    }

    clear() {
        this.context.clearRect(0, 0, 800, 500);
        this.shapes = [];
    }

    createMemento() {
        return new Canvas.Memento([...this.shapes]);
    }

    setState(memento) {
        this.clear();

        for (let { x, y, shape: rect, color } of memento.state) {
            this.drawRect(x, y, rect, color);
        }
    }
}

Canvas.Memento = class {
    constructor(state) {
        this.state = state;
    }
};

const states = [];
const canvas = new Canvas(document.querySelector('#canvas'));
const undoButton = document.querySelector('button');

canvas.element.addEventListener('click', event => {
    const { clientX: x, clientY: y } = event;
    const rect = new Rect(75, 75);

    canvas.drawRect(x, y, rect)

    states.push(canvas.createMemento());
});

undoButton.addEventListener('click', () => {
    states.pop();

    if (states.length === 0) {
        return canvas.clear();
    }

    let previousState = states[states.length - 1];

    if (previousState) {
        canvas.setState(previousState);
    }
});

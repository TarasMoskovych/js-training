class Menu {
    constructor(name, ...children) {
        this.name = name;
        this.children = children;
    }

    add(menuItem) {
        this.children.push(menuItem);

        return this;
    }

    remove(menuItem) {
        this.children.remove(menuItem);

        return this;
    }

    render(depth = 0) {
        console.log(`${'  '.repeat(depth)}/${this.name}`);

        for (let child of this.children) {
            child.render(depth + 1);
        }
    }
}

class MenuItem {
    constructor(name) {
        this.name = name;
    }

    add() {}

    remove() {}

    render(depth = 0) {
        console.log(`${'  '.repeat(depth)}${this.name}`);
    }
}

const mainMenu = new Menu('Design Patterns');

const creationalMenu = new Menu('Creational');
const structuralMenu = new Menu('Structural');
const behavioralMenu = new Menu('Behavioral');

creationalMenu
    .add(new MenuItem('Singleton'))
    .add(new MenuItem('Factory'))
    .add(new MenuItem('Builder'));

structuralMenu
    .add(new MenuItem('Adapter'))
    .add(new MenuItem('Bridge'))
    .add(new MenuItem('Composite'));

behavioralMenu
    .add(new MenuItem('Observer'))
    .add(new MenuItem('Mediator'))
    .add(new MenuItem('Strategy'));

mainMenu
    .add(creationalMenu)
    .add(structuralMenu)
    .add(behavioralMenu);

mainMenu.render();

class ElementCollection {
    constructor(...elements) {
        this.elements = elements;
    }

    addClass(className) {
        for (let element of this.elements) {
            element.classList.add(className);
        }

        return this;
    }

    removeClass(className) {
        for (let element of this.elements) {
            element.classList.remove(className);
        }

        return this;
    }

    addEventHandler(event, handler) {
        for (let element of this.elements) {
            element.addEventListener(event, handler);
        }

        return this;
    }

    removeEventHandler(event, handler) {
        for (let element of this.elements) {
            element.removeEventListener(event, handler);
        }

        return this;
    }
}

class DOM {
    static get(selector) {
        let elements = document.querySelectorAll(selector);

        return new ElementCollection(...elements);
    }
}

const buttons = DOM.get('button');

buttons.addClass('btn').addEventHandler('click', () => console.log('Click'));

// 1
class Raptor {
    constructor(build) {
        this.specimenId = build.specimenId;
        this.speed = build.speed;
        this.plumage = build.plumage;
    }

    static get Builder() {
        class Builder {
            constructor(specimenId) {
                this.specimenId = specimenId;
            }

            withSpeed(speed) {
                this.speed = speed;
                return this;
            }

            withPlumage(plumage) {
                this.plumage = plumage;
                return this;
            }

            build() {
                return new Raptor(this);
            }
        }

        return Builder;
    }
}

let raptorBuilder1 = new Raptor.Builder("244E-C");
let raptor1 = raptorBuilder1.build();

let raptorBuilder2 = new Raptor.Builder("3998A-D");
let raptor2 = new Raptor(raptorBuilder2);

let raptor3 = new Raptor.Builder("88C")
    .withSpeed(45)
    .withPlumage("heavy")
    .build();

console.log(raptor3);

// 2
class HtmlElement {
    constructor(name, content){
        this.name = name;
        this.content = content;
        this.children = [];
    }

    toString() {
        let output = '';

        output = '<' + this.name + '>';

        if (this.content) {
            output += this.content;
        }

        for (let child of this.children) {
            output += child.toString();
        }

        output += '</' + this.name + '>'

        return output;
    }
}

class HtmlBuilder {
    constructor(rootName) {
        this.root = new HtmlElement(rootName);
    }

    appendChild(name, content) {
        const element = new HtmlElement(name, content);
        this.root.children.push(element);
    }

    build() {
        return this.root.toString();
    }
}

const builder = new HtmlBuilder('ul');
builder.appendChild('li', 'hello');
builder.appendChild('li', 'world');

const html = builder.build();
console.log(html);

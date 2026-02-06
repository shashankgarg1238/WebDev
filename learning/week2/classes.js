class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    describe() {
        console.log( `A ${this.color} rectangle with width ${this.width} and height ${this.height}.`);
    }
}

const rect = new Rectangle(10, 5, 'blue');
const area = rect.area();
//console.log(`Area: ${area}`);
//rect.describe();  

const date = new Date();
console.log(date.toDateString());

const map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name')); // John


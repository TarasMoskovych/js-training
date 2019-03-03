function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'white';
}

function Truck(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'used';
    this.color = options.color || 'black';
}

function VehicleFactory() {
    this.createVehicle = function(options) {
        switch (options.vehicleType) {
            case 'car':
                return new Car(options);
            case 'truck':
                return new Truck(options);
        }
    }
}

const factory = new VehicleFactory();

const car = factory.createVehicle({
    vehicleType: 'car',
    doors: 4,
    color: 'silver',
    state: 'Brand New'
});

const truck = factory.createVehicle({
    vehicleType: 'truck',
    doors: 2,
    color: 'white',
    state: 'used'
});

console.log(car);
console.log(truck);

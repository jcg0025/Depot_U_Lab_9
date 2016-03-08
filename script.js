document.addEventListener('DOMContentLoaded', function () {
var Vehicle = function(){};
Vehicle.prototype.move = function(){
    console.log('moved');
}
Vehicle.prototype.damage = function(){
    console.log('bang');
}
Vehicle.prototype.total = function(){}

function Car() {
    Vehicle.call(this);
}

function CopCar () {
    Car.call(this);
}

function Motorcycle () {
    Vehicle.call(this);
}

function Tank () {
    Vehicle.call(this);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructer = Car;
CopCar.prototype = Object.create(Car.prototype);
CopCar.prototype.constructer = CopCar;
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructer = Motorcycle;
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructer = Tank;


var car = new Car();


var copcar = new CopCar();

var moto = new Motorcycle();
moto.move();

var tank = new Tank();
tank.damage();






















})
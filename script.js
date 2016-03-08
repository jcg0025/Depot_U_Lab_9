document.addEventListener('DOMContentLoaded', function () {
var Vehicle = function(){};
Vehicle.prototype.move = function(){
    console.log('moved');
}
Vehicle.prototype.damage = function(){}
Vehicle.prototype.total = function(){}

function Car() {
    Vehicle.call(this);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructer = Car;

Car.prototype.move = function() {
    console.log('no');
}

var car = new Car();
car.move();




















})
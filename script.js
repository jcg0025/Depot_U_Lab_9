document.addEventListener('DOMContentLoaded', function () {
var Vehicle = function(){
    this.div = null;
};

Vehicle.prototype.move = function(){}
Vehicle.prototype.damage = function(){}
Vehicle.prototype.total = function(){}

function Car() {
    Vehicle.call(this);
    this.div = document.getElementsByClassName('car');
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


// Motorcycle.prototype.move = function() {
//     var motoDiv = document.getElementsByClassName('moto');
//     motoDiv.addEventListener('click', function() {
//         console.log('weee');
//     })
// }


// var car = new Car();


// var copcar = new CopCar();

// var moto = new Motorcycle();
// moto.move();

// var tank = new Tank();
// tank.damage();


var ranNum = (Math.floor(Math.random()*10) +1)*100;
var randomPx = String(ranNum).concat('px');
console.log(randomPx);


var newDiv = document.createElement('div');
newDiv.style.marginTop = randomPx;

var carButton = document.getElementById('CarButton');
carButton.addEventListener('click', function(){
    var ranNum = (Math.floor(Math.random()*20) +1)*10;
    var randomPx = String(ranNum).concat('px');
    var newDiv = document.createElement('div');
    newDiv.style.marginTop = randomPx
    newDiv.style.marginLeft = randomPx;
    newDiv.style.backgroundColor = 'blue';
    newDiv.className = 'car';
    document.body.appendChild(newDiv);
})

var copButton = document.getElementById('CopCarButton');
copButton.addEventListener('click', function(){
    var ranNum = (Math.floor(Math.random()*10) +1)*100;
    var randomPx = String(ranNum).concat('px');
    var newDiv = document.createElement('div');
    newDiv.style.marginTop = randomPx
    newDiv.style.marginLeft = randomPx;
    newDiv.style.backgroundColor = 'red';
    newDiv.className ='cop';
    document.body.appendChild(newDiv);
})

var motoButton = document.getElementById('MotorcycleButton');
motoButton.addEventListener('click', function(){
    var ranNum = (Math.floor(Math.random()*10) +1)*100;
    var randomPx = String(ranNum).concat('px');
    var newDiv = document.createElement('div');
    newDiv.style.marginTop = randomPx
    newDiv.style.marginLeft = randomPx;
    newDiv.style.backgroundColor = 'green';
    newDiv.className ='moto';
    document.body.appendChild(newDiv);
})

var tankButton = document.getElementById('TankButton');
tankButton.addEventListener('click', function(){
    var ranNum = (Math.floor(Math.random()*10) +1)*100;
    var randomPx = String(ranNum).concat('px');
    var newDiv = document.createElement('div');
    newDiv.style.marginTop = randomPx
    newDiv.style.marginLeft = randomPx;
    newDiv.style.backgroundColor = 'yellow';
    newDiv.className ='tank';
    document.body.appendChild(newDiv);
})


Car.prototype.damage = function() {
    this.div.addEventListener('click', function() {
        console.log('bang');
    })
}

var car = new Car();
car.div.damage();



















})
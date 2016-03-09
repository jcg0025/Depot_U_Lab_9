var Vehicle = function(){
    this.div = document.createElement('div');
};

Vehicle.prototype.move = function(speed){
    this.speed = speed;
    $(this.div).animate({left:'+=1000px'},10000/speed);
}
Vehicle.prototype.damage = function(damageLimit){
    var counter = 0;
    this.damageLimit = damageLimit;
    this.div.addEventListener('click', function() {
        counter +=1;
        if (counter == damageLimit) {
            this.remove();
        }
    })
}



function Car() {
    Vehicle.call(this);
}

function CopCar() {
    Car.call(this);
}

function Motorcycle() {
    Vehicle.call(this);
}

function Tank() {
    Vehicle.call(this);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
CopCar.prototype = Object.create(Car.prototype);
CopCar.prototype.constructor = CopCar;
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Tank;


Car.prototype.insert = function() {
    this.div.className = 'car'; 
    document.getElementById('vehicleHolder').appendChild(this.div); 
    
    //Random Placement Engine
    var randomNumber = String(Math.floor(Math.random()*90)*10);
    var randomPx = randomNumber.concat('px');
    var randomNumber2 = String(Math.floor(Math.random()*110)*10);
    var randomPx2 = randomNumber2.concat('px');
    this.div.style.marginTop = randomPx;
    this.div.style.marginLeft = randomPx2;
}

CopCar.prototype.insert = function() {
    this.div.className = 'copCar';
    document.getElementById('vehicleHolder').appendChild(this.div);
    
    //Random Placement Engine
    var randomNumber = String(Math.floor(Math.random()*90)*10);
    var randomPx = randomNumber.concat('px');
    var randomNumber2 = String(Math.floor(Math.random()*110)*10);
    var randomPx2 = randomNumber2.concat('px');
    this.div.style.marginTop = randomPx;
    this.div.style.marginLeft = randomPx2;
}

Motorcycle.prototype.insert = function() {
    this.div.className = 'moto';
    document.getElementById('vehicleHolder').appendChild(this.div);
    
    //Random Placement Engine
    var randomNumber = String(Math.floor(Math.random()*90)*10);
    var randomPx = randomNumber.concat('px');
    var randomNumber2 = String(Math.floor(Math.random()*110)*10);
    var randomPx2 = randomNumber2.concat('px');
    this.div.style.marginTop = randomPx;
    this.div.style.marginLeft = randomPx2;
}

Tank.prototype.insert = function() {
    this.div.className = 'tank';
    document.getElementById('vehicleHolder').appendChild(this.div);
    
    //Random Placement Engine
    var randomNumber = String(Math.floor(Math.random()*90)*10);
    var randomPx = randomNumber.concat('px');
    var randomNumber2 = String(Math.floor(Math.random()*110)*10);
    var randomPx2 = randomNumber2.concat('px');
    this.div.style.marginTop = randomPx;
    this.div.style.marginLeft = randomPx2;
}

Car.prototype.reverse = function(speed) {
    this.speed = speed; 
    $(this.div).animate({left:'-=1000px'},10000/speed);   
}

CopCar.prototype.move = function(speed) {
     this.speed = speed;
    $(this.div).animate({top:'+=1000px'},10000/speed);
}

CopCar.prototype.siren = function(interval) {
    this.interval = interval;
    console.log(this.div);
    var div = this.div;
    var siren = function () {
        div.style.backgroundColor = 'red';
    }
    var siren2 = function () {
        div.style.backgroundColor = 'blue';
    }
    window.setInterval(siren, 2000);
    window.setInterval(siren2, 1500);
}

Motorcycle.prototype.move = function(speed) {
    this.speed = speed;
     $(this.div).animate({top:'-=1000px', left:'+=1000px'},10000/speed);
}

function addCar() {
    var car = new Car();
    car.insert();
    car.move(1);
    car.damage(2);
   
}

function addCopCar() {
    var copcar = new CopCar();
    copcar.insert();
    copcar.move(1);
    copcar.damage(3);
    copcar.siren(2000);
}

function addMotorcycle() {
    var moto = new Motorcycle();
    moto.insert();
    moto.move(2);
    moto.damage(1);
}

function addTank() {
    var tank = new Tank();
    tank.insert();
    tank.move(0.5);
    tank.damage(10);
}




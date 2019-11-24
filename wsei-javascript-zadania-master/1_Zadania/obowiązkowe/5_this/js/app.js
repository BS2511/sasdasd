
var car = {
    brand: "Mercedes",
    color: "Black",
    numberOfKilometers: 0,
    printCarInfo: function(){
        return this.color + " " + this.brand + ", " + this.numberOfKilometers + "km";
    },
    drive: function(km){
        this.numberOfKilometers += km;
    }
};

car.serviceDates = ['23-11-2018', '20-11-2019'];

car.addNewServiceDate = function(date){
    car.serviceDates.push(date);
}

car.returnAllServiceDates = function(){
    for(var i = 0; i < car.serviceDates.length; i++){
        console.log(car.serviceDates[i]);
    }
}

var stairs = {
    step: 0,
    up: function(){
        this.step++;
    },
    down: function(){
        this.step--;
    }, 
    printStep: function(){
        return this.step;
    }
}

// funkcja bind apply i call
// zmiana "kontekstu" w js
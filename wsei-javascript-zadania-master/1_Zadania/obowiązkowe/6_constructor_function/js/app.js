
//zanim 
//zaczniesz coś robić to należy zainicjować 
//pustego array'a(var alicebasket = new Basket([],0))
function Basket(products, sum){
    this.p = products;
    this.s = sum;
    this.addProduct = function(name, price){
        this.p.push(name);
        this.s += price;
    };
    this.showBasket = function(){
        for(var i =0; i < this.p.length; i++){
            console.log(this.p[i]);
        }
        console.log(this.s);
    }
    
};


function Calculator(num1, num2){
    this.n1 = num1;
    this.n2 = num2;
    this.add = function(n1,n2){
        
    }
}

/*
    b = Object.create(a)
    do obiektu b będzie przypisany obiekt a
    b ma w protoypie a
    a ma w prototypie Object, a object null(chyba??)

    
*/

// normal function
// const add = function(a,b)  {
//     console.log('function is called');
//     c = a * b;
//     console.log(c);
// }
// arrow function

// const myfunc = {
    
//     hello: function(){
//         console.log("I am inside function");
//     }
//    }


// declaring and using variables in javascript

// let c=5;
// console.log(c);
// c=6;
// console.log(c);

// myfunc.hello();

// const  greetfunction = myfunc.hello;
// greetfunction();

// const  boundgreetfunction = myfunc.hello.bind(myfunc);
// boundgreetfunction();

// let mix = 6;
// max = mix+1;
// nix = mix;
// console.log(max);
// console.log('nix');
// console.log('Nix');

// let a = 'hi i am string';
// console.log(a);


// b={
//     a : 1,
//     c : 2,
//     d : 3
// }
// const e = () => {};

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

mycar = new Model("Ford","Mustang");
console.log(mycar.show());
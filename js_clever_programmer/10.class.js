//class
//methods  car.start() , car.stop() ->parathesis
//properties car.name = "rolls royal" , car.model="007" , car.color="green"

//type of class is Function
// A JavaScript class is a type of function. Classes are declared with the class keyword. We will use function expression syntax to initialize a function and class expression syntax to initialize a class.

class Car {
  constructor(name, color, speed) {
    (this.name = name), (this.color = color), (this.speed = speed);
  }

  getspeed = () => {
    return this.speed;
  };

  drive = (speed = 20) => {
    this.speed += speed;
    return `car speed is ${this.speed} km/h`;
  };

  stop = () => {
    this.speed = 0;
    return `car is stopped speed is ${this.speed} km/h`;
  };

  break = (speed) => {
    this.speed -= speed;
    return `speed is slow down by ${this.speed} km/h`;
  };
}

// const detail = new Car("rolls royal", "white", 0);
// console.log("Drive by 10");
// console.log(detail.drive(10));
// console.log(detail.drive());

// console.log(detail.getspeed());

// console.log(detail.drive(10));
// console.log(detail.drive(80));

// console.log("break by 10");
// console.log(detail.break(10));
// console.log(detail.break(10));
// console.log(detail.break(10));

// console.log("stop");
// console.log(detail.stop());

//realworld example

//Here array is a class and .push .concate .filter .split .join all are the methods
/*ex  class Array{
    push(){

    }
    split(){

    }
}*/
num = [1, 2, 3, 4, 5];
num.push(4); // .push is function,method or property? ans =>method
// console.log(typeof num);

Array.prototype.myPush = function (ele) {
  //this means array
  this[this.length] = ele;
};

a = [1, 2, 3, 4, 5];
// console.log(a.length);
// console.log(a.mylength());
// a.myPush(6);
// a.myPush(7);
// a.myPush(8);

// console.log(a);

//bank class

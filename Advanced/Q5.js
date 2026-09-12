

/* The setTimeout call fails because if a function relies on context (this) and is
passed as a reference instead of being called directly, its context is lost.
Called directly as car.description(), the context comes from before the dot, ie,
the car object. Passed to setTimeout as a reference, this no longer refers to car,
so this.make, this.model and this.year are all undefined. */

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description();
setTimeout(car.description, 200);


// a)
setTimeout(function() { car.description(); }, 400);
setTimeout(() => car.description(), 500);


// b)
car = { ...car, year: 1973 };
console.log('car is now a clone with year overridden to ' + car.year);


/* c) The delayed calls in a) use the new values (1973), not the original 1964.
The wrapper does not hold a copy of the object it looks up the variable car at
the moment it executes 400ms later. setTimeout is asynchronous, so all the
synchronous code (including the reassignment in b) has already executed by then,
and car now refers to the clone. */


// d)
car.description = car.description.bind(car);
setTimeout(car.description, 600);


/* e) The clone also copies description, but that is the bound reference from d),
which has the original context explicitly bound into it so the clone's own make
is ignored and binding cannot be overridden. */
let carClone = { ...car, make: 'Ferrari' };
console.log('carClone.make is ' + carClone.make);
carClone.description();
setTimeout(carClone.description, 800);
// Module 3 Advanced JavaScript - Q5 (losing this)

// Why setTimeout(car.description, 200) fails:
// description relies on context (this) to find make, model and year. When it is
// called directly as car.description(), the context comes from before the dot,
// ie. the car object. But setTimeout takes the function as a reference instead of
// calling it directly, so that context is lost - this no longer refers to car, and
// this.make, this.model and this.year are all undefined.

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description();                  // works: This car is a Porsche 911 from 1964
setTimeout(car.description, 200);   // fails: This car is a undefined undefined from undefined


// a) Fix by wrapping the call inside a function.
// The context now comes from before the dot (ie. the car object), so this works.
setTimeout(function() { car.description(); }, 400);
setTimeout(() => car.description(), 500);   // same as above, arrow function (more common)


// b) Change the year by creating a clone of the original and overriding it.
// The spread copies the existing properties, then year is set alongside them.
car = { ...car, year: 1973 };
console.log('b) car is now a clone with year overridden to ' + car.year);


// c) The delayed calls in a) print the NEW values (1973), not the original 1964.
//    The wrapper function does not hold a copy of the car object - it looks up the
//    variable car at the moment it executes, which is 400ms later. By then all the
//    synchronous code has finished, including the reassignment in b), so car refers
//    to the clone. The old object still exists in memory but nothing points at it.
//    (If the clone had been stored in a new variable instead of reassigning car,
//    the wrapper would still find the original object and print 1964.)


// d) Use bind to explicitly bind the right context into the function reference,
// so no wrapper function is needed.
car.description = car.description.bind(car);
setTimeout(car.description, 600);   // works: This car is a Porsche 911 from 1973


// e) Change another property by creating a clone and overriding it.
// The spread also copies description - but that is now the BOUND function from d),
// still bound to the object it was bound to, so the clone's own make is ignored.
let carClone = { ...car, make: 'Ferrari' };
console.log('e) carClone.make is ' + carClone.make);   // Ferrari
carClone.description();             // still prints Porsche - binding cannot be overridden
setTimeout(carClone.description, 800);  // also prints Porsche 911 from 1973
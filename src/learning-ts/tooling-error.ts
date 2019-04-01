let num: number = 5;
let nIame: string = 'Alex';
let isPresent: boolean = true;

// no error
num += 1;

// error 
num += 'x'; // Type 'string' is not assignable to type 'number'.ts(2322)
